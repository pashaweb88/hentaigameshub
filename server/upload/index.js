const multer = require("multer");
const fs = require("fs");
const e = require("express");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync("./files")) {
      fs.mkdirSync("./files", (err) => {
        console.log(err);
      });
    }
    cb(null, "./files");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

module.exports = upload;
