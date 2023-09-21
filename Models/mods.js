const mongoose = require("mongoose");

const modsSchema = mongoose.Schema(
  {
    modder_id: { type: Number, required: true },
    mod_name: { type: String, required: true },
    mod_version: { type: String, default: "1.0.0" },
    game_name: { type: String, required: true },
    game_link: [
      {
        platform: { type: String, default: null },
        link: { type: String, default: null },
      },
    ],
    mod_status: { type: Number, default: 0 },
    download_link: [
      {
        platform: { type: String, default: null },
        link: { type: String, default: null },
      },
    ],
    stats:{
      views: {type: Number, default: 0},
      downloads: {type: Number, default: 0}
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("mods", modsSchema);
