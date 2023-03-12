const express = require('express')
const app = express()
app.use(express.json());
const user_router= require('./router/user')
const product_router = require('./router/product');


user_router.user_routes(app)
product_router.product_routes(app)

app.listen(3001)