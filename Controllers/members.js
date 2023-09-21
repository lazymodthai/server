const members = require("../Models/members");

exports.readMember = async (req, res) => {
  res.send("This is Read");
};

exports.createMember = async (req, res) => {
  
  try {
    console.log(req.body);
    const addMember = await members(req.body).save();
    res.send(addMember);
  } catch (err) {
    console.log(err);
  }
};
exports.updateMember = async (req, res) => {
  try {
    console.log('This is Update');
  } catch (err) {
    console.log(err);
  }
};
exports.removeMember = async (req, res) => {
  try {
    console.log('This is Remove');
  } catch (err) {
    console.log(err);
  }
};