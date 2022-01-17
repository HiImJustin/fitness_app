//Use express 
const express = require("express")
//Connect the router
const router = express.Router()
//use the exericse model
const exerciseModel = require("../models/exerciseModel")

//Api endpoint that shows a list of all avaliable exercises
router.get("/exercises", (req, res) => {
    exerciseModel.allExercises()
    .then((results) => {
        if (results.length > 0) {
            res.status(200).json(results)
        }
    })
    .catch((error) => {
        //This will log any issues to the terminal
        console.log(error)
        res.status(500).json("Query Error")
    })
})


//Api endpoint that posts the data to create a new exercise
//api/add/exercise
router.post("/add/exercise", (req,res) => {

    let exercise = req.body

    exerciseModel.addExercise(
        exercise.exerciseName,
        exercise.avgCalBurned,
        exercise.userID
    )
    .then((results) => {
        res.status(200).json("Added the new exercise " + results.exerciseName)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json("couldnt create the new exercise")
    })
})


//Api endpoint that posts the data to the customRoutine table
//Api/makeCustomRoutine
router.post("/makeCustomRoutine", (req, res) => {

    let exercise = req.body

    exerciseModel.makeCustomRoutine(
        exercise.routineName,
        exercise.exercise1,
        exercise.exercise2,
        exercise.exercise3,
        exercise.exercise4,
        exercise.exercise5,
        exercise.exercise6,
        exercise.exercise7,
        exercise.exercise8,
        exercise.exercise9,
        exercise.exercise10
    )
    .then((results) => {
        res.status(200).json("New exercise added " + results.routineName)
    })
})


module.exports = router