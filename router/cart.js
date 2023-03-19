function cart_routes(app){
    const {AuthenticateUserToken}=require("../middleware/user_Auth")
    const cartController=require('../controller/cartController')
    app.post('/createCart',    AuthenticateUserToken, cartController.createCart);
    app.get("/userCart",AuthenticateUserToken, cartController.cartuser)
        
    }
    module.exports={cart_routes}