const mysql = require("mysql");
const config = require("../config");

let con = mysql.createConnection(config.db);

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query(
    "CREATE TABLE IF NOT EXISTS characters (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, name varchar(25), gender enum('Man', 'Woman', 'Other'), image varchar(255), category enum('Main-Character', 'Ally','Enemy'), level int(99), ATK int(99), DEF int(99), Health int(99), MANA int(99), speed int(11), atb_jauge int(99), magic int(99), spirit int(99), dodge int(99), accuracy int(99));",
    function (err) {
      if (err) throw err;
      console.log("Table created");
    },
  );

  con.query(
    "CREATE TABLE IF NOT EXISTS mobs (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, name varchar(25), gender enum('Man', 'Woman', 'Other'), image varchar(255), category enum('Main-Character', 'Ally', 'Enemy'), level int(99), ATK int(99), DEF int(99), Health int(99), MANA int(99), speed int(11), atb_jauge int(11), magic int(99), spirit int(99), dodge int(99), accuracy int(99), DMG int(99));",
    function (err) {
      if (err) throw err;
      console.log("Table created");
    },
  );

  con.query(
    "CREATE TABLE IF NOT EXISTS Ost (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, Name varchar(50), track varchar(255));",
    function (err) {
      if (err) throw err;
      console.log("Table created");
    },
  );

  con.query(
    "CREATE TABLE IF NOT EXISTS npc (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, name varchar(25), gender enum('Man', 'Woman', 'Other'), image varchar(255), role varchar(25));",
    function (err) {
      if (err) throw err;
      console.log("Table created");
    },
  );

  con.query(
    "CREATE TABLE IF NOT EXISTS dialogues (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, npc_id int(11), text text(255), step int(11), FOREIGN KEY (npc_id) REFERENCES npc(id));",
    function (err) {
      if (err) throw err;
      console.log("Table created");
    },
  );

  con.query(
    "CREATE TABLE IF NOT EXISTS skills (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, name varchar(25), DMG int(11), MANA_cost int(11));",
    function (err) {
      if (err) throw err;
      console.log("Table created");
    },
  );

  con.query(
    "CREATE TABLE IF NOT EXISTS boss (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, name varchar(25), gender enum('Man', 'Woman', 'Other'), image varchar(255), category enum('Main-Character', 'Ally', 'Enemy'), level int(99), ATK int(99), DEF int(99), Health int(99), MANA int(99), speed int(11), atb_jauge int(11), magic int(99), spirit int(99), dodge int(99), accuracy int(99), DMG int(99));",
    function (err) {
      if (err) throw err;
      console.log("Table created");
    },
  );
});
