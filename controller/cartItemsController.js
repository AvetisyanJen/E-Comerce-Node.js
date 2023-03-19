const { db } = require("../models");


async  function allCartItems(req,res){
    db.all('SELECT * FROM cartItem',[],(err,data)=>{
        res.send(data);
    })
}

async function  createCartItems(req,res){
    db.run('INSERT INTO cartItem(cart_id,product_id) VALUES(?,?)',
    [req.body.cart_id, req.body.product_id],(err)=>{
        res.send(JSON.stringify({response:'created'}));
    })
}

async function updateCartItems(req,res){
    db.run('UPDATE cartItem SET cart_id = ?, product_id = ? WHERE id=?',
    [req.body.cart_id, req.body.product_id,req.params.id],(err)=>{
        res.send(JSON.stringify({response:'updated'}));
    })
}
async function deleteCartItems(req,res){
    db.run('DELETE FROM cartItem WHERE id=?',[req.params.id],(err)=>{
        res.send(JSON.stringify({response:'deleted'}));
    })
}


    
    async function cartProduct(req,res) {
        db.all('SELECT p.*  FROM products p  JOIN cartitem ci ON p.id = ci.product_id JOIN cart c ON ci.cart_id = c.id where c.user_id = ?',
        [req.body.user_id],
        (err, data) => {
          if (err) {
            res.send(JSON.stringify({ response: "Something went wrong" }));
          }
          res.send(data);
        }
      );



 }

module.exports = {
    allCartItems,
    createCartItems,
    updateCartItems,
    cartProduct,
    deleteCartItems

}