from flask import Blueprint, jsonify, request
from elasticsearch import Elasticsearch

es = Elasticsearch(['http://elasticsearch:9200'])

Favorit = Blueprint('favorits', __name__)


@Favorit.route('/get_all_fav', methods=['GET'])
def get_all_fav():

    data = request.json

    index_name = data.get("id")
    # Define your Elasticsearch index
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)

    # Perform a match_all query to get all documents
    results = es.search(index=index_name, body={"query": {"match_all": {}}})

    # Extract relevant information from the search results
    hits = results['hits']['hits']
    response_data = [{'id': hit['_id'], 'source': hit['_source']} for hit in hits]

    return jsonify(response_data)


@Favorit.route('/AjouterFavorit', methods=['POST'])
def valider_doc():
    data = request.json

    index_name = data.get("id")
    # Define your Elasticsearch index
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)
 
    del data["id"]
    es.index(index=index_name, body=data)
    return jsonify({"message": "Document ajouté avec succès"}), 201



@Favorit.route('/delete_favorit/<document_id>', methods=['DELETE'])
def delete_document(document_id):
    # Utilisez la méthode es.delete pour supprimer le document par ID
    try:
        data = request.json

        index_name = data.get("id")
        
        es.delete(index=index_name, id=document_id)
        return jsonify({"message": "Document supprimé avec succès"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
