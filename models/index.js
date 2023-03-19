const config = require('../config/config')
const sqlite3 = require('sqlite3').verbose();
const db= new sqlite3.Database(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT
  })

const User=require("./user_schema")(db)
const Product=require("./product_schema")(db)
const Cart=require("./cart_schema")(db)
const CartItems=require("./cartItems_schema")(db)

module.exports={
    User,
    Product,
    Cart,
    CartItems,
    db

}