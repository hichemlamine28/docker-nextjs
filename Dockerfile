# Utiliser une image Node.js comme base
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de votre application dans le conteneur
COPY package.json yarn.lock ./

# Installer les dépendances avec yarn
RUN yarn install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 3000 (le port que Next.js utilise par défaut)
EXPOSE 3000

# Commande pour démarrer l'application en mode développement
CMD ["yarn", "dev"]
