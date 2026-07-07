# Book Application

## Technologies

- Backend avec Java / Spring
- Frontend avec Angular
- Base de données MySQL

Ajouter le diagramme de composant

## Arborescence

- front/
- front/Dockerfile
- front/docker-entrypoint.sh
- back/
- back/Dockerfile
- docker-compose.yml
- .github/worklows
- .github/worklows/ci.yml
- .github/worklows/cd.yml

## Déploiement

### Déploiement local avec Docker Compose

Préprequis : Docker & Docker Compose  
Exécution :
```bash
docker compose build --no-cache
docker compose up -d
```

### Déploiement distant sur Heroku

Ajouter le diagramme de déploiement

Prérequis :
- Heroku app visiplus-book-back créée
- Heroku BDD créée
- Heroku app visiplus-book-front créée

Variables d'environnements Back :
- BOOK_FRONT_URL
- SPRING_DATASOURCE_URL
- SPRING_DATASOURCE_USERNAME
- SPRING_DATASOURCE_PASSWORD

Variables d'environnements Front :
- BOOK_BACK_URL

Exécution : 
- Pull request vers main déclenche la CI
- Push sur main (après pull request) déclenche la CD

### Intégration continue

Etapes de la CI :
- tests back
- tests front
- build back
- build front

### Déploiement continue

Etapes de la CD :
- release (semantic release)
- deploy back
- deploy front

Mise à jour du ficher changelog.md à chaque évolution de version.
