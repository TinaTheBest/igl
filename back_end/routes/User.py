from flask import Blueprint, jsonify, request
from elasticsearch import Elasticsearch

es = Elasticsearch(['http://elasticsearch:9200'])

user = Blueprint('users', __name__)

@user.route('/get_all_data', methods=['GET'])
def get_all_data():
    """
    Endpoint pour obtenir toutes les données validées.

    :return: Renvoie toutes les données validées.
    :rtype: flask.Response
    """
    # Check if the validated articles index exists
    valid_index_name = "article_valide"
    if not es.indices.exists(index=valid_index_name):
        es.indices.create(index=valid_index_name)

    # Perform a match_all query to get all validated articles
    results = es.search(index=valid_index_name, body={"query": {"match_all": {}}, "size": 1000})  # Specify size as 1000 to retrieve all documents

    # Extract relevant information from the search results
    hits = results['hits']['hits']

    return jsonify(hits)


@user.route('/isfav/<id_user>/<id_doc>', methods=['GET'])
def isfav(id_user, id_doc):
    """
    Endpoint pour vérifier si un document est dans les favoris d'un utilisateur.

    :param str id_user: Identifiant de l'utilisateur.
    :param str id_doc: Identifiant du document.

    :return: Renvoie un dictionnaire indiquant si le document est dans les favoris de l'utilisateur.
    :rtype: flask.Response
    """
    # Check if the user's favorite index exists
    fav_index_name = id_user
    if not es.indices.exists(index=fav_index_name):
        return jsonify({"message": "User index not found", "isfav": False})

    # Check if the document with id_doc exists in the user's favorite index
    try:
        es.get(index=fav_index_name, id=id_doc)
        return jsonify({"isfav": True})
    except Exception as e:
        # Document not found
        return jsonify({"isfav": False})





