from flask import Blueprint, jsonify, request
from elasticsearch import Elasticsearch

es = Elasticsearch(['http://elasticsearch:9200'])

Favorit = Blueprint('favorits', __name__)

@Favorit.route('/get_all_fav/<user_id>', methods=['GET'])
def get_all_fav(user_id):
    """
    Endpoint pour récupérer tous les favoris d'un utilisateur.

    :param str user_id: ID de l'utilisateur pour lequel récupérer les favoris.

    :return: Renvoie une liste de tous les favoris de l'utilisateur.
    :rtype: flask.Response
    """

    index_name = user_id
    # Define your Elasticsearch index
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)

    # Perform a match_all query to get all documents
    results = es.search(index=index_name, body={"query": {"match_all": {}}})

    # Extract relevant information from the search results
    hits = results['hits']['hits']
    response_data = [{'id': hit['_id'], 'source': hit['_source']} for hit in hits]

    return jsonify(response_data)

@Favorit.route('/AjouterFavorit/<user_id>/<doc_id>', methods=['POST'])
def valider_doc(user_id, doc_id):
    """
    Endpoint pour ajouter un document aux favoris d'un utilisateur.

    :param str user_id: ID de l'utilisateur auquel ajouter le favori.
    :param str doc_id: ID du document à ajouter aux favoris.

    :return: Renvoie un message indiquant si l'ajout a réussi.
    :rtype: flask.Response
    """
    data = request.json
    index_name = user_id
    # Define your Elasticsearch index
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)
 
    es.index(index=index_name,id= doc_id, body=data)
    return jsonify({"message": "Document ajouté avec succès"}), 201



@Favorit.route('/delete_favorit/<user_id>/<document_id>', methods=['DELETE'])
def delete_document(user_id,document_id):
    """
    Endpoint pour supprimer un document des favoris d'un utilisateur.

    :param str user_id: ID de l'utilisateur dont supprimer le favori.
    :param str document_id: ID du document à supprimer des favoris.

    :return: Renvoie un message indiquant si la suppression a réussi.
    :rtype: flask.Response
    """
    # Utilisez la méthode es.delete pour supprimer le document par ID
    try:
        index_name = user_id

        es.delete(index=index_name, id=document_id)
        return jsonify({"message": "Document supprimé avec succès"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500