const { Schema, model } = require("mongoose");

const schema = new Schema({
  login: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  admin: { type: Boolean, require: true, default: false },
});

module.exports = model("User", schema);
