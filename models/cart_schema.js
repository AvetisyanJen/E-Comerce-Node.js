module.exports=(db)=>{
 db.run("CREATE TABLE IF NOT EXISTS cart(id INTEGER primary key,user_id INTEGER NOT NULL,FOREIGN KEY (user_id) REFERENCES users(id))")
    }
                                                            