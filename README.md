# Proyecto Final Backend - Coder House
## Prof. Salvador Perez
## Descripción
El proyecto trata de un ecommerce, dónde el usuario podra realizar pedidos de comida.
La página cuenta con un sistema de registro y de login.
Mediante el uso de la interfaz web el usuario podrá agregar productos al carrito, así como eliminarlos y completar el pedido. Además cuenta con un chat en tiempo real, para realizar consultas.
## Ecommerce
Este fue realizado mediante el uso de express y handlebars para mostrar las vistas.
El mismo interactúa con una API RESTFul y utiliza websocket para la comunicación con el servidor.
### Funcionalidades
- Form Registro, donde se envia mail al administrador
- Form Login
- Listado de productos
  - Listado de productos por categoria
- Seleccionador de cantidad
- Vista de productos según el id
- Agregar productos al carrito
- Eliminar productos del carrito
- Completar pedido, donde se envia mail 
- Chat de asistencia ( Visulización de los chats realizadas por este (formato JSON) /chat/:mail )
- Visulización de las órdenes realizadas por este (formato JSON) /ordenes 
- Visualización de la propia información de registro
### Urls
##### Usuarios 
  ----
- Vista del nav de usuario, una vez logueado [GET] /home
- Vista parcial sin terminar, una vez logueado ahora para cualquier usuario, para chat y crear productos desde la api: [GET] /admin
- Datos del usuario: [GET] /info
- Login usuario: [GET] /login   
- Falla en el Login: [GET] /fail-login
- Signup usuario: [GET] /signup 
- Falla en el Signup: [GET] /fail-signup
 - Logout: [GET] /logout 
# API REST
La misma se realizó usando Express, Passport para el manejo de la sesión y MongoDB para la persistencia de información.
### Endpoints
##### Productos 
---
- Listar Productos: [GET] /productos
- Ver Producto: [GET] /productos/:id
- Listar Productos por categoria: [GET] /productos/categoria/:category
- Crear Producto: [POST] /productos
- Actualizar Producto: [PUT] /productos/:id
- Borrar Producto: [DELETE] /productos/:id
##### Carrito
---
- Agregar producto [GET] /carrito/productos/:id/:quantity
- Borrar producto: [GET] /carrito/deleteproducto/:id
- Ver carrito: [GET] /carrito   
- Checkout (enviar pedido) y crear orden: [GET] /carrito /checkout
##### Ordenes
---
- Ver ordenes realizadas por el usuario: [GET] /ordenes (formato Json)
- Ver todas las ordenes realizadas al negocio: [GET] /allorders (formato Json)
##### Chat
---
- Ver chats realizadas por e-mail: [GET] /chat/:mail (formato Json)
- Página para ver y realizar preguntas de asistencia: [GET] /chat 

##### Usuarios REST  (sin uso)
---
- Listar Usuarios: [GET] /users
- Ver Usuario: [GET] /users/:id
- Crear un usuario: [POST] /users
- Actualizar un usuario: [PUT] /users/:id
- Borrar un usuario: [DELETE] /users/:id
##### Datos de Configuración
---
- Ver los datos necesarios para la configuración del proyecto: [GET] /datosConfiguracion

### Estructura carpetas
- src/classes: Dao Factories & DTOs. Mongo Client y Custom Error
- src/controllers: controladores
- src/models:Mongoose schemas
- src/passport: Passport Strategies
- src/routes: express routers
- src/public: HTML, CSS, Hbs(views) y JS
- src/service: Daos
- src/session: Session configuration
- src/socket: Configuracion y controladores de socket.io (server)
- src/utils: Utilidades generales
- src/logs: Logs de errores y warnings
- src/multer: Manejo de uploads
- src/nodemailer: Envio de emails

### Inicializar la App
Instalar paquetes
```sh
npm i
```
Iniciar aplicación
```sh
npm start
```

crear archivo .env (ver env.example): 

## Stack
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongooseJS](https://mongoosejs.com/)
- [PassportJS](https://www.passportjs.org/)
- [SocketIO](https://socket.io/)
- [Nodemailer](https://nodemailer.com/about/)
- [HandlebarsJS](https://handlebarsjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

Este archivo se ha creado con [Dillinger](https://dillinger.io/)