from flask import Blueprint, Flask, jsonify,  render_template, request, redirect, url_for, session
from elasticsearch import Elasticsearch



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
        }
    }

    if not es.indices.exists(index='article_valide'):
        print("The index 'article_valide' does not exist.")

    # Execute Elasticsearch query for the initial search
    results = es.search(index='article_valide', body=query)

    # Store the results in a variable
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
    institution_filter = request.json.get('institutions')
    date_debut_filter = request.json.get('date_debut')
    date_fin_filter = request.json.get('date_fin')
    keyword_filter = request.json.get('keywords', [])  # Récupérer comme une liste
    print(keyword_filter)
    global hits
    filtered_results = apply_filters(hits, auteur_filter, institution_filter, date_debut_filter, date_fin_filter, keyword_filter)
    return jsonify(filtered_results)

def apply_filters(results, auteur_filter, institution_filter, date_debut_filter, date_fin_filter,keyword_filter):
    """
    Applique les filtres sur les résultats de la recherche.
    """
    filtered_results = results

    if auteur_filter:
        # Itérer sur chaque auteur dans le filtre
        for auteur in auteur_filter:
            # Utiliser une condition pour filtrer les résultats
            filtered_results = [result for result in filtered_results if any(auteur.lower() in author.lower() for author in result.get('_source', {}).get('authors', []))]

        """filtered_results = [result for result in filtered_results if auteur_filter.lower() in str(result.get('_source', {}).get('authors', [])).lower()]"""

    if institution_filter:
        filtered_results = [result for result in filtered_results if institution_filter.lower() in str(result.get('_source', {}).get('institutions', '')).lower()]
    if keyword_filter:
         # Itérer sur chaque mot-clé dans le filtre
        for keyword in keyword_filter:
            # Utiliser une condition pour filtrer les résultats
            filtered_results = [result for result in filtered_results if any(keyword.lower() in kw.lower() for kw in result.get('_source', {}).get('keywords', []))]

        """filtered_results = [result for result in filtered_results if keyword_filter.lower() in str(result.get('_source', {}).get('keywords', [])).lower() ]"""
    if date_debut_filter and date_fin_filter:
        filtered_results = [result for result in filtered_results if date_debut_filter <= result.get('_source', {}).get('publication_date') <= date_fin_filter]

    return filtered_results
