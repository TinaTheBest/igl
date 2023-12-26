from flask import Blueprint, jsonify, request
from elasticsearch import Elasticsearch

es = Elasticsearch(['http://localhost:9200'])

Favorit = Blueprint('favorits', __name__)

index_name = "favorit"

@Favorit.route('/get_all_data', methods=['GET'])
def get_all_data():
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
    document_data = request.json
    # Vérifier si l'index existe, le créer s'il n'existe pas
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)
    es.index(index=index_name, body=document)
    return jsonify({"message": "Document ajouté avec succès"}), 201



@Favorit.route('/delete_favorit/<document_id>', methods=['DELETE'])
def delete_document(document_id):
    # Utilisez la méthode es.delete pour supprimer le document par ID
    try:
        es.delete(index=index_name, id=document_id)
        return jsonify({"message": "Document supprimé avec succès"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

