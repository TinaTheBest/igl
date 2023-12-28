from flask import Blueprint, Flask, jsonify,  render_template, request, redirect, url_for, session
from elasticsearch import Elasticsearch



# connexion a elastic
es = Elasticsearch(['http://elasticsearch:9200'])
# Création du Blueprint
Rech = Blueprint('recherche', __name__)

@Rech.route('/resultat', methods=['POST'])
def recherche():
    term =  request.form.get('search_term')
    
    # Construction de la requête Elasticsearch pour la recherche initiale
    query = {
        "query": {
            "bool": {
                "must": [
                    {"multi_match": {
                        "query": term,
                        "fields": ["titre", "auteurs", "mots_cles", "institution"]
                    }}
                ]
            }
        },
        "sort": {"date_publication": {"order": "desc"}}
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
    
@Rech.route('/filtrage', methods=['POST'])
def filtre():
    # Récupérez les résultats stockés dans la session Flask
   # search_results = session.get('search_results', [])
    
    # Récupérez les filtres spécifiés par l'utilisateur
    auteur_filter = request.form.get('auteur_filter')    
    institution_filter = request.form.get('institution')
    date_debut_filter = request.form.get('date_debut')
    date_fin_filter = request.form.get('date_fin')
    global hits
    # Appliquez les filtres
    filtered_results = apply_filters(hits, auteur_filter, institution_filter, date_debut_filter, date_fin_filter)

    # Afficher les résultats filtrés dans la console
    print(filtered_results)
    
    return jsonify(filtered_results)

def apply_filters(results, auteur_filter, institution_filter, date_debut_filter, date_fin_filter):
    # Appliquer les filtres nécessaires
    # Vous pouvez adapter cette fonction en fonction de vos critères de filtrage réels
    filtered_results = results

    if auteur_filter:
        filtered_results = [result for result in filtered_results if auteur_filter.lower() in str(result.get('_source', {}).get('auteurs', [])).lower()]

    if institution_filter:
        filtered_results = [result for result in filtered_results if institution_filter.lower() in str(result.get('_source', {}).get('institution', '')).lower()]

    # Appliquer le filtre par période de dates si spécifié
    if date_debut_filter and date_fin_filter:
        filtered_results = [result for result in filtered_results if date_debut_filter <= result.get('_source', {}).get('date_publication') <= date_fin_filter]

    return filtered_results
