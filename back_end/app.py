from flask import Flask
from routes.ArticleExemple import article_bp

app = Flask(__name__)

# Enregistrez le Blueprint dans l'application avec un préfixe d'URL
app.register_blueprint(article_bp, url_prefix='/articles')

if __name__ == '__main__':
    app.run()