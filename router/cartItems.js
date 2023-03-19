const { AuthenticateUserToken}=require("../middleware/user_Auth")
function cartItems_routes(app){
    const CartItemsController= require("../controller/cartItemsController");
  
    app.get('/allCartItems',AuthenticateUserToken, CartItemsController.allCartItems);
    app.get('/cartItemProd', AuthenticateUserToken,CartItemsController.cartProduct);
    app.post('/createCartItems', AuthenticateUserToken, CartItemsController.createCartItems);
    app.put('/updateCartItems/:cart_id', AuthenticateUserToken, CartItemsController.updateCartItems);
    app.delete('/deleteCartItems/:id', AuthenticateUserToken,CartItemsController.deleteCartItems);
 }
 
 module.exports = {
    cartItems_routes
 }