const mods = require("../Models/mods");

exports.readMod = async (req, res) => {
  res.send("This is Read");
};

exports.createMod = async (req, res) => {
  try {
    console.log(req.body);
    const addMod = await mods(req.body).save();
    res.send(addMod);
  } catch (err) {
    console.log(err);
  }
};
exports.updateMod = async (req, res) => {
  try {
    console.log('This is Update');
  } catch (err) {
    console.log(err);
  }
};
exports.removeMod = async (req, res) => {
  try {
    console.log('This is Remove');
  } catch (err) {
    console.log(err);
  }
};