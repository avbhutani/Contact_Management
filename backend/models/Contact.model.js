const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        default:'N/A',
        required:true
    },
    lastName:{
        type:String,
        default:'N/A',
        required:true
    },
    email: {
        type:String,
        required:true,
        default:'N/A',
        required:true
    },
    phoneNumber:{
        type:String,
        default:'N/A',
        required:true
    },
    company: {
        type:String,
        default:'N/A',
        required:true
    },
    jobTitle: {
        type:String,
        default:'N/A',
        required:true
    }
},{timestamps:true})

const Contact = mongoose.model('Contact',ContactSchema)
module.exports = Contact