const config = require('../config/config')
const sqlite3 = require('sqlite3').verbose();
const db= new sqlite3.Database(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT
  })
  console.log(db)
const User=require("./user_schema")(db)
const Product=require("./product_schema")(db)
const Cart=require("./cart_schema")(db)
console.log(User)
module.exports={
    User,
    Product,
    Cart

}