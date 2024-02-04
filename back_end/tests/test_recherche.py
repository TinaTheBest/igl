import unittest
from unittest.mock import patch, Mock
from flask import Flask, jsonify, request
from elasticsearch import Elasticsearch
# Fonction recherche
def recherche():
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
