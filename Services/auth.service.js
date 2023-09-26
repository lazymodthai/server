const { CreateMember } = require("../repositories/members.repository");
const Members = require("../models/members.model");
async function Register(body) {
  try {
    console.log(body);
    const { username, password } = body;
    const user = await Members.findOne({ username });
    if (user) {
      console.log('This username has already exist');
    } else {
      CreateMember(body);
      console.log('Create',body);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { Register };
