const express = require("express");
const router = express.Router();
const { readMod, createMod, updateMod, removeMod } = require("../Controllers/mods");

router.get("/mods", readMod);
router.post("/mods", createMod);
router.put("/mods/:id", updateMod);
router.delete("/mods/:id", removeMod);


module.exports = router;
