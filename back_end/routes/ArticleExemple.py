from flask import Blueprint, jsonify

article_bp = Blueprint('articles', __name__)

@article_bp.route('/')
def get_articles():
    # Logique pour récupérer les articles depuis Elasticsearch
    # Retourner les articles au format JSON
    return 'hello heyy'
