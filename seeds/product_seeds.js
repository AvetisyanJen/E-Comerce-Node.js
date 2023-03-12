// const { db } = require("../models");

const config = require('../config/config')
const sqlite3 = require('sqlite3').verbose();
const db= new sqlite3.Database(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT
  })
function insert() {
 
  }

  module.exports={insert} 

 