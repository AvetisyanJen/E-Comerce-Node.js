const bcrypt = require("bcrypt");
const {db } = require("../models");
const {generateAccessToken}=require("../jwt/generate")
class UserController {

    Profile(req, res){ 
        db.all('SELECT * FROM users', (err, data) => {
            res.send(data)
        }) 
   
    }
    

    async Register(req, res) {
        const { username, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashed_password = await bcrypt.hash(password, salt)
        let sql = "INSERT INTO users (username, password) VALUES (?, ?)";
        db.run(sql, [username, hashed_password], function (err) {
            if (err) {
                res.send(JSON.stringify({ status: "Error Reigstering" }))
            }
            res.send(JSON.stringify({ status: "User Created" }))
        })
        
    }


     async Login(req, res){
      const {username,password}=req.body
   
         let token = generateAccessToken(username)
         console.log(token)
    
        let sql = "SELECT * from users WHERE username = ?"
        db.get(sql, [username], await function (err, row) {
        
            if (username == row.username && bcrypt.compare(password,  row.password)) {
                res.send(JSON.stringify({row}));
            } else {
                res.send(JSON.stringify({ status: "Wrong credentials" }));
            }
        })
    }

    



} module.exports = {
    UserController: new UserController,
}


