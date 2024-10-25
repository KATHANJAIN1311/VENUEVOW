const express = require("express");
const router = express.Router();
const userModel = require('../models/userModel')

router.post('/login', async(req, res) => {
    try {
        console.log('data-', req.body);
        const {mobileNumber, password} = req.body;

        const user = await userModel.findOne({mobileNumber : mobileNumber});
        console.log('user-', user)

        if(!user || user == null) {
            res.status(200).json({
                status: "notRegistered"
            })
        }

        if(user && password) {
            if(password == user.password) {
                console.log('pass_matched')
                res.status(200).json({
                    status: "loggedIn"
                })
            } else {
                console.log('incorrect_pass')
                res.status(200).json({
                    status: "incorrectPass"
                })
            }
        }

    } catch (error) {
        console.log('error-', error);
        res.status(200).json({
            status: "error"
        })
    }
})

router.post("/signup", async(req, res) => {
    try {
        console.log('data-', req.body);
        const {name, mobileNumber, email, password} = req.body;

        const user = new userModel({
            name: name,
            mobileNumber: mobileNumber,
            email: email,
            password: password            
        })

        await user.save()

        res.status(200).json({
            id: user._id,
            status: "registered"
        })
    } catch(error) {
        console.log('error-', error);
        res.status(200).json({
            status: "error"
        })
    }
})

module.exports = router;