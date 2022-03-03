const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let blog = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    wby: {
        type: String
    },
    date:{
        type:String
    },
  
}, {
    collection: 'blog'
})

module.exports = mongoose.model('blog', blog)