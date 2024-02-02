from flask import Blueprint, Flask, jsonify,  render_template, request, redirect, url_for, session
from elasticsearch import Elasticsearch



# connexion a elastic
es = Elasticsearch(['http://elasticsearch:9200'])
# Création du Blueprint

rech = Blueprint('recherche', __name__)


@rech.route('/resultat', methods=['POST'])
def recherche():
    term =  request.json.get('search_term')
    print("hello",term)
    # Construction de la requête Elasticsearch pour la recherche initiale
    query = {
        "query": {
            "bool": {
                "must": [
                    {"multi_match": {
                        "query": term,
                        "fields": ["title", "authors", "keywords", "institutions"]
                    }}
                ]
            }
        },
 
    }
    
    if not es.indices.exists(index='article_valide'):
        print("The index 'article_valide' does not exist.")
        
    # Exécution de la requête Elasticsearch pour la recherche initiale
    results = es.search(index='article_valide', body=query)
    global hits # une variable globale pour stocker les resultat de la recherche pour les utiliser dans filtre 
    # Stockez les résultats dans une variable
    hits = results['hits']['hits']

    response_data = [{'id': hit['_id'], 'source': hit['_source']} for hit in hits]

    return jsonify(response_data)
    
@rech.route('/filtrage', methods=['POST'])
def filtre():
    auteur_filter = request.json.get('authors', [])
    institution_filter = request.json.get('institutions')
    date_debut_filter = request.json.get('date_debut')
    date_fin_filter = request.json.get('date_fin')
    keyword_filter = request.json.get('keywords', [])
    global hits
    filtered_results = apply_filters(hits, auteur_filter, institution_filter, date_debut_filter, date_fin_filter, keyword_filter)
    return jsonify(filtered_results)



def apply_filters(results, auteur_filter, institution_filter, date_debut_filter, date_fin_filter, keyword_filter):
    filtered_results = results

    if auteur_filter:
        # Convert the filter to a set for faster membership tests
        auteur_set = set(auteur_filter)

        filtered_results = [
            result for result in filtered_results
            if auteur_set.issubset(author.strip() for author in result.get('_source', {}).get('authors', '').split(','))
        ]

    if institution_filter:
        filtered_results = [result for result in filtered_results if institution_filter.lower() in result.get('_source', {}).get('institutions', '').lower()]

    if keyword_filter:
        # Convert the filter to a set for faster membership tests
        keyword_set = set(keyword_filter)

        filtered_results = [
            result for result in filtered_results
            if keyword_set.issubset(keyword.strip() for keyword in result.get('_source', {}).get('keywords', '').split(','))
        ]

    if date_debut_filter and date_fin_filter:
        filtered_results = [result for result in filtered_results if date_debut_filter <= result.get('_source', {}).get('publication_date') <= date_fin_filter]

    return filtered_results