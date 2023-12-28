from flask import Flask
from routes import admin_bp, ModArticle, Favorit, auth, db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://user:pass@mysql/db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Créer toutes les tables dans MySQL
with app.app_context():
    db.create_all()


app.register_blueprint(admin_bp, url_prefix='/articles')
app.register_blueprint(ModArticle, url_prefix='/ModArticles')
app.register_blueprint(Favorit, url_prefix='/favorits')
app.register_blueprint(auth ,url_prefix ='/Authentification')
app.register_blueprint(recherche ,url_prefix ='/recherche')
from flask_mail import Mail, Message

# Configuration Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'aminatinhineneouadi@gmail.com'
app.config['MAIL_PASSWORD'] = 'sgrz ofxb phqs fprc'

mail = Mail(app)

@app.route("/")
def get():
    return "Hello buddy"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
