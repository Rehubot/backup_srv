require("babel-core/register");
var http=require('http');
var mysql=require('mysql');  
const { fork,spawn } = require('child_process');
const child = spawn('wc');



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "x",
  database: "nodejs"
});


con.connect();

async function fetch(){

con.query("SELECT * from users", function(err, rows, fields) {
    if (err) throw err;

 rows.forEach(function(value){
let child=new child();
 });  
});
}
async function assigned() {
let assigned =await fetch();
  
}





