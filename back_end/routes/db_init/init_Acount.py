from .models import Acount, db

def create_admin():
        new_admin = Acount(name='Admin', email='admin@gmail.com', password='Pass', status='Admin')
        db.session.add(new_admin)
        db.session.commit()
