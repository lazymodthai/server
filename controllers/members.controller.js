const { Register } = require("../services/auth.service");
var {Constants} = require('../constants');


exports.readMember = async (req, res) => {
  console.log(Constants.STATUS_SUCCESS)
  res.send("Get");
};

exports.createMember = async (req, res) => {
  try {
    // Send body to auth service
    const addMember =  Register(req.body)
    // Response
    res.send(addMember);
  } catch (err) {
    res.send(err)
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