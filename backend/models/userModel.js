//Link up the database connection from the database.js file
const db = require("../database")

//Select all from users
module.exports.getAllUsers = () => {
    return db.query("select * from users")
}