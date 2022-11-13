const LocalStrategy   = require('passport-local').Strategy;
const UsuarioDaoFactory = require ('../classes/usuario/UsuarioDaoFactory.class.js');
const DAO = UsuarioDaoFactory.getDao()
const bCrypt  =require( 'bcrypt');
const CustomError = require ("../classes/CustomError.class.js") ;

// Estrategia de registro/suscripción....REGISTER
module.exports = function (passport){

	passport.use('signup', new LocalStrategy({
            passReqToCallback : true 
        },
        async (req, username, password, done)=> {
            try {
                // find a user in Mongo with provided username
                // llamar a UserDao. getByUsername
                const existingUser = await DAO.getByUsername(username)
                //User.findOne({ 'username' :  username } )
                if (existingUser) {
                    return done("User already exists", false);
                }
                if (password == req.body.password2){
                    const newUser = {
                    username:username,
                    password: hashPassword(password),
                    name : req.body.name,
                    surname : req.body.surname,
                    address : req.body.address,
                    phone: req.body.phone,
                    avatar: req.file.originalname,
                    admin:"usuario"                   
                    };
                    const createdUser = await DAO.create(newUser)
                    //User.create(newUser);
                    return done(null, createdUser);
                }else{
                    throw new CustomError(500, "Las password no son iguales");//ver de hacer redirect ---ok back
                }
                
            } catch (err) {
                console.log("error");
                console.log(err);
                done(err);
            }
        
        })
            
     );
            
    // Encriptar Password (cifrado) usando bCrypt
    function hashPassword(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }  

}