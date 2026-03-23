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
      "2500",
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
      "2500",
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
      "2500",
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

  // fixtures skills

  let sqlskills = "INSERT INTO skills (id, name, DMG, MANA_cost) VALUES ?";
  let skillsValues = [
    [1, "Enchainement dévastateur", 30, 50],
    [2, "Big bang", 30, 50],
    [3, "KeyBlade rush", 30, 50],
    [4, "Octaslash", 30, 50],
  ];

  con.query(sqlskills, [skillsValues], function (err) {
    if (err) throw err;
    console.log("Skills fixtures inserted");
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

  // Bombo
  let sqlMobs =
    "INSERT INTO mobs (name, gender, image, category, level, ATK, DEF, Health, MANA, speed, atb_jauge, magic, spirit, dodge, accuracy, DMG) VALUES ?";
  let mobValues = [
    [
      "Mibombo",
      "Other",
      "Bombo.png",
      "Enemy",
      2,
      10,
      20,
      500,
      100,
      20,
      7,
      35,
      10,
      10,
      40,
      60,
    ],
  ];

  con.query(sqlMobs, [mobValues], function (err) {
    if (err) throw err;
    console.log("Mobs fixtures inserted");
  });

  // BlackKnight
  let sqlBlackKnight =
    "INSERT INTO mobs (name, gender, image, category, level, ATK, DEF, Health, MANA, speed, atb_jauge, magic, spirit, dodge, accuracy, DMG) VALUES ?";
  let mobValuesBlackKnight = [
    [
      "BlackKnight",
      "Other",
      "BlackKnight.png",
      "Enemy",
      4,
      100,
      200,
      800,
      100,
      20,
      5,
      35,
      10,
      10,
      40,
      400,
    ],
  ];

  con.query(sqlBlackKnight, [mobValuesBlackKnight], function (err) {
    if (err) throw err;
    console.log("Mobs BlackKnight fixtures inserted");
  });

  // Sephiroth

  let sqlSephiroth =
    "INSERT INTO boss (name, gender, image, category, level, ATK, DEF, Health, MANA, speed, atb_jauge, magic, spirit, dodge, accuracy, DMG) VALUES ?";
  let SephirothValues = [
    [
      "Sephiroth",
      "Other",
      "Sephiroth.png",
      "Enemy",
      10,
      250,
      500,
      4500,
      500,
      50,
      7,
      35,
      25,
      20,
      40,
      600,
    ],
  ];

  con.query(sqlSephiroth, [SephirothValues], function (err) {
    if (err) throw err;
    console.log("Mobs Sephiroth fixtures inserted");
  });
});
