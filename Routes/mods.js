const express = require("express");
const router = express.Router();
const { read, create, update, remove } = require("../Controllers/mods");

router.get("/mods", read);
router.post("/mods", create);
router.put("/mods/:id", update);
router.delete("/mods/:id", remove);


module.exports = router;
