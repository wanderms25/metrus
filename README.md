# metrus

# Apos clonar o repositorio, Rodar o comando 
docker-compose build

# Após o build rodar o comando parra instalar o Webpack em ambos os App's
docker-compose run root npm install --save-dev webpack
docker-compose run navbar npm install --save-dev webpack
docker-compose run login npm install --save-dev webpack