const express = require('express')
const app = express()
const { readdirSync } = require('fs')

readdirSync('./Routes').map((r)=>app.use('/api',require('./Routes/'+r)))

app.listen(5000, ()=> console.log('Server is running on http://localhost:5000'))