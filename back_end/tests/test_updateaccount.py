import unittest
from flask import Flask, jsonify
from ..routes import auth, db, Acount  # Mettez à jour le chemin d'importation
from flask_mail import Mail

# Définissez une fonction mock pour send_welcome_email
def mock_send_welcome_email(*args, **kwargs):
    pass  # Cette fonction ne fera rien lorsqu'elle est appelée

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

    def test_update_account_success(self):
        # Redéfinir la fonction send_welcome_email pour qu'elle ne fasse rien
        auth.send_welcome_email = mock_send_welcome_email
        # Ajoutez un compte pour la mise à jour
        account = Acount(id=1, name='John', email='john@example.com', password='password', status='active')
        db.session.add(account)
        db.session.commit()

        with self.client:
            # Simuler une requête PUT pour mettre à jour le compte
            response = self.client.put('/update_account', json={'id': 1, 'name': 'John Doe', 'email': 'johndoe@example.com'})
            
            # Vérifier si la réponse est 200 OK
            self.assertEqual(response.status_code, 200)
            data = response.get_json()
            self.assertEqual(data['message'], "User updated successfully")

    def test_update_account_user_not_found(self):
    # Essayez de mettre à jour un utilisateur qui n'existe pas (par exemple, ID = 100)
    
      with self.client:
        # Simuler une requête PUT pour mettre à jour un compte qui n'existe pas
        response = self.client.put('/update_account', json={'id': 100, 'name': 'John Doe', 'email': 'johndoe@example.com'})
        
        # Vérifier si la réponse est un code d'erreur approprié (par exemple, 404)
       # self.assertEqual(response.status_code, 200)
        
        # Vérifier le contenu de la réponse pour s'assurer qu'elle indique que l'utilisateur n'existe pas
        data = response.get_json()
        self.assertEqual(data['error'], "User not found")
if __name__ == '__main__':
    unittest.main()
