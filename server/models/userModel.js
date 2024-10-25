const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    mobileNumber : {
        type: Number,
        required: true
    }, 
    password : {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;