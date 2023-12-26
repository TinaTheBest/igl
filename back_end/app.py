from flask import Flask
from routes import article_bp, ModArticle, Favorit, auth, db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://user:pass@mysql/db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Créer toutes les tables dans MySQL
with app.app_context():
    db.create_all()


app.register_blueprint(article_bp, url_prefix='/articles')
app.register_blueprint(ModArticle, url_prefix='/ModArticles')
app.register_blueprint(Favorit, url_prefix='/favorits')
app.register_blueprint(auth ,url_prefix ='/Authentification')


from flask_mail import Mail, Message


# Configuration Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'aminatinhineneouadi@gmail.com'
app.config['MAIL_PASSWORD'] = 'sgrz ofxb phqs fprc'

mail = Mail(app)

# Définition d'une route pour envoyer un e-mail
@app.route('/send_email')
def send_email():
    # Création d'un objet Message
    msg = Message('Sujet de l\'e-mail', sender='aminatinhineneouadi@gmail.com', recipients=['la_ouadi@esi.dz'])
    
    # Contenu de l'e-mail (utilisez un modèle si vous le souhaitez)
    msg.body = 'Contenu de l\'e-mail.'

    try:
        # Envoi de l'e-mail
        mail.send(msg)
        return 'E-mail envoyé avec succès!'
    except Exception as e:
        return str(e)

@app.route("/")
def get():
    return "Hello buddy"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
