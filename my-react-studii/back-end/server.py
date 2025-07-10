from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

DB_FILE = 'users.json'

# Load existing users
def load_users():
    if not os.path.exists(DB_FILE):
        return []
    with open(DB_FILE, 'r') as f:
        return json.load(f)

# Save users to file
def save_users(users):
    with open(DB_FILE, 'w') as f:
        json.dump(users, f, indent=4)

@app.route('/users', methods=['GET'])
def get_users():
    users = load_users()
    return jsonify(users)

@app.route('/users', methods=['POST'])
def add_user():
    users = load_users()
    data = request.get_json()

    # Verificăm dacă emailul există deja
    for user in users:
        if user['email'] == data['email']:
            return jsonify({'error': 'Email deja folosit'}), 409

    users.append(data)
    save_users(users)
    return jsonify({'message': 'Utilizator adăugat cu succes'}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)
    print("Serverul rulează pe portul 5000")
    print("Accesați http://localhost:5000 pentru a interacționa cu API-ul")
    