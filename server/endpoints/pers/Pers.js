const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, require: true, unique: true },
  posterPath: { type: String, require: true, unique: false },
  bannerPath: { type: String, require: true, unique: false },
  apps: [{ type: Types.ObjectId, ref: "Game" }],
});

module.exports = model("Pers", schema);
