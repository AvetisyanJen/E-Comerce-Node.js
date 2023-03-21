const { AuthenticateUserToken}=require("../middleware/user_Auth")
function cartItems_routes(app){
    const CartItemsController= require("../controller/cartItemsController");
  

    app.get('/cartItemProd', AuthenticateUserToken,CartItemsController.cartProduct);
    app.post('/createCartItems', AuthenticateUserToken, CartItemsController.createCartItems);
    app.delete('/deleteCartItems', AuthenticateUserToken,CartItemsController.deleteCartItems);
 }
 
 module.exports = {
    cartItems_routes
 }