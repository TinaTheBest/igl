from flask import Blueprint, jsonify, request
from elasticsearch import Elasticsearch
from .db_init.models import Document, db


es = Elasticsearch(['http://elasticsearch:9200'])

ModArticle = Blueprint('ModArticles', __name__)

@ModArticle.route('/get_all_data', methods=['GET'])
def get_all_data():
    """
    Endpoint pour récupérer toutes les données des articles non validés.

    :return: Renvoie une liste de tous les articles non validés.
    :rtype: flask.Response
    """
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
    """
    Endpoint pour valider un document, le déplacer vers les articles validés et le supprimer des articles non validés.

    :param str document_id: ID du document à valider.

    :return: Renvoie un message indiquant si la validation a réussi.
    :rtype: flask.Response
    """
    document_data = request.json
    # Vérifier si l'index existe, le créer s'il n'existe pas
    index_name = "article_valide"
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)

    es.index(index=index_name,id=document_id, body=document_data)
    es.delete(index="article_non_valide", id=document_id)
    new_data = Document(id=document_id)
    db.session.add(new_data)
    db.session.commit()


    return jsonify({"message": "Document ajouté avec succès"}), 201



@ModArticle.route('/update_document/<document_id>', methods=['PUT'])
def update_document(document_id):
    """
    Endpoint pour mettre à jour un document dans les articles non validés.

    :param str document_id: ID du document à mettre à jour.

    :return: Renvoie un message indiquant si la mise à jour a réussi.
    :rtype: flask.Response
    """
    # Récupérer les données mises à jour depuis la requête
    updated_data = request.json

    # Define your Elasticsearch index
    index_name = "article_non_valide"

    # Vérifier si l'index existe, le créer s'il n'existe pas
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)

    # Utiliser la méthode es.update pour mettre à jour le document
    try:
        es.update(index=index_name, id=document_id, body={"doc": updated_data})
        return jsonify({"message": "Document mis à jour avec succès"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@ModArticle.route('/delete_document/<document_id>', methods=['DELETE'])
def delete_document(document_id):
    """
    Endpoint pour supprimer un document des articles non validés.

    :param str document_id: ID du document à supprimer.

    :return: Renvoie un message indiquant si la suppression a réussi.
    :rtype: flask.Response
    """
    # Utilisez la méthode es.delete pour supprimer le document par ID
    try:
        es.delete(index="article_non_valide", id=document_id)
        return jsonify({"message": "Document supprimé avec succès"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@ModArticle.route('/get_article_details/<article_id>', methods=['GET'])
def get_article_details(article_id):
    """
    Endpoint pour récupérer les détails d'un article non validé.

    :param str article_id: ID de l'article à récupérer.

    :return: Renvoie les détails de l'article.
    :rtype: flask.Response
    """
    index_name = "article_non_valide"

    create_index_if_not_exists(index_name)

    # Fetch article details based on the provided article_id
    try:
        article_details = es.get(index=index_name, id=article_id)['_source']
        return jsonify(article_details), 200
    except Exception as e:
        return jsonify({"error": f"Error fetching article details: {str(e)}"}), 500