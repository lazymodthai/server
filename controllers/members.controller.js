
var {Constants} = require('../constants');
const axios = require('axios');
exports.readMember = async (req, res) => {
  console.log(Constants.STATUS_SUCCESS)
  res.send("Get");
};

exports.createMember = async (req, res) => {
  // try {
  //   // Send body to auth service
  //   const addMember =  Register(req.body)
  //   // Response
  //   res.send(addMember);
  // } catch (err) {
  //   res.send(err)
  // }

  const data =await axiosV2()

  res.send(data)
};
const env = {
  pokeDomain : "https://pokeapi.co/api/v2"
}

async function axiosV2(){
  try{
    if(check(a)) //checkA
    
    console.log("?")
    // เปลีั่ยนชื่อโปรเกม่อน
    // เข้าดาต้าเบด
    application 
    return data
  }
  catch(err){
    console.log(err)
  }
 

}

put = { id:1,name:"นายเอ"}
put2 = { id:2,name:"ddd"}
patch = { id:1,name:"นายไก่"}

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