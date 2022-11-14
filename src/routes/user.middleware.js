
class UsuarioMiddleware{
    authMiddleware(req, res, next) {
        if (req.user) {
        next();
        } else {
        res.redirect("/");
        }
    }
    isAdminMiddleware(req, res, next) {  ///////
        if (req.user.admin!="usuario") {
            next();
        } else {
            res.redirect("/");
        }
    }
}
module.exports = UsuarioMiddleware