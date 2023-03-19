const { db } = require("../models");
const {checkUser}  = require('../jwt/checkisUser')
     async function cartuser(req,res) {
        const user = checkUser(req,res);
        console.log(user,user)
   
        db.all("SELECT * FROM users join cart on users.id = cart.user_id where cart.user_id = ?",
        [
     req.body.user_id
        ],
        (err,data)=>{
           if(err){
               res.send(JSON.stringify({response:'Something went wrong'}));
           }else if(user.id!== req.body.user_id){
            return res.sendStatus(403);}
           res.send(data);
       })
     }
     
     async function createCart(req,res){
        console.log(req.body);
             db.run('INSERT INTO cart(user_id) VALUES(?)', 
             [ req.body.user_id],     (err)=>{
              if(err){
                  res.send(JSON.stringify({response:'Something went wrong'}));
              }
              res.send(JSON.stringify({response:"Card Created"}));
          })
           
    
    }
module.exports={
     cartuser,
     createCart
    }