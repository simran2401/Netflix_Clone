const mongooose = require('mongoose');

const UsersSchema = new mongooose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongooose.model('User', UsersSchema);
