const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.SECRET

function generateAccessToken(username,id,rol) {

    return jwt.sign({username,id,rol}, SECRET, { expiresIn: '36000s' });
}


module.exports={generateAccessToken}