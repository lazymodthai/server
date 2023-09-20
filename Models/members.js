const mongoose = require("mongoose");

const membersSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    social: {
      facebook: String,
      discord: String,
      website: String,
    },
    modder: Boolean,
    modder_id: Number,
    modder_name: String,
    image: String,
    last_login: {
      type: Date,
      default: null,
    },
    add_date: {
      type: Date,
      default: Date.now,
    },
    deleted_date: {
      type: Date,
      default: null,
    },
    last_update: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('members', membersSchema);
