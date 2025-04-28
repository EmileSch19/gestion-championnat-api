
# Gestion Championnat API

API complète pour gérer les championnats de football, construite avec Node.js, Express, MongoDB et sécurisée avec JWT.

---

## 🚀 Fonctionnalités

- Authentification sécurisée avec JWT
- CRUD Utilisateurs (Create, Read, Update, Delete)
- CRUD Pays
- CRUD Championnats
- CRUD Équipes
- CRUD Journées
- CRUD Résultats de matchs
- Tests automatisés avec Postman Runner

---

## 📚 Technologies utilisées

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- Postman (pour les tests API)

---

## ⚙️ Installation

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/EmileSch19/gestion-championnat-api.git
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Configurer votre environnement :**
   Créez un fichier `.env` à la racine du projet :

   ```env
   PORT=5000
   MONGO_URI=Votre_Connexion_MongoDB_Atlas
   JWT_SECRET=Votre_Secret_Personnel
   ```

4. **Lancer le serveur :**
   ```bash
   npm run dev
   ```

---

## 🧪 Tester l'API

- Utilisez Postman pour tester les routes disponibles.
- Tests disponibles :
  - Authentification (`POST /api/auth/login`)
  - Gestion utilisateurs (`/api/users`)
  - Gestion pays (`/api/pays`)
  - Gestion championnats (`/api/championnats`)
  - Gestion équipes (`/api/equipes`)
  - Gestion journées (`/api/journees`)
  - Gestion résultats (`/api/resultats`)

**Tests massifs avec Postman Runner disponibles pour créer plusieurs ressources rapidement !**

---

## 📬 Endpoints principaux

| Action | Méthode | URL |
|:-------|:--------|:----|
| Connexion | POST | `/api/auth/login` |
| Créer utilisateur | POST | `/api/users` |
| Liste des utilisateurs | GET | `/api/users` |
| Créer pays | POST | `/api/pays` |
| Créer championnat | POST | `/api/championnats` |
| Créer équipe | POST | `/api/equipes` |
| Créer journée | POST | `/api/journees` |
| Créer résultat | POST | `/api/resultats` |

---

## 📂 Organisation du projet

```
gestion-championnat-api/
├── controllers/
├── models/
├── routes/
├── services/
├── middlewares/
├── app.js
├── .env.example
├── package.json
└── README.md
```

---

## 👨‍💻 Auteur

- [Emile Dufoulon](https://github.com/EmileSch19)

---

## 🎖️ Remerciements

Merci pour votre lecture !  
N'hésitez pas à laisser un ⭐️ si ce projet vous a aidé ou inspiré !

---
