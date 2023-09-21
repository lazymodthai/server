const mods = require("../Models/mods");

exports.read = async (req, res) => {
  res.send("This is Read");
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const addMod = await members(req.body).save();
    res.send(addMod);
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