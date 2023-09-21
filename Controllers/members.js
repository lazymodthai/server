const members = require("../Models/members");

exports.read = async (req, res) => {
  res.send("This is for test");
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const addMember = await members(req.body).save();
    res.send(addMember);
  } catch (err) {
    console.log(err);
  }
};
exports.update = async (req, res) => {
  try {
    console.log('This is Update');
  } catch (err) {
    console.log(err);
  }
};
exports.remove = async (req, res) => {
  try {
    console.log('This is Remove');
  } catch (err) {
    console.log(err);
  }
};