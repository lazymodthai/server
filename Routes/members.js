const express = require("express");
const router = express.Router();
const { read, create } = require("../Controllers/members");

router.get("/test", read);
router.post("/members", create);



module.exports = router;
