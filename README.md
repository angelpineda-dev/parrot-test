# Parrot Test

## Software necesario

Tu ambiente de trabajo debe tener al menos el siguiente software instalado: 
- Navegador web
- Node.js v22.3 ó superior
- npm v10.8.1 ó superior

## Instalaciones 

Es necesario instalar las dependencias para ejecutar el proyecto en modo local.

- Abrir terminal de comandos en la raiz del proyecto.
- Ejecutar `npm install` en la terminal de comandos.
- Se creara la carpeta __node modules__

## Variables de ambiente

- Crear archivo __.env__ en la raiz
- Copiar nombre de variables del archivo __.env.example__
- De ser necesario, se puede crear un archivo de test llamado __.env.test__ 


## Ejecución

Abrir la terminal de comandos y ejecutar lo siguiente:

- `npm run dev` para el ambiente de desarrollo, tomara las variables del archivo _.env_
- `npm run start:test` este comando tomara las variables del archivo _.env.testing_
- Acceder a la URL mostrada en la terminal

## Construcción
Para preparar el proyecto para un despliegue, existen los comandos build
- `npm run build` crea el proyecto con las variables del archivo _.env_
- `npm run build:test` crea el proyecto con las variables del archivo _.env.test_
- El proyecto se encontrará en un carpeta llamada _dist_ que debes subir a tu servidor

## Ejecutar test

Cypress es una herramienta que permite ejecutar test e2e y de componentes.

- Ejecutar comando `npx cypress open`
- Seguir proceso de instalacion
- Seleccionar opción de test E2E Testing
- Elegir el navegador y presionar boton para ejecutar
- Se abrirá un dasboard listando los test
- Seleccionar el test llamado __parrot.cy.ts__
- Todos los test deberían pasar.
