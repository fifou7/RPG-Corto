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
    ["Lunafreya","Woman","Lunafreya.png","Ally","5","10","25","350","550","20","12","35","40","10","40"]
  ];

con.query (sql,[values], function (err) {
     if (err) throw err;
 console.log("Table created");
 });

});

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");

//   let sql =  "INSERT INTO mobs (name, gender, image, category, level, ATK, DEF, Health, MANA, speed, atb_jauge, magic, spirit, dodge, accuracy, DMG) VALUES ?";
//   let values= [
//     ["mibombo","Other","Bombo.png","Enemy","2","10","20","500","100","20","7","35","10","10","40","60"],
//   ];

// con.query (sql,[values], function (err) {
//      if (err) throw err;
//  console.log("Table created");
//  });

// });

