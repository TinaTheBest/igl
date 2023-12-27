from flask import Blueprint, Flask,  render_template, request, redirect, url_for, session

from elasticsearch import Elasticsearch



# connexion a elastic
es = Elasticsearch(['http://localhost:9200/'])
# Création du Blueprint
recherche = Blueprint('filtres', __name__)

@recherche.route('/recherche', methods=['POST'])
def recherche():
        term = "titre1"
        
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
        
        # Exécution de la requête Elasticsearch pour la recherche initiale
        results = es.search(index='article_valide', body=query)

        # Stockez les résultats dans la session Flask
        session['search_results'] = results['hits']['hits']

        # Afficher les résultats dans la console
        print(results['hits']['hits'])
        
        return "Résultats affichés dans la console."
    
@recherche.route('/filtrage', methods=['POST'])
def filtre():
    # Récupérez les résultats stockés dans la session Flask
    search_results = session.get('search_results', [])
    
    # Récupérez les filtres spécifiés par l'utilisateur
    auteur_filter = "auteur1"
    
    institution_filter = request.form.get('institution')
    date_debut_filter = request.form.get('date_debut')
    date_fin_filter = request.form.get('date_fin')
    
    # Appliquez les filtres
    filtered_results = apply_filters(search_results, auteur_filter, institution_filter, date_debut_filter, date_fin_filter)

    # Afficher les résultats filtrés dans la console
    print(filtered_results)
    
    return "Résultats filtrés affichés dans la console."

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
