const mongoose = require('mongoose');
const blog_schema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String
    }
    ,
    text: {
        type: String
    },
    title: {
        type:String
    }
})
const blog = mongoose.model('blog', blog_schema)
module.exports = blog;