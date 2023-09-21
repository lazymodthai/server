const express = require("express");
const router = express.Router();
const { read, create, update, remove } = require("../Controllers/members");

router.get("/members", read);
router.post("/members", create);
router.put("/members/:id", update);
router.delete("/members/:id", remove);


module.exports = router;
