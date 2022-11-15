const { Router } =require( 'express');
const router= Router();
const passport = require ('passport') 
const UsuarioController = require('../controllers/usersController.js')
const upload = require ('../multer/loadFile.js')
const logger = require('../utils/logger.js')
const UsuarioMiddleware = require('./user.middleware.js')
const userMiddlewares= new UsuarioMiddleware()

class RouterUsuario{
  constructor(){
    this.controller= new UsuarioController()
  }

  start(){
    router.get ('/home', userMiddlewares.authMiddleware, this.controller.getHome)
    //ADMIN -- en proceso -- SAQUE EL MIDDLEWARE DE ADMIN encaso de querer probarlo
    //    => userMiddlewares.isAdminMiddleware
    router.get('/admin',userMiddlewares.authMiddleware, this.controller.getHomeAdmin) 

    //LOGIN         
    router.get('/', this.controller.getLogin)
    router.get('/info', this.controller.getUserInfo)
    router.post('/',passport.authenticate('login',
      {failureRedirect: '/fail-login',failureMessage: true}),
      this.controller.postLogin
    )
    router.get('/fail-login', this.controller.getFailLogin)

    //SIGNUP 
    router.get('/signup',this.controller.getSignup)
    router.post('/signup',upload.single('image'),passport.authenticate('signup',
      { failureRedirect: '/fail-signup',failureMessage: true}),
      this.controller.postSignup
    )
    router.get('/fail-signup', this.controller.getFailSignup)

    //LOGOUT   
    router.get('/logout', this.controller.getLogout )

    return router
  }
}

module.exports = RouterUsuario