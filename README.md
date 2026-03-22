# RPG-Corto

Notre RPG Astra

Astra est un mini RPG full stack en pixel art permettant d’explorer les interactions entre front-end, back-end et base de données à travers une expérience de jeu interactive.

🚀 Lancer le projet

1. Cloner le repo
https://github.com/fifou7/RPG-Corto.git

2. Allumer le serveur via MAMP

3. Installer les dépendances

npm i

4. Configurez les migrations depuuis le terminal



## Créer la base de données :

Node Migration/dbCreate.js

## Créer les tables

Node Migration/tableCreate.js

## Créer les fixtures

Node Migration/fixtures.js

4. Configuration

Prenez le fichier config.ext.js, renommez le en config.js et inséser vos identifiants de connexion

5. Lancer le projet

node index

6. Lancer le jeu

👉 Ouvrir dans le navigateur :

http://localhost:8081/assets/maps/

🧠 Architecture
Astra/
├── assets/maps        → Overworld (exploration)
├── Boss-Fight         → Combat boss
├── Fight-scene        → Combats aléatoires
├── routes             → API endpoints
└──services           → Logique backend

🔗 API
Endpoint	Description
/pnj	Récupère les PNJ
/dialogues/:id	Dialogues d’un PNJ
/characters	Stats des personnages
/skills	Compétences
/boss	Données du boss

Ce projet a été conçu comme une initiation au développement full stack, en mettant en pratique :

communication client / serveur
structuration d’une API 
gestion de données en base SQL
logique de jeu côté front

👥 Équipe

Benjamin Thevenot
Famah Sylla
