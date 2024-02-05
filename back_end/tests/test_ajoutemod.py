import unittest
from flask import Flask
from routes import auth, db
from routes.models import Acount  
from flask_mail import Mail

# Définissez une fonction mock pour send_welcome_email
def mock_send_welcome_email(*args, **kwargs):
    pass  # Cette fonction ne fera rien lorsqu'elle est appelée

# test_config.py
class TestConfig:
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 465
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True
    MAIL_USERNAME = 'aminatinhineneouadi@gmail.com'
    MAIL_PASSWORD = 'sgrz ofxb phqs fprc'
   
class TestAuthBlueprint(unittest.TestCase):
   
    def setUp(self):
        # Configuration de l'application Flask pour les tests
        self.app = Flask(__name__)
        self.app.register_blueprint(auth)
        self.app.config.from_object(TestConfig)  # Utilisez la configuration de test

        self.app_context = self.app.app_context()
        self.app_context.push()
        self.client = self.app.test_client()
         # Initialiser Flask-Mail avec votre application
        self.mail = Mail(self.app)
        
        # Redéfinir la fonction send_welcome_email pour qu'elle ne fasse rien lors des tests
        auth.send_welcome_email = mock_send_welcome_email
        # Création d'une base de données de test (vous pouvez utiliser SQLite en mémoire)
        db.init_app(self.app)
        db.create_all()

    def tearDown(self):
        # Nettoyer la base de données après chaque test
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_post_mod_success(self):
        # Redéfinir la fonction send_welcome_email pour qu'elle ne fasse rien
        auth.send_welcome_email = mock_send_welcome_email

        with self.client:
            # Simuler une requête POST pour ajouter un modérateur
            response = self.client.post('/AjouterMod', json={'id': 1, 'name': 'John', 'email': 'john@example.com'})

            # Vérifier si la réponse est 200 OK
            self.assertEqual(response.status_code, 200)

    def test_post_mod_duplicate_id(self):
        # Ajouter un modérateur avec le même ID
        mod = Acount(id=1, name='John', email='john@example.com', password='password', status="moderateur")
        db.session.add(mod)
        db.session.commit()

        with self.client:
            # Simuler une requête POST avec un ID en double
            response = self.client.post('/AjouterMod', json={'id': 1, 'name': 'John', 'email': 'john2@example.com'})

            # Vérifier si la réponse contient une erreur
           # Convertir la réponse JSON en dictionnaire Python
            data = response.get_json()

            # Vérifier si le message d'erreur est correct
            self.assertEqual(data['error'], "ID must be unique")
if __name__ == '__main__':
    unittest.main()
