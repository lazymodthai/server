const { CreateMember } = require("../repositories/members.repository");
const Members = require("../models/members.model");
async function Register(body) {
  try {
    const { username, password } = body;
    const user = await Members.findOne({ username });
    // Check username already exist
    if (user) {
      console.log("This username has already exist")
    } else {
      // Create member
      await CreateMember(body);
      console.log("Create",body);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { Register };
