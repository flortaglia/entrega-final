require('dotenv').config()
const config = require('./config.js');
const express = require('express')
const path = require( 'path') 
const bodyParser = require('body-parser');
const cookieParser = require( "cookie-parser");
const {configChatMongo} = require ('./socket/chat.mongo.js')
const logger = require('./utils/logger.js')
const passport = require( 'passport');
const yargs = require('yargs/yargs')(process.argv.slice(2)) //libreria YARGS
const initPassport = require( './passport/init.js');
//IMPORTO ROUTERS  CL28
const RouterUsuario = require( "./routes/usuario.route.js");
const usuarioRouter = new RouterUsuario()
const RouterUsuarioRest = require( "./routes/usuario.rest.route.js");
const usuarioRouterRest = new RouterUsuarioRest()

const RouterCarrito = require( "./routes/carrito.route.js");
const carritoRouter = new RouterCarrito()
const RouterProducto = require ("./routes/producto.route.js")
const productoRouter = new RouterProducto()
const RouterChat = require ("./routes/chat.route.js")
const mensajesRouter = new RouterChat()
const RouterOrder = require( "./routes/order.route.js");
const OrderRouter= new RouterOrder()
const RouterConfig = require( "./routes/config.datos.route.js");
const ConfigRouter= new RouterConfig()

const configSession = require( "./session/configSession.js");
const { engine } = require('express-handlebars')
const app = express()
const compression = require ("compression")
app.use(compression())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Handlebars = require('handlebars')

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

//CLUSTER Y OS
const cluster = require("cluster");
const os = require("os");
const cpus= os.cpus() //creo workers
//PUERTO CON YARGS  CL30
const args = yargs
        .alias({p:'puerto', m: 'modo'})
        .default({puerto:8080, modo:'fork'}) //variable modo agregada cluster  o fork (x default)
        .argv
console.log('args.modo', args.modo)
app.use(configSession);
//Inicializo PASSPORT
app.use(passport.initialize());
app.use(passport.session());
initPassport(passport);

//IF CLUSTER OR FORK?
let expressServer = null

if (args.modo =="cluster" && cluster.isPrimary) {
  console.log("MODO CLUSTER")
  cpus.map(() => {
    cluster.fork();
  });

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);

    cluster.fork();
  });
} else { 

  console.log("MODO FORK")
  app.use("/", usuarioRouter.start());
  app.use('/carrito', carritoRouter.start());
  app.use('/productos',productoRouter.start())
  app.use("/users", usuarioRouterRest.start());
  app.use("/", mensajesRouter.start());
  app.use("/", OrderRouter.start());
  app.use("/", ConfigRouter.start());
  
  expressServer = app.listen(config.serverPort, (err) => {
      if(err) {
          console.log(`Se produjo un error al iniciar el servidor: ${err}`)
      } else {
          console.log(`Servidor escuchando puerto: ${config.serverPort}`)
      }
  })
 
}
app.use(express.static(__dirname + '/public'))
app.engine('hbs', 
    engine({
        extname: '.hbs',
        defaultLayout: path.join(__dirname, '/public/views/layout/main.hbs'),
        // layoutsDir: path.join(__dirname, '/public/views/layouts'),
        // partialsDir: path.join(__dirname, '/public/views/partials')
        handlebars: allowInsecurePrototypeAccess(Handlebars)
    })
)
  
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './public/views'))
configChatMongo(expressServer)

app.use((req,res,next)=>{
  const { url, method } = req;
  logger.warn(`Método: ${method}, URL: ${url} inexistente`);
  res.status(404).send(`Método: ${method}, URL: ${url} inexistente`);
} )