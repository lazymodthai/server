
const { CreateMember } = require("../repositories/member.repository");
async function Register(body){
    try {
        console.log(req.body);
        const addMember = CreateMember(body)
        return addMember
      } catch (err) {
        console.log(err);
        return err
      }
}

module.exports = { Register };