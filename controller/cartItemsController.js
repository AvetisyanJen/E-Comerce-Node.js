const { db } = require("../models");
const {checkUser}  = require('../jwt/checkisUser')


async function createCartItems(req, res) {
    const {cart_id,product_id} = req.body;
    const user = checkUser(req,res);
    if(user.id === cart_id){

      db.run(
        "INSERT INTO cartItem(cart_id,product_id) VALUES(?,?)",
        [cart_id, product_id],
        (err) => {
          console.log(user.id,cart_id);
          if(err){
            console.log(err);
           return res.send(JSON.stringify({ response: "Something went wrong" }));
          }
        
          res.send(JSON.stringify({ response: "created" }));
        }
      );
    }else{
      return res.sendStatus(403);
    }  
  }


  async function deleteCartItems(req, res) {
    const user = checkUser(req,res);
   const {cart_id,id}=req.body
    if(user.id === cart_id){
      db.run("DELETE FROM cartItem WHERE  id=? and cart_id=?", [id,cart_id], (err) => {
        console.log(user);
        if(err){
          res.send(JSON.stringify({response:'Something went wrong'}));
        }
        res.send(JSON.stringify({ response: "deleted" }));
      });
    }else{
      return res.sendStatus(403);
    }
    
  }


    
    async function cartProduct(req,res) {
        const user = checkUser(req,res);
        db.all('SELECT products.* FROM cartItem JOIN products  ON cartItem.product_id = products.id WHERE cartItem.cart_id = ?',
        // db.all('SELECT p.*  FROM products p  JOIN cartitem ci ON p.id = ci.product_id JOIN cart c ON ci.cart_id = c.id where c.user_id = ?',
        [req.body.cart_id],
        (err, data) => {
          if (err) {
            res.send(JSON.stringify({ response: "Something went wrong" }));
          }
        else if(!user.id){
          return res.sendStatus(403)}
          res.send(data);
        }
      );



 }

module.exports = {
  
    createCartItems,
    cartProduct,
    deleteCartItems

}