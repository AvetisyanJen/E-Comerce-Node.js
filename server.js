const express = require('express')
const app = express()
app.use(express.json());
const user_router= require('./router/user')
const product_router = require('./router/product');
const cart_router=require("./router/cart")
const cartItems_router=require("./router/cartItems")
const db=require("./models").db
user_router.user_routes(app)
product_router.product_routes(app)
cart_router.cart_routes(app)
cartItems_router.cartItems_routes(app)

app.listen(3001)