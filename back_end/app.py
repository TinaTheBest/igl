from flask import Flask
from routes import article_bp


app = Flask(__name__)

# Enregistrez le Blueprint dans l'application avec un préfixe d'URL
print("Avant l'enregistrement du Blueprint")
app.register_blueprint(article_bp, url_prefix='/articles')



@app.route("/")
def get():
   return "hello buddy"

   
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

print("Après l'enregistrement du Blueprint4444")