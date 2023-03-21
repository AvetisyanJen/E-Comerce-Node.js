const { db } = require("../models");
const { checkUser } = require('../jwt/checkisUser')
async function cartuser(req, res) {
    const user = checkUser(req, res);
    const { user_id } = req.body
    if (user.id === user_id) {
        db.get("SELECT * FROM users join cart on users.id = cart.user_id where cart.user_id = ?",
            [
                user_id
            ],
            (err, data) => {
                if (err) {
                    res.send(JSON.stringify({ response: 'Something went wrong' }));
                }
                res.send(data);
            })
    } else {
        return res.sendStatus(403);
    }

}

async function createCart(req, res) {
    console.log(req.body);
    const user = checkUser(req, res);
    const { user_id } = req.body
    if (user.id === user_id) {
        db.run('INSERT INTO cart(user_id) VALUES(?)',
            [user_id], (err) => {
                if (err) {
                    res.send(JSON.stringify({ response: 'Something went wrong' }));
                }
                res.send(JSON.stringify({ response: "Card Created" }));
            })
    } else {
        return res.sendStatus(403);
    }

}

async function deleteCart(req, res) {
    const user = checkUser(req,res);
   const {user_id}=req.body
    if(user.id === user_id){
      db.run("DELETE FROM cart WHERE user_id=?", [user_id], (err) => {
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
module.exports = {
    cartuser,
    createCart,
    deleteCart
}