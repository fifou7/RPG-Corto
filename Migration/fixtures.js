const mysql = require("mysql");
const config = require("../config");

let con = mysql.createConnection(config.db);

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  // fixtures characters

  let sql =
    "INSERT INTO characters (name, gender, image, category, level, ATK, DEF, Health, MANA, speed, atb_jauge, magic, spirit, dodge, accuracy) VALUES ?";
  let values = [
    [
      "Tidus",
      "Man",
      "Tidus.png",
      "Main-character",
      "5",
      "20",
      "30",
      "450",
      "250",
      "40",
      "7",
      "10",
      "15",
      "5",
      "50",
    ],
    [
      "Sora",
      "Man",
      "Sora.png",
      "Ally",
      "5",
      "15",
      "20",
      "400",
      "350",
      "30",
      "9",
      "25",
      "20",
      "10",
      "50",
    ],
    [
      "Lunafreya",
      "Woman",
      "Lunafreya.png",
      "Ally",
      "5",
      "10",
      "25",
      "350",
      "550",
      "20",
      "12",
      "35",
      "40",
      "10",
      "40",
    ],
  ];

  con.query(sql, [values], function (err) {
    if (err) throw err;
    console.log("Table created");
  });

  // fixtures npc

  let sqlNpc = "INSERT INTO npc (name, gender, image, role) VALUES ?";
  let npcValues = [
    ["Marie", "Woman", "NPC-1.png", "Villager"],
    ["Jean", "Man", "NPC-2.png", "niceguy"],
    ["Pierre", "Man", "old-man.png", "old-man"],
  ];

  con.query(sqlNpc, [npcValues], function (err) {
    if (err) throw err;
    console.log("NPC fixtures inserted");
  });

  // fixtures dialogues

  // fixtures dialogues
  let sqlDialogues = "INSERT INTO dialogues (npc_id, text, step) VALUES ?";
  let dialogueValues = [
    [1, "Bonjour voyageur.", 1],
    [1, "Le village est calme aujourd'hui.", 2],
    [
      1,
      "Prend cet objet au centre de la place et va voir mon collègue dans les bois.",
      3,
    ],

    [2, "Salut ! C'est ma collègue qui t'envoie ?", 1],
    [2, "Va voir le vieux dans sa grotte.", 2],
    [2, "Il a un truc cool pour toi.", 3],

    [3, "Je suis vieux et fatigué...", 1],
    [3, "Mince, j'ai oublié ma réplique.", 2],
    [3, "It's dangerous to go alone! Take this.", 3],
  ];

  con.query(sqlDialogues, [dialogueValues], function (err) {
    if (err) throw err;
    console.log("Dialogues fixtures inserted");
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
