const mysql=require('mysql2');

const db= mysql.createPool({
    host:'localhost',
    user:'root',
    password:'PHW#84#jeor',
    database:'resto'
})

db.getConnection(()=>{
    console.log('connect to Data Base successfully');
})
module.exports=db;