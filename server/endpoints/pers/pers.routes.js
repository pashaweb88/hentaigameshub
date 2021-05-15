const { Router } = require("express");
const Pers = require("./Pers");
const upload = require("../../upload");

const router = Router();

// IN NOT SO FAR FUTURE! :))
router.post("/pers/upload", upload.array("file"), async (req, res) => {
  try {
    const name = req.body.name;
    const file = req.file;

    if (!name || name === "") {
      return res.status(501).json({ message: "no name" });
    }

    if (!file || file == undefined) {
      return res.status(501).json({ message: "no file" });
    }

    const pers = new Pers({ name: name, posterPath: req.file.filename });
    await pers.save();

    res.status(201).json({ message: "ok" });
  } catch (e) {
    res.status(501).json({ message: "Server err" });
  }
});

router.get("/pers/detail/:id", async (req, res) => {
  try {
    const pers = await Pers.findById(req.params.id);

    if (!pers) {
      return res.status(404).json({ message: "not found" });
    }

    return res.status(200).json(pers);
  } catch (e) {
    return res.status(500).json({ message: "Server err" });
  }
});

router.post("/pers/create/", async (req, res) => {
  try {
    const { name, posterPath, bannerPath } = req.body;

    if (!name || !posterPath || !bannerPath) {
      return res.status(404).json({ message: "Incorrect data" });
    }

    const pers = new Pers({ name, posterPath, bannerPath });

    await pers.save();

    return res.status(201).json({ message: "ok" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Server err" });
  }
});

router.get("/pers/all", async (req, res) => {
  try {
    const persList = await Pers.find();
    return res.status(200).json(persList);
  } catch (e) {
    return res.status(500).json({ message: "ok" });
  }
});

module.exports = router;
