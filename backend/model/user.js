const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let user = new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    username: {
        type: String
    },
    gender: {
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
  
}, {
    collection: 'user'
})

module.exports = mongoose.model('user', user)