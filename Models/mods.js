const mongoose = require("mongoose");

const modsSchema = mongoose.Schema(
  {
    modder_id: { type: Number, required: true },
    mod_name: { type: String, required: true },
    mod_version: { type: String, default: "1.0.0" },
    game_name: { type: String, required: true },
    game_link: {
      steam: { type: String, default: null },
      epic: { type: String, default: null },
      xbox: { type: String, default: null },
      gog: { type: String, default: null },
      ea: { type: String, default: null },
      ubisoft: { type: String, default: null },
      battlenet: { type: String, default: null },
      other: { type: String, default: null },
    },
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
