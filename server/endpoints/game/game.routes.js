const { Router } = require("express");
const Game = require("./Game");
const router = Router();

router.post("/game/create", async (req, res) => {
  try {
    const { name, category, icon, girl, weburl, apkurl } = req.body;

    const game = new Game({ name, category, icon, weburl, apkurl, pers: girl });

    await game.save();

    return res.status(201).json({ message: "ok" });
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
});

router.get("/game/all/:id", async (req, res) => {
  try {
    const games = await Game.find({ pers: req.params.id });
    res.status(200).json(games);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
