const express = require('express')
const app = express()
app.use(express.json());
const {User,Product,Cart}=require("./models")


app.listen(3001)