const bcrypt = require("bcrypt");
const {db} = require("../models");
const {generateAccessToken}=require("../jwt/generate")
require('dotenv').config();

   async function register(req, res) {
        const { username, password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashed_password = await bcrypt.hash(password, salt)
        console.log(req.body)
        let sql = "INSERT INTO users (username, password,rol) VALUES (?, ?, ?)";
        db.run(sql, [username, hashed_password,0], function (err) {
            if (err) {
                res.send(JSON.stringify({ status: "Error Reigstering" }))
            }
            res.send(JSON.stringify({ status: "User Created" }))
        })
        
        
    }

    async function login(req,res){
        const username = req.body.username;
        const password = req.body.password;
        // const hashed_password = CryptoJS.SHA256(password).toString();
    
        const sql = 'SELECT * FROM users WHERE username=?';
        db.get(sql,[username],await function(err,row){
            // if(username === row.username && hashed_password === row.password){
                if(username === row.username && bcrypt.compare(password, row.password)){
            console.log(row.password);
                const token = generateAccessToken(username,row.id,row.rol);
                res.send(JSON.stringify({status: 'Logged in', jwt: token}));
           }else{
               res.send(JSON.stringify({status:'Wrong credentials'}));
           }
        })
    }



 module.exports = {
   register,login
}


