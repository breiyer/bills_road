# bills_road [0.1.0]

---
Web app para insertar y visualizar municipios de Colombia.

El proyecto está contenerizado mediante docker-compose (version 3).
El stack de tecnologías es:
- Backend: Django + MongoDB
- Frontend: React + Bootstrap


## Instalación
---
- Descarga e instala [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Instala el paquete [docker-compose](https://docs.docker.com/compose/install/)
- Descarga este repositorio y abre la terminal de comandos en la raíz del proyecto
- Para finalizar, ejecuta el comando:
    ```bash
    docker-compose build
    ```



## Ejecución
---
- Una vez instalada, para ejecutar la aplicación se debe abrir la terminal de comandos en la raíz del proyecto y ejecutar el comando:
    ```bash
    docker-compose up
    ```
Por defecto, la aplicación se ejecuta en el puerto 80 de [su servidor local](http://localhost/).




## Configuración
---
No es necesario configurar la aplicación para que esta funcione, una vez instalada, esta cuenta con las configuraciones necesarias para su correcto funcionamiento.

**Variables de entorno**
Las variables de entorno para configurar las conexiones del proyecto se encuentran en el archivo [/.env](https://github.com/breiyer/bills_road/blob/master/.env) del proyecto.
