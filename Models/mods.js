const mongoose = require("mongoose");

const modLinkSchema = mongoose.Schema({
  platform: { type: String, default: null },
  link: { type: String, default: null },
});

const modsSchema = mongoose.Schema(
  {
    modder_id: { type: String, required: true },
    mod_name: { type: String, required: true },
    mod_version: { type: String, default: "1.0.0" },
    game_name: { type: String, required: true },
    game_link: [modLinkSchema],
    mod_status: { type: Number, default: 0 },
    download_link: [modLinkSchema],
    stats: {
      views: { type: Number, default: 0 },
      downloads: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("mods", modsSchema);
