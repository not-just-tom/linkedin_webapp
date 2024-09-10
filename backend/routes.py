from app import app, db
from flask import request, jsonify, render_template
from models import Member



# chatbot functions

@app.route("/", methods=['GET'])
def index_get():
    render_template('index.html')



# Get all members
@app.route("/api/members",methods=["GET"])
def get_member():
    members = Member.query.all()
    result = [friend.to_json() for friend in members]
    return jsonify(result)

# Input member
@app.route("/api/members",methods=["POST"])
def create_member():
    try:
        data = request.json

        #quick check ppl give their details
        required_fields = ["name","email"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error":f'pls give your name and email'}), 400

        name = data.get("name")
        email = data.get("email")

        new_friend = Member(name=name, email=email)
        db.session.add(new_friend)
        db.session.commit()

        return jsonify({"msg":"member added"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500

# Delete member
@app.route("/api/members/<int:id>",methods=["DELETE"])
def delete_member(id):
    try:
        friend = Member.query.get(id)
        if friend is None:
            return jsonify({"error":"Why are you even deleting things anyway (no record)"}), 404
        db.session.delete(friend)
        db.session.commit()
        return jsonify({"msg": "gone"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
    
# Update member (maybe I should have really ordered it CRUD)
@app.route("/api/friends/<int:id>",methods=["PATCH"])
def update_member(id):
    try:
        friend = Member.query.get(id)
        if friend is None:
            return jsonify({"error":"No such email"}), 404
        
        data = request.json

        friend.name = data.get("name",friend.name)
        friend.email = data.get("email",friend.email)

        db.session.commit()
        return jsonify(friend.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
