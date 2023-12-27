from flask import Blueprint, jsonify, request
from elasticsearch import Elasticsearch

es = Elasticsearch(['http://elasticsearch:9200'])

ModArticle = Blueprint('ModArticles', __name__)

@ModArticle.route('/get_all_data', methods=['GET'])
def get_all_data():
    # Define your Elasticsearch index
    index_name = "article_non_valide"
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)
    # Perform a match_all query to get all documents
    results = es.search(index=index_name, body={"query": {"match_all": {}}})

    # Extract relevant information from the search results
    hits = results['hits']['hits']
    response_data = [{'id': hit['_id'], 'source': hit['_source']} for hit in hits]

    return jsonify(response_data)


@ModArticle.route('/Valider/<document_id>', methods=['POST'])
def valider_doc(document_id):
    document_data = request.json
    # Vérifier si l'index existe, le créer s'il n'existe pas
    index_name = "article_valide"
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)
    es.index(index=index_name,id=document_id, body=document)
    es.delete(index="article_non_valide", id=document_id)
    return jsonify({"message": "Document ajouté avec succès"}), 201



@ModArticle.route('/update_document/<document_id>', methods=['PUT'])
def update_document(document_id):
    # Récupérer les données mises à jour depuis la requête
    updated_data = request.json
    index_name = "article_non_valide"
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)
    # Utiliser la méthode es.update pour mettre à jour le document
    es.update(index=index_name, id=document_id, body={"doc": updated_data})

    return jsonify({"message": "Document mis à jour avec succès"}), 200


@ModArticle.route('/delete_document/<document_id>', methods=['DELETE'])
def delete_document(document_id):
    # Utilisez la méthode es.delete pour supprimer le document par ID
    try:
        es.delete(index="article_non_valide", id=document_id)
        return jsonify({"message": "Document supprimé avec succès"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

