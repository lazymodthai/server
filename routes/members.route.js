const express = require("express");
const router = express.Router();
const { readMember, createMember, updateMember, removeMember } = require("../controllers/members.controller");

router.get("/members", readMember);
router.post("/members", createMember);
router.put("/members/:id", updateMember);
router.delete("/members/:id", removeMember);


module.exports = router;
