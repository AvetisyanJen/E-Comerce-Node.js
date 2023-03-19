const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.Secret


function AuthenticateAdminToken (req, res, next) {
  const token = req.headers.authorization;
  console.log(token);
  if (token == null){
      return res.sendStatus(401)
  } 
  
  jwt.verify(token, SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }
      console.log(user);
      if(user.username === "Admin" && user.rol === 1){
        next()
      }
  })
}

  

module.exports = {
  AuthenticateAdminToken 
} 