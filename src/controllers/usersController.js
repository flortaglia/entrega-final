
const path = require( 'path')
const main = require('../nodemailer/mailAdmin.js')

class UsuarioController{

  async getHome(req,res){
    res.sendFile(path.join(__dirname, ".././public/home.html"));
  }
  async getHomeAdmin(req,res){
      // res.render('chats.hbs');
      res.sendFile(path.join(__dirname, ".././public/index.html"));
  }
  //LOGIN
  async getLogin(req, res){
      if(req.isAuthenticated()){
        let user= req.user
        res.redirect('/productos')
      }else{
        res.sendFile(path.join(__dirname, ".././public/login.html")); //aca si podría un res.render
      }
      
  }

  async getUserInfo(req, res){ 
      const {username, name,surname, address, phone, avatar} = req.user
      res.render('info',{username, name,surname, address,phone, avatar})    
  }
  async postLogin(req, res){
      let user= req.username
      res.redirect('/productos')
  }
  async getFailLogin(req, res){
      // console.log('req.session.messages',req.session.messages)
      res.sendFile(path.join(__dirname, ".././public/faillogin.html"));
  }
      //SIGNUP
  async getSignup(req, res){
    res.sendFile(path.join(__dirname, ".././public/signup.html")); 
  }
  async postSignup(req, res){
    let user= req.user
    main(`Nuevo Registro de ${req.user.name} ${req.user.surname} - ${req.user.username}`, 
    `<h1>Datos de Registro</h1>
    <ul>
        <li>E-mail: ${req.user.username} </li>
        <li>Nombre: ${req.user.name} </li>
        <li>Apellido: ${req.user.surname} </li>
        <li>Dirección: ${req.user.address} </li>
       <li>Teléfono: ${req.user.phone} </li>
       <li>avatar: http://localhost:8080/image/${req.user.avatar}  </li>
   </ul>`)
    // console.log('usersignup', user)
    res.redirect('/')
  }

  async getFailSignup(req, res){
      res.sendFile(path.join(__dirname, ".././public/failsignup.html"));
  }
  async getLogout(req, res, next)  {
      let user= req.user.username
      req.logout(function(err) {   //METODO DE PASSPORT
        if (err)  return next(err); 
        res.send(`<h1>Hasta luego ${user}</h1>
          <script type="text/javascript">
          setTimeout(function(){ location.href = '/'},2000)
          </script>`
        )
      })
  }
}
module.exports = UsuarioController

