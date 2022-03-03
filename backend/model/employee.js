const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let employee = new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    company: {
        type: String
    },
    designation:{
        type: String
    },
    gender: {
        type: String
    },
    email:{
        type:String
    },
   status: {
        type: String
    },
    dob: {
        type: String
    },
    addr: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    zip: {
        type: Number
    },
    phone: {
        type: Number
    }
}, {
    collection: 'employee'
})

module.exports = mongoose.model('employee', employee)