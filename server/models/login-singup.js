const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const loginschema = mongoose.Schema({

    mobileno : {
        type: Number,
        required: true
    }, 
    password : {
        type: String,
        required: true
    }
})

const loginmodel = mongoose.model('login', loginschema )
module.exports = loginmodel