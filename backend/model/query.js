const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let query = new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    phone: {
        type: Number
    },
    message: {
        type: String
    },
    email:{
        type:String
    },
  
}, {
    collection: 'query'
})

module.exports = mongoose.model('query', query)