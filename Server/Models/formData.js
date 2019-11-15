const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formSchema = new Schema({
    username: String,
    password: String,
    email: String,
    phone: Number,
})

module.exports = mongoose.model('Form', formSchema)