const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let company = new Schema({
    name: {
        type: String
    },
    owner: {
        type: String
    },
    email:{
        type:String
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
    industry: {
        type: String
    },
    capital:{
        type:String
    },
    phone: {
        type: Number
    },
    web:{
        type:String
    },
    desc:{
        type:String
    }

}, {
    collection: 'company'
})

module.exports = mongoose.model('company', company)