const members = require("../Models/members");

exports.read = async (req, res) => {
  res.send("This is for test");
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const addMember = await members(req.body).save
    res.send(addMember)
    res.send('OK')
  } catch (err) {
    console.log("ไม่ผ่านเพราะ "+err);
  }
};
