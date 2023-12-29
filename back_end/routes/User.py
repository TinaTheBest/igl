from flask import Blueprint, jsonify, request
from elasticsearch import Elasticsearch

es = Elasticsearch(['http://elasticsearch:9200'])

user = Blueprint('users', __name__)

@user.route('/get_all_data', methods=['GET'])
def get_all_data():
    # Check if the validated articles index exists
    valid_index_name = "article_valide"
    if not es.indices.exists(index=valid_index_name):
        es.indices.create(index=valid_index_name)

    # Perform a match_all query to get all validated articles
    results = es.search(index=valid_index_name, body={"query": {"match_all": {}}})

    # Extract relevant information from the search results
    hits = results['hits']['hits']
    
    return jsonify(hits)

