// const {insert}=require("../seeds/product_seeds")
module.exports=(db)=>{
db.run("CREATE TABLE IF NOT EXISTS products(id INTEGER primary key,title TEXT, img TEXT, price Integer)")

}