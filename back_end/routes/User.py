from flask import Blueprint, jsonify, request
from .db_init.models import Document, db, Acount
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
    results = es.search(index=valid_index_name, body={"query": {"match_all": {}}, "size": 10000})  # Specify size as 1000 to retrieve all documents

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
    try:
        # Vérifie si l'utilisateur existe dans la base de données
        user = Acount.query.get(id_user)
        if not user:
            return jsonify({"error": "Utilisateur non trouvé"}), 404

        # Vérifie si le document existe dans la base de données
        document = Document.query.get(id_doc)
        if not document:
            return jsonify({"isfav": False}), 404

        # Vérifie si le document est dans les favoris de l'utilisateur
        is_favori = document in user.articles_favoris
        return jsonify({"isfav": is_favori}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500





