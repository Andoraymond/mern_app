const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect('mongodb+srv://'+process.env.DB_USERNAME+':'+ process.env.DB_PASSWORD+'@cluster0.rdrr7wc.mongodb.net/prj1?retryWrites=true&w=majority')

var conn = mongoose.connection;

conn.on("connected", ()=>{
    console.log("DB Connected")
})
conn.on("disconnected", ()=>{
    console.log("DB Disconnected")
})

module.exports = conn

conn.on('error', console.error.bind(console, 'connection error:'));
