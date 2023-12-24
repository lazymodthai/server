const members = require("../models/members.model");

async function FindMemberBySomeThing(filter) {
  try {
    const member = await members(req.body).where(filter);
    return member;
  } catch (err) {
    //wait for handle error
    console.log(err);
    return err;
  }
}
async function saveMember(body) {
  try {
    const member = await members(body).save();
    return member;
  } catch (err) {
    //wait for handle error
    console.log(err);
    return err;
  }
}
module.exports = { FindMemberBySomeThing,saveMember };
