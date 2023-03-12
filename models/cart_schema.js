module.exports=(db)=>{
 db.run("CREATE TABLE IF NOT EXISTS cart(id INTEGER primary key,count INTEGER,user_id INTEGER NOT NULL,product_id INTEGER NOT NULL,FOREIGN KEY (user_id) REFERENCES users(id),FOREIGN KEY (product_id) REFERENCES products(id))")
    }
                                                            