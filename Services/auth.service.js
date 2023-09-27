const { CreateMember } = require("../repositories/members.repository");
const Members = require("../models/members.model");


function Test(){
  let res = {data:"ok",status:200}
  return res
}

async function TestAsync(){
   number = await getNumber()
   return number /2 
}

async function getNumber(){
  data = await getPermission
  // pause 10 sec
  return 0
}
function fetchDataPromise(){
  let data = {}
  console.log("")
  fetch("url").then(res => res.json).then(data = res)
}

async function fetchData (){
  let data = await fetch("url")
  data = data.json
 
}

async function axiosV1(){
  let {data} = await $axios.get(``)
  let res = await $axios.post(``,body)
}





module.exports = {  axiosV2};
