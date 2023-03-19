function user_routes(app){
const UserController=require('../controller/userController')

  
    app.post('/register',UserController.register)  
    app.post('/login',UserController.login)
}
module.exports={user_routes}