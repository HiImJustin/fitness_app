//Connect express
const express = require ("express")
//This allows us to the the api from the server
const router = express.Router()

//requires the needed models for the functions
const userModel = require("../models/userModel")

//Get all the users from the user table 
//Define an api endpoint of /api/users
router.get("/users", (req, res) => {
    userModel.getAllUsers()
        .then((results) => {
            res.status(200).json(results)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json("query error")
        })
})























module.exports = router