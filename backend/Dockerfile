# Se especifica la versión de la imagen de node
FROM python:3.8

# Se crea un directorio en la imagen, con -p se crea la 
# ruta completa si no existe.
RUN mkdir -p /usr/src/app

# Nos movemos dentro de la imagen al directorio anteriormente creado
WORKDIR /usr/src/app

# Se copia el archivo requirements.txt (en el directorio actual
# de nuestra PC) dentro de la imagen en la ruta especificada.
COPY requirements.txt ./
# Se instalan todas las dependencias listadas en requirements.txt
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
RUN pip uninstall bson -y
RUN pip uninstall pymongo -y
RUN pip install pymongo==3.12.3

# Se copian todos los archivos (en el directorio actual de nuestra PC) al 
# directorio (ruta) actual de la imagen.
COPY . .

# Se hace la migración de la BD y creación de usuarios por defecto
# RUN python ./manage.py makemigrations
# RUN python ./manage.py migrate
# RUN python ./manage.py create_default_users
# CMD [ "python", "./manage.py", "runserver" ]
CMD ["sh","-c","python manage.py makemigrations && python manage.py migrate && python manage.py create_default_users && python manage.py runserver 0.0.0.0:$BACK_INTERNAL_PORT"]