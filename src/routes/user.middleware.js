
class UsuarioMiddleware{
    authMiddleware(req, res, next) {
        if (req.user) {
        next();
        } else {
        res.redirect("/login");
        }
    }
    isAdminMiddleware(req, res, next) {  ///////
        if (req.user.admin) {
            next();
        } else {
            res.redirect("/");
        }
    }
}
module.exports = UsuarioMiddleware