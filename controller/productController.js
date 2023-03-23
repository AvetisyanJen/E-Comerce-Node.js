const { db } = require("../models");

async function Product(req,res){
    db.all('SELECT * FROM products', (err, products) => {
        if(err){
            res.send(JSON.stringify({response:'Something went wrong'}));
        }
        res.send(products)
})
}

async function createProduct(req,res){
    console.log(req.body);
    const{title,img,price}=req.body
         db.run('INSERT INTO products(title,img,price) VALUES(?,?,?)', 
         [
            title,
            img,
            price
             
         ],     (err)=>{
          if(err){
              res.send(JSON.stringify({response:'Something went wrong'}));
          }
          res.send(JSON.stringify({response:"Product Created"}));
      })
       
 }
 async function updateProduct(req,res){
    const{id,title,img,price}=req.body
    // const {id}=req.params
     db.run('UPDATE products SET title=?, img=?, price=? WHERE id=?', 
     [  
        title,
        img,
        price,
        id
        
     ],
     (err)=>{
         if(err){
             res.send(JSON.stringify({response:'Something went wrong'}));
         }
         res.send(JSON.stringify({response:'Product Updated'}));
     })
 }
 
 async function deleteProduct(req,res){
     db.run('DELETE FROM products WHERE id=?', [req.params.id],
     (err)=>{
         if(err){
             res.send(JSON.stringify({response:'Something went wrong'}));
         }
         res.send(JSON.stringify({response:'Product Deleted'}));
     })

}

module.exports={
    Product,
    createProduct,
    updateProduct,
    deleteProduct
}