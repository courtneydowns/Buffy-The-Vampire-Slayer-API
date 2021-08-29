require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");
let episode = require("./controllers/episodeController");
const port = process.env.PORT || 3000;
const path = require("path");

sequelize.sync();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.use(express.json());

app.use(require("cors")());
app.use(require("body-parser").json());

// app.use(require("./middleware/headers"));

app.use("/episode", episode);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
