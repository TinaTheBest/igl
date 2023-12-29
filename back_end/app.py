

from flask import Flask, jsonify
from routes import admin_bp, ModArticle, Favorit, auth, db, recherche,user

from flask_cors import CORS 
from elasticsearch import Elasticsearch

app = Flask(__name__)


es = Elasticsearch(['http://elasticsearch:9200'])


app = Flask(__name__)

CORS(app)  


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
app.register_blueprint(user ,url_prefix ='/users')

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
@app.route('/create_index', methods=['GET'])
def get_all_data():
    # Define your Elasticsearch index
    index_name = "article_valide"
    if not es.indices.exists(index=index_name):
        es.indices.create(index=index_name)
    # Perform a match_all query to get all documents
    results = es.search(index=index_name, body={"query": {"match_all": {}}})

    # Extract relevant information from the search results
    hits = results['hits']['hits']
    response_data = [{'id': hit['_id'], 'source': hit['_source']} for hit in hits]

    return jsonify(response_data)

@app.route('/add_document', methods=['POST'])
def add_document():
    
    document2 = {
        "titre": "titre1",
        "auteurs": ["auteur1", "auteur3"],
        "mots_cles": ["mot4", "mot5", "mot6"],
        "institution": "institution2",
        "date_publication": "2023-12-26"
    }
    es.index(index='article_valide', id=3, body=document2)

    return jsonify({"message": "Les documents ont été ajoutés avec succès!"}), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
