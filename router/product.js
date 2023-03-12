function product_routes(app){
    const {ProductController}=require('../controller/productController')
        app.get('/',ProductController.Product)
        
    }
    module.exports={product_routes}