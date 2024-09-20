const mongoose = require('mongoose');

const roomschema = mongoose.Schema({


    name : {
        type: String,
        required: true 
    },
    maxcount :{
        type: Number,
        required: true
    },
    phonenumber :{
        type:Number,
        required: true
    },
    rentperday : {
        type: Number,
        required: true
    },
    location : {
        type : String,
        required : true
    },
    imageurls : [],
    currentbookings :[],
    type : {
        type :String,
        required:true
    },
    description :{
        type : String,
        required :true
    }  
}, {
    timestamps :true,
})

const roomModel = mongoose.model('rooms', roomschema)

module.exports = roomModel