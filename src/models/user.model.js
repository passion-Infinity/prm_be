const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  fullname: { type: String },
  password: { type: String },
});

module.exports = mongoose.model('User', userSchema);
