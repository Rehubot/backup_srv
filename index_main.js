require("babel-core/register");
var http=require('http');
var mysql=require('mysql');  
const thred=require('child_process'); 
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "x",
  database: "nodejs"
});
var conn=mysql.createConnection({
 host:"localhost",
 user:"root",
 password:"x",
 database:"nodejst"
});
var connstate=mysql.createConnection({
 host:"localhost",
 user:"root",
 password:"x",
 database:"nodejsstate"
});
conn.connect();
con.connect();
connstate.connect();
var recstatequery="Select * from recordstates"; 

connstate.query(recstatequery, function(err, rows, fields) {
    if (err) throw err;
 rows.forEach(function(value){

var sourcetable=value.src_table;
var desttable=value.target_table;
var statement="SELECT * from "+sourcetable;


con.query(statement, function(err, rows, fields) {
    if (err) throw err;
 rows.forEach(function(value){


conn.query("INSERT INTO "+desttable+"(user_id,user_name) values("+value.user_id+",'"+value.user_name+"') ON DUPLICATE KEY UPDATE user_name='"+value.user_name+"'", function(err, rows, fields) {
    if (err) throw err; 

});
 });  
});
 });  
});







