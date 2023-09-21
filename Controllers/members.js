import { Register } from "../Services/auth.service";

var constants = require('./constants/status');
const members = require("../Models/members");

exports.readMember = async (req, res) => {
  res.send("This is Read");
};

exports.createMember = async (req, res) => {
  try {
    const addMember =  Register(req.body)
    res.send(constants.STATUS_SUCCESS);
  } catch (err) {
    console.log(err);
    //handle response error
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