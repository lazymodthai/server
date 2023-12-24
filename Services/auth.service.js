const { saveMember } = require("../repositories/members.repository");
const Members = require("../models/members.model");
async function Register(body) {
  try {
    const { username, password } = body;
    const user = await Members.findOne({ username });
    // Check username already exist
    if (user) {
      return { error: "This username has already exist" };
    } else {
      // Create member
      await saveMember(body);
      return { successMessage: "Create member successfully" };
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { Register };
