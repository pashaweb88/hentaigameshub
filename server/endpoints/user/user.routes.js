const { Router } = require("express");
const config = require("config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./User");
const router = Router();

// TODO: Validation
// TODO: Errors messages and status

router.get("/user/create", async (req, res) => {
  try {
    const pass = await bcrypt.hash("gena1050", 12);
    const user = new User({ login: "admin", password: pass, admin: true });
    await user.save();
    return res.status(201).json({ message: "ok" });
  } catch (e) {
    return res.status(500).json({ message: "Server err" });
  }
});

router.get("/user/all", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json({ message: "Server err" });
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const { login, password } = req.body;
    console.log(login);
    const user = await User.findOne({ login });

    if (!user) {
      return res.status(400).json({ message: "nil login" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "nil2" });
    }

    const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
      expiresIn: "1h",
    });

    res.status(200).json({ userId: user.id, token });
  } catch (e) {
    return res.status(500).json({ message: "Server err" });
  }
});
module.exports = router;
