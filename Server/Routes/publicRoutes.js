const express = require('express')
const route = express.Router()
const User = require('../Models/userModel')
const Form = require('../Models/formData')

let data
let formtable;
route.post("/signup", (req, res) => {
    let user = new User()
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.address = req.body.address;

    user.save((err) => {
        if (err) return done(err)
        res.send({ message: 'usercreated' })
    })

})

route.post("/upform", (req, res) => {
    let form = new Form()
    form.username = req.body.username;
    form.password = req.body.password;
    form.email = req.body.email;
    form.phone = req.body.phone;

    data ={
        username : req.body.username,
    password : req.body.password,
    email : req.body.email,
    phone : req.body.phone,
    }

    form.save((err) => {
        if (err) return done(err)
        res.send({ state:true })
    })

})

route.post('/sigin', (req, res) => {
    User.findOne({ "username": req.body.username }, (err, user) => {
        console.log(user)
        if (user === null) {
            res.send({ message: "username not found" })
        }
        else if (user.password !== req.body.password) {
            res.send({ message: "password is incorrect" })
        }
        else {
            let object = {
                state: true,
                message: "welcome user"
            }
            res.json(object)
            console.log(object)
        }

    })
})
route.get("/upform1", (req, res) => {
    Form.find({},(err,form)=>{
        // console.log(form)
        res.send(form)
    })
    

})
route.post("/delform1",(req,res)=>{
    let id1 = req.body.selectedRow;
    // console.log(typeof id1)
    Form.deleteOne( { "_id" : id1} ,function(err,obj) {
        if(err) throw new Error(err)
        console.log("1 document deleted");
    })
    res.send({message:true})
})

module.exports = route;