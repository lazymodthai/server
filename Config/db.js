const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose
        .connect('mongodb+srv://lazymodthai:kIbLJL85gF1UQZTQ@modthai.yn7gi44.mongodb.net/')
        console.log('MongoDB connected');
    }catch (err){
        console.log(err);
    }
}

module.exports = connectDB