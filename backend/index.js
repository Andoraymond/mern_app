const express = require('express')
const mongoose = require("./db_connect.js")
const User = require("./models/user.js")
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.json({status: 'API is running'})
})

app.post("/signup", async (req, res)=>{
    try {
        const { username, password } = req.body
        const newUser = new User({ username, password })
        await newUser.save()
        res.status(200).json({
            message: "Sign Up Successful"
        })
    } catch (err){
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
})

app.get("/users", async (req, res)=>{
    try {
        const users = await User.find().select('username')
        res.json(users)
    } catch (err){
        res.status(500).json({error: err.message})
    }
})

// app.get("/signup/:username/:password", (req, res)=>{
//     var u = req.params.username
//     var p = req.params.password
//     res.send(u + " signedup successfully with the password " + p)
// })

app.listen(5000, ()=>{
    console.log("server is runnin on port 5000")
})




