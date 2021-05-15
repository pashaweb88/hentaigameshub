const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, require: true, unique: false },
  category: { type: String, require: true, unique: false },
  icon: { type: String, require: true, unique: false },
  weburl: { type: String, require: true, unique: false },
  apkurl: { type: String, require: true, unique: false },
  pers: [{ type: Types.ObjectId, require: true, unique: false }],
});

module.exports = model("Game", schema);
