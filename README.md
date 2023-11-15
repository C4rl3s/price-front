# PricesFront

Este proyecto se ha generado con la versión 15.1.4 de [Angular CLI](https://github.com/angular/angular-cli).

Este es un proyecto Angular para implementar la parte Front-end del ejercicio de mantenimiento de la tabla PRICES.

## Empezando
El propósito de este documento es guiar paso a paso en el arranque del Front del ejercicio de PRICES. Recuerda que hay que arrancar tambien el servicio Back para poder cargar datos, de lo contrario arrancará pero no se visualizará información de la tabla.

Empecemos!

### Obtener Node.js
Primero, descargar e instalar la versión de Node.js 18.14.0, desde https://nodejs.org/en/.
Si estás utilizando un gestor de versiones de node (NVM, Node Version Manager), abre tu terminal favorito y escribe:
```shell
nvm install v18.14.0
```
Comprueba las versiones de Node.js instaladas:
```shell
nvm list
```
Para cambiar entre versiones de Node.js:
```shell
nvm use 18.14.0
```
Ahora podemos hacer uso de npm (Node Package Manager) Para descargar y utilizar las dependencias que necesita el proyecto.

### Descarga el proyecto
Descargate el código haciendo click en ***Code*** >> ***Download ZIP***

Descomprime el fichero en el directorio que prefieras, por ejemplo: C:\Dev\price-front\

### Instalar dependencias
Mediante el terminal, navega hasta el directorio del proyecto, y descarga los paquetes mediante npm:
```shell
cd C:\Dev\price-front\
npm install
```
Este comando revisara todas las dependencias necesarias (las especificadas en el fichero ***package.json***), las descargará e instalará.

### Arrancar la app

Si todo ha ido bien, solo queda correr la aplicación:
```shell
npm start
```
El servidor de la parte Front estará escuchando en el puerto 4200, así que simplemente abre un navegador y escribe http://localhost:4200/

