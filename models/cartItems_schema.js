module.exports=(db)=>{
    db.run("CREATE TABLE if not exists cartItem (id integer primary key,cart_id integer not null,product_id integer not null,foreign key (cart_id)references cart(id),foreign key (product_id)references products(id))")
}