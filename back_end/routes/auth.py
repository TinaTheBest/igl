from flask import Blueprint, jsonify, request ,current_app
from .models import db, Acount
from sqlalchemy.exc import IntegrityError
from flask_mail import  Message
import secrets

auth = Blueprint('Authentification', __name__)

def send_welcome_email(mod):
    subject = "Bienvenue en tant que modérateur"
    body = f"\n\nBonjour {mod.name},\n\nVotre compte de modérateur a été créé avec succès.\nVotre EMAIL : {mod.email}\nVotre Password : {mod.password}\nCordialement,\nVotre application Paper"

    msg = Message(subject=subject, sender='aminatinhineneouadi@gmail.com', recipients=[mod.email], body=body)

    mail = current_app.extensions['mail']
    mail.send(msg)

@auth.route('/get_moderateurs', methods=['GET'])
def get_data():
    # Exemple de lecture de données depuis la base de données
    data_from_db = Acount.query.filter_by(status='moderateur').all()

    # Formatage des données pour la réponse
    formatted_data = [{"id": item.id, "name": item.name, "email" :item.email , } for item in data_from_db]

    return jsonify({"message": "GET request received", "data_from_db": formatted_data})


@auth.route('/AjouterMod', methods=['POST'])
def post_mod():
    try:
        data_from_request = request.json
        new_data = Acount(id=data_from_request.get('id'), name=data_from_request.get('name'), email=data_from_request.get('email'), password=secrets.token_urlsafe(8), status = "moderateur")

        # Ajoutez le Moderateur à la base de données
        db.session.add(new_data)
        db.session.commit()

        #envoyer un mail au moderateur pour le notifier 
        send_welcome_email(new_data)

        return jsonify({"message": "POST request received"})
    except IntegrityError as e:
        db.session.rollback()
        return jsonify({"error": "ID must be unique"})



@auth.route('/update_account', methods=['PUT'])
def update_account():
    try:
        data_from_request = request.json
        user_id = data_from_request.get('id')

        # Recherchez l'utilisateur existant dans la base de données
        existing_Mod = Acount.query.filter_by(id=user_id).first()

        if existing_Mod:
            # Mettez à jour les informations de l'utilisateur avec les nouvelles données
            existing_Mod.name = data_from_request.get('name', existing_Mod.name)
            existing_Mod.email = data_from_request.get('email', existing_Mod.email)
           
            db.session.commit()
            send_welcome_email(existing_Mod)
            return jsonify({"message": "User updated successfully"})
        else:
            return jsonify({"error": "User not found"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "An error occurred"})


@auth.route('/sginin', methods=['POST'])
def post_data():
    try:
        data_from_request = request.json
        new_data = Acount(name=data_from_request.get('name'), email=data_from_request.get('email'), password=data_from_request.get('password'), status = "user")

        # Ajoutez la nouvelle donnée à la base de données
        db.session.add(new_data)
        db.session.commit()
        return jsonify({"message": "POST request received"})
    except IntegrityError as e:
        db.session.rollback()
        return jsonify({"error": "ID must be unique"})


@auth.route('/login', methods=['POST','GET'])
def login():
    data_from_request = request.json
    user = Acount.query.filter_by(email=data_from_request.get('email'), password=data_from_request.get('password')).first()

    if user :
       return jsonify({"message": "LogIn" , "status": user.status, "id": user.id})
    
    return jsonify({"message" : "This Acout does not exist , Check your informations"})



@auth.route('/reset_pass', methods=['POST'])
def resetPassword():
    data_from_request = request.json
    user = Acount.query.filter_by(email=data_from_request.get('email')).first()

    if user:
        # Génération d'un nouveau mot de passe aléatoire
        new_password = secrets.token_urlsafe(8)  # You can adjust the length of the password

        user.password = new_password
        db.session.commit()

        # Envoi du nouveau mot de passe par e-mail
        subject = "Réinitialisation de mot de passe"
        body = f"Bonjour {user.name},\n\nVotre mot de passe a été réinitialisé avec succès.\nVotre nouveau mot de passe est : {new_password}\nCordialement,\nVotre application Paper"

        msg = Message(subject=subject, sender='aminatinhineneouadi@gmail.com', recipients=[user.email], body=body)

        mail = current_app.extensions['mail']
        mail.send(msg)

        return jsonify({"message": "Réinitialisation de mot de passe réussie. Veuillez vérifier votre e-mail."})
    
    return jsonify({"message": "Cet utilisateur n'existe pas. Veuillez vérifier votre adresse e-mail.", "data": data_from_request})