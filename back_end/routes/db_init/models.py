from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()

class Acount(db.Model):
    """
    Modèle SQLAlchemy pour la table Acount.

    Attributes:
        id (str): Identifiant unique généré automatiquement.
        name (str): Nom de l'utilisateur.
        email (str): Adresse e-mail de l'utilisateur.
        password (str): Mot de passe de l'utilisateur.
        status (str): Statut de l'utilisateur (ex: 'user', 'moderateur').

    Note:
        L'identifiant (id) est généré automatiquement sous forme de chaîne de 10 caractères aléatoires.
    """

    # Configuration des colonnes de la table
    id = db.Column(db.String(10), primary_key=True, default=lambda: str(uuid.uuid4())[:10], unique=True, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(20), nullable=False)

    # Définir la relation Many-to-Many pour les articles favoris
    articles_favoris = db.relationship('Document', secondary='favoris', backref='utilisateurs_favoris')

class Document(db.Model):
    id = db.Column(db.String(50), primary_key=True)  # Définir la colonne id comme clé primaire


# Table de liaison Many-to-Many pour les favoris des utilisateurs
favoris = db.Table('favoris',
    db.Column('user_id', db.String(10), db.ForeignKey('acount.id'), primary_key=True),
    db.Column('doc_id', db.String(50), db.ForeignKey('document.id'), primary_key=True)
)
