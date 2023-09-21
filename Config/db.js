const mongoose = require('mongoose')
const DBLINK = require('dotenv').config()
const url = process.env.DBLINK

const connectDB = async()=>{
    try{
        await mongoose
        .connect(url,{dbName: 'modthai'})
        console.log('MongoDB connected');
    }catch (err){
        console.log(err);
    }
}

module.exports = connectDB