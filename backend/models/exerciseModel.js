//Access the database connection from database.js
const { use } = require("../controllers/userController")
const db = require("../database")


//View all exercises that are avaliable
module.exports.allExercises = () => {
    return db.query("SELECT * from exercises")
}

//Insert a new exercise into the exercise table
module.exports.addExercise = (exerciseName, avgCalBurned, userID) => {
    return db.query("INSERT INTO exercises (exerciseName, avgCalBurned, userID)"
    + "VALUES(?,?,?)", [exerciseName, avgCalBurned, userID])
}

//INSERT INTO the customRoutine table, adds a new routine
module.exports.makeCustomRoutine = (routineName, exercise1, exercise2, exercise3, exercise4, exercise5,
    exercise6, exercise7, exercise8, exercise9, exercise10) => {
    return db.query("INSERT INTO customRoutine (routineName, exercise1, exercise2, exercise3, exercise4, " +
        " exercise5, exercise6, exercise7, exercise8, exercise9, exercise10) " +
        " VALUES(?,?,?,?,?,?,?,?,?,?,?)",
        [routineName, exercise1, exercise2, exercise3, exercise4, exercise5,
            exercise6, exercise7, exercise8, exercise9, exercise10
        ])
}