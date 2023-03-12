
const { AuthenticateToken}=require("../middleware/jwt_auth")

function user_routes(app){
const {UserController}=require('../controller/userController')
//    app.get('/',UserController.Profile) a
    app.post('/register',UserController.Register)  
    app.post('/login',UserController.Login)
}
module.exports={user_routes}