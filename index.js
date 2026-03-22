const express = require("express");
const cors = require("cors");
const app = express();
let port = 3000;
const getUsersRouter = require("./routes/getUser");
const getMobsRouter = require("./routes/getMobs");
const getCharactersRouter = require("./routes/getCharacters");
const getPnjRouter = require("./routes/getPnj");
const getDialoguesRouter = require("./routes/getDialogues");
const getSkillsRouter = require("./routes/getSkills");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/users", getUsersRouter);
app.use("/mobs", getMobsRouter);
app.use("/characters", getCharactersRouter);
app.use("/pnj", getPnjRouter);
app.use("/dialogues", getDialoguesRouter);
app.use("/skills", getSkillsRouter);
// app.get("/", (req, res) => {
//   res.send("Bonjour");
// });

// app.get("/store", (req, res) => {
//   res.send("magasin vide");
// });

//error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

//server launch
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

let server = app.listen(8081, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Exemple server listening at http://localhost:${port}`);
});

app.use(express.static("public"));
