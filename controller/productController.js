const { db } = require("../models");

class ProductController{
Product(req,res){
    db.all('SELECT * FROM products', (err, products) => {
        res.send(products)
})
}

}module.exports={
    ProductController:new ProductController
}