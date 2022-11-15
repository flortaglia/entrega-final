var LocalStrategy   = require('passport-local').Strategy;
const UsuarioDaoFactory = require ('../classes/usuario/UsuarioDaoFactory.class.js');
const DAO = UsuarioDaoFactory.getDao()
var bCrypt = require('bcrypt');

//Estrategia de Login
module.exports= function (passport){

	passport.use('login', new LocalStrategy({
            passReqToCallback : true 
        },
        async (req, username, password, done) => {
            try { 
                const user = await DAO.getByUsername(username)
                if (!user || !isValidPassword(user, password)) {
                    return done("Invalid credentials", false);
                }
                return done(null, user);  
            } catch (err) {
                done(err);
            }
        })
    );

   //Desencriptar Password (cifrado)
    function isValidPassword (user, password){
        return bCrypt.compareSync(password, user.password);
    }
    
}