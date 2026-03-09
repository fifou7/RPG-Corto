const mysql = require("mysql");
const config = require("../config");

let con = mysql.createConnection(config.db);

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =  "INSERT INTO characters (name, gender, image, category, level, ATK, DEF, Health, MANA, speed, atb_jauge, magic, spirit, dodge, accuracy) VALUES ?";
  let values = [
    ["Tidus","Man","Tidus.png","Main-character","5","20","30","450","250","40","7","10","15","5","50"],
    ["Sora","Man","Sora.png","Ally","5","15","20","400","350","30","9","25","20","10","50"],
  ];

con.query (sql,[values], function (err) {
     if (err) throw err;
 console.log("Table created");
 });

});
