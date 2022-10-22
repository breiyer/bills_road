# Se especifica la versión de la imagen de node
FROM node:14-alpine3.15

# Se crea un directorio en la imagen de node, con -p se crea la 
# ruta completa si no existe.
RUN mkdir -p /usr/src/app

# Nos movemos dentro de la imagen al directorio anteriormente creado
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Todos los archivos (en el directorio actual de nuestra PC) que 
# empiecen con package y terminen en .json, serán copiados dentro  
# de la imagen en la ruta actual.
COPY package*.json ./

# Se instalan todas las dependencias dentro del archivo package.json
RUN npm install --fetch-timeout=600000
# RUN npm uninstall react-scripts
# RUN npm install -D react-scripts

# Se copian todos los archivos (en el directorio actual de nuestra PC) al 
# directorio (ruta) actual de la imagen.
COPY . .

CMD ["npm", "start"]