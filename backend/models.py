from app import db

class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name  = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)

    def to_json(self):
        return {
            "id":self.id,
            "name":self.name, 
            "email":self.email,
        }

