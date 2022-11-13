class ConfigController{
    async getDatos(req, res){
        try {
            res.render('config.datos.hbs')
        } catch (error) {
            res.status(error.errorCode).send(error.message); 
        }
    }
}
module.exports = ConfigController;
