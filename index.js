const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

app.use(express.json({ extended: true }));

app.use(require("./server/endpoints/user/user.routes"));
app.use(require("./server/endpoints/pers/pers.routes"));
app.use(require("./server/endpoints/game/game.routes"));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
async function start() {
  try {
    await mongoose.connect(config.get("db"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(config.get("port"), () => {
      console.log("success");
    });
  } catch (e) {
    console.log("--Nil");
  }
}

start();
