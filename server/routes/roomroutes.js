const express = require("express");
const router = express.Router();

const Room = require('../../models/room')

router.get("/all", async(req,res)=>{
 
    try{
    const rooms= await Room.find({})
    console.log('rooms-', rooms.length)
    res.send(rooms)
    }catch(error){
        return res.status(400).json({massage:error});
    }
}); 

module.exports = router;