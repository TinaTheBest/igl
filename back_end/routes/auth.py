from flask import Blueprint, jsonify, request ,current_app
from .models import db, Acount
from sqlalchemy.exc import IntegrityError

auth = Blueprint('Authentification', __name__)


@auth.route('/get_moderateurs', methods=['GET'])
def get_data():
    # Exemple de lecture de données depuis la base de données
    data_from_db = Acount.query.filter_by(status='moderateur').all()

    # Formatage des données pour la réponse
    formatted_data = [{"id": item.id, "name": item.name, "email" :item.email} for item in data_from_db]

    return jsonify({"message": "GET request received", "data_from_db": formatted_data})


@auth.route('/sginin', methods=['POST'])
def post_data():
    try:
        data_from_request = request.json
        new_data = Acount(id=data_from_request.get('id'), name=data_from_request.get('name'), email=data_from_request.get('email'), password=data_from_request.get('password'), status = "user")

        # Ajoutez la nouvelle donnée à la base de données
        db.session.add(new_data)
        db.session.commit()

        return jsonify({"message": "POST request received"})
    except IntegrityError as e:
        db.session.rollback()
        return jsonify({"error": "ID must be unique"})


@auth.route('/AjouterMod', methods=['POST'])
def post_mod():
    try:
        data_from_request = request.json
        new_data = Acount(id=data_from_request.get('id'), name=data_from_request.get('name'), email=data_from_request.get('email'), password=data_from_request.get('password'), status = "moderateur")

        # Ajoutez le Moderateur à la base de données
        db.session.add(new_data)
        db.session.commit()

        return jsonify({"message": "POST request received"})
    except IntegrityError as e:
        db.session.rollback()
        return jsonify({"error": "ID must be unique"})


@auth.route('/login', methods=['POST','GET'])
def login():
    data_from_request = request.json
    user = Acount.query.filter_by(id=data_from_request.get('id'), name=data_from_request.get('name'), email=data_from_request.get('email'), password=data_from_request.get('password')).first()

    if user :
       return jsonify({"message": "LogIn" , "staus": user.status})
    
    return jsonify({"message" : "This Acout does not exist , Check your informations"})