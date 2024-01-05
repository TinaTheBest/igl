import unittest
from unittest.mock import patch, Mock
from flask import Flask, jsonify, request
from elasticsearch import Elasticsearch
# Fonction recherche
def recherche():

    from elasticsearch import Elasticsearch
    
    es = Elasticsearch(['http://elasticsearch:9200'])
    term = request.form.get('search_term')
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
        return jsonify({"error": "L'index 'article_valide' n'existe pas."}), 404
        
    results = es.search(index='article_valide', body=query)
    hits = results['hits']['hits']
    response_data = [{'id': hit['_id'], 'source': hit['_source']} for hit in hits]
    return jsonify(response_data)

# Tests
class TestRechercheRoute(unittest.TestCase):

    def setUp(self):
        # Créez une instance de l'application Flask pour les tests
        self.app = Flask(__name__)
        self.app.route('/resultat', methods=['POST'])(recherche)
        self.app.config['TESTING'] = True
        self.client = self.app.test_client()

    def test_recherche_route_without_elasticsearch(self):
        with patch('elasticsearch.Elasticsearch', Mock()) as MockedElasticsearch:
            mock_search_result = {
                'hits': {
                    'hits': [
                        {
                            '_id': '1',
                            '_source': {'titre': 'Article 1', 'auteurs': 'Auteur 1', 'mots_cles': ['Python'], 'institution': 'Institution 1'}
                        }
                    ]
                }
            }
            MockedElasticsearch.return_value.search.return_value = mock_search_result
            
            # Effectuez une requête POST à la route de recherche
            response = self.client.post('/resultat', data={'search_term': 'Python'})
            
            # Assurez-vous que le code de statut de la réponse est 200
            self.assertEqual(response.status_code, 200)

            # Vérifiez que les données renvoyées correspondent à ce que vous attendez
            response_data = response.json
            self.assertIsInstance(response_data, list)
            self.assertEqual(len(response_data), 1)
            self.assertEqual(response_data[0]['id'], '1')
            self.assertEqual(response_data[0]['source']['titre'], 'Article 1')



if __name__ == '__main__':
    unittest.main()
