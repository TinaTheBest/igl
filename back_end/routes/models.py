from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()

class Acount(db.Model):
    id = db.Column(db.String(10), primary_key=True,default=lambda: str(uuid.uuid4())[:10], unique=True, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(20), nullable=False)

