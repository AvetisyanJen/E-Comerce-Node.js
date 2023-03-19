const { AuthenticateAdminToken }=require("../middleware/admin_Auth")
function product_routes(app){
    const ProductController=require('../controller/productController')
   
        app.get('/products', ProductController.Product)
        app.post('/createProduct',AuthenticateAdminToken, ProductController.createProduct);
        app.put('/updateProduct',  AuthenticateAdminToken, ProductController.updateProduct);
        app.delete('/deleteProduct/:id',   AuthenticateAdminToken, ProductController.deleteProduct);
        
    }
    module.exports={product_routes}
    
