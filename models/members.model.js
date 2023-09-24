const mongoose = require("mongoose");

const membersSchema = mongoose.Schema(
  {
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    social: {
      facebook: {type: String, default: null},
      discord: {type: String, default: null},
      website: {type: String, default: null},
    },
    modder: {type: Boolean, default: false},
    modder_id: {type: Number, default: null},
    modder_name: {type: String, default: null},
    image: {type: String, default: null},
    last_login: {
      type: Date,
      default: null,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('members', membersSchema);
