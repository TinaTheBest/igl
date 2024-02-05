from flask import Blueprint, jsonify, request
from elasticsearch import Elasticsearch
from .db_init.models import Document,favoris, db , Acount

es = Elasticsearch(['http://elasticsearch:9200'])

Favorit = Blueprint('favorits', __name__)

from flask import jsonify

@Favorit.route('/get_all_fav/<user_id>', methods=['GET'])
def get_all_fav(user_id):
    """
    Endpoint pour récupérer tous les favoris d'un utilisateur.

    :param str user_id: ID de l'utilisateur pour lequel récupérer les favoris.

    :return: Renvoie une liste de tous les favoris de l'utilisateur.
    :rtype: flask.Response
    """
    try:
        # Récupérer l'utilisateur à partir de l'ID
        user = Acount.query.get(user_id)
        if not user:
            return jsonify({}), 404

        # Récupérer les IDs des documents favoris de l'utilisateur
        favoris_ids = [favori.id for favori in user.articles_favoris]

        # Récupérer les données des favoris à partir d'Elasticsearch
        favoris_data = []
        for doc_id in favoris_ids:
            # Recherche le document dans Elasticsearch par son ID
            result = es.get(index='article_valide', id=doc_id)
            favoris_data.append({"id": result['_id'], 'source': result['_source']})

        return jsonify(favoris_data), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500




@Favorit.route('/AjouterFavorit/<user_id>/<doc_id>', methods=['POST'])
def valider_doc(user_id, doc_id):
    """
    Endpoint pour ajouter un document aux favoris d'un utilisateur.

    :param str user_id: ID de l'utilisateur auquel ajouter le favori.
    :param str doc_id: ID du document à ajouter aux favoris.

    :return: Renvoie un message indiquant si l'ajout a réussi.
    :rtype: flask.Response
    """
    try:
        # Vérifie si l'utilisateur existe dans la base de données
        user = Acount.query.get(user_id)
        if not user:
            return jsonify({"error": "Utilisateur non trouvé"}), 404

        # Vérifie si le document existe dans la base de données
        document = Document.query.get(doc_id)
        if not document:
            return jsonify({"error": "Document non trouvé"}), 404

        # Vérifie si le document est déjà dans les favoris de l'utilisateur
        if document in user.articles_favoris:
            return jsonify({"message": "Le document est déjà dans les favoris de l'utilisateur"}), 200

        # Ajoute le document aux favoris de l'utilisateur
        user.articles_favoris.append(document)
        db.session.commit()
        return jsonify({"message": "Document ajouté aux favoris de l'utilisateur"}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500



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
        # Vérifie si l'utilisateur existe dans la base de données
        user = Acount.query.get(user_id)
        if not user:
            return jsonify({"error": "Utilisateur non trouvé"}), 404

        # Vérifie si le document existe dans la base de données
        document = Document.query.get(document_id)
        if not document:
            return jsonify({"error": "Document non trouvé"}), 404

        # Vérifie si le document est dans les favoris de l'utilisateur
        if document not in user.articles_favoris:
            return jsonify({"message": "Le document n'est pas dans les favoris de l'utilisateur"}), 200

        # Supprime le document des favoris de l'utilisateur
        user.articles_favoris.remove(document)
        db.session.commit()
        return jsonify({"message": "Document supprimé des favoris de l'utilisateur"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


