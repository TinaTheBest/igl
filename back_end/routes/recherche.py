from flask import Blueprint, Flask, jsonify,  render_template, request, redirect, url_for, session
from elasticsearch import Elasticsearch
from datetime import datetime



# connexion a elastic
es = Elasticsearch(['http://elasticsearch:9200'])
# Création du Blueprint

rech = Blueprint('recherche', __name__)

@rech.route('/resultat', methods=['POST'])
def recherche():
    term = request.json.get('search_term')
    print("Search term:", term)

    # Construct Elasticsearch query for the initial search
    query = {
        "query": {
            "bool": {
                "should": [
                    {
                        "multi_match": {
                            "query": term,
                            "fields": ["title", "authors", "keywords", "institutions"],
                            "fuzziness": "AUTO"
                        }
                    },
                    {
                        "wildcard": {
                            "title": {
                                "value": f"*{term}*"
                            }
                        }
                    },
                    {
                        "wildcard": {
                            "authors": {
                                "value": f"*{term}*"
                            }
                        }
                    },
                    {
                        "wildcard": {
                            "keywords": {
                                "value": f"*{term}*"
                            }
                        }
                    },
                    {
                        "wildcard": {
                            "institutions": {
                                "value": f"*{term}*"
                            }
                        }
                    }
                ]
            }
        },
        "sort": [
            {
                "publication_date": {
                    "order": "desc",
                    "unmapped_type": "date"
                }
            }
        ], "size": 10000
    }

    if not es.indices.exists(index='article_valide'):
        print("The index 'article_valide' does not exist.")

    # Execute Elasticsearch query for the initial search with sorting
    results = es.search(index='article_valide', body=query)

    # Store the results in a variable
    global hits
    hits = results['hits']['hits']

    # Extract necessary information from hits
    response_data = [{'id': hit['_id'], 'source': hit['_source']} for hit in hits]

    return jsonify(response_data)
    
@rech.route('/filtrage', methods=['POST'])
def filtre():
    """
    Filtrage des résultats de recherche d'articles basé sur différents critères.

    :param auteur_filter: Filtre pour les auteurs.
    :type auteur_filter: list
    :param institution_filter: Filtre pour l'institution.
    :type institution_filter: string
    :param date_debut_filter: Date de début pour le filtrage (format: date).
    :type date_debut_filter: string
    :param date_fin_filter: Date de fin pour le filtrage (format: date).
    :type date_fin_filter: string
    :param keyword_filter: Filtre pour les mots-clés.
    :type keyword_filter: list

    :status 200: Renvoie les résultats filtrés.
    """
    auteur_filter = request.json.get('authors', [])  # Récupérer comme une liste
    institution_filter = request.json.get('institutions',[])
    date_debut_filter = request.json.get('date_debut')
    date_fin_filter = request.json.get('date_fin')
    keyword_filter = request.json.get('keywords', [])  # Récupérer comme une liste
    print(keyword_filter)
    global hits
    filtered_results = apply_filters(hits, auteur_filter, institution_filter, date_debut_filter, date_fin_filter, keyword_filter)
    return jsonify(filtered_results)

def apply_filters(results, auteur_filter, institution_filter, date_debut_filter, date_fin_filter, keyword_filter):
    filtered_results = results

    if auteur_filter:
        # Convert the filter to a set for faster membership tests
        auteur_set = set(auteur.lower() for auteur in auteur_filter)

        filtered_results = [
            result for result in filtered_results
            if auteur_set.issubset(author.strip().lower() for author in result.get('_source', {}).get('authors', '').split(','))
        ]

    if institution_filter:
         institution_set = set(institution.lower() for institution in institution_filter)

         filtered_results = [
            result for result in filtered_results
            if institution_set.issubset(institution.strip().lower() for institution in result.get('_source', {}).get('institutions', '').split(','))
        ]




    if keyword_filter:
        # Convert the filter to a set for faster membership tests
        keyword_set = set(keyword.lower() for keyword in keyword_filter)

        filtered_results = [
            result for result in filtered_results
            if keyword_set.issubset(keyword.strip().lower() for keyword in result.get('_source', {}).get('keywords', '').split(','))
        ]

    if date_debut_filter and date_fin_filter:
        date_debut_filter = datetime.strptime(date_debut_filter, '%Y-%m-%d').date()
        date_fin_filter = datetime.strptime(date_fin_filter, '%Y-%m-%d').date()

        filtered_results = [
            result for result in filtered_results
            if result.get('_source', {}).get('publication_date') and
            date_debut_filter <= datetime.strptime(result.get('_source', {}).get('publication_date'), '%Y-%m-%d').date() <= date_fin_filter
        ]


    return filtered_results