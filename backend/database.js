//Import the mysql2 module so we can connect to the database
const myslq2 = require ('mysql2');

//Creating a connection to the database
const connection = myslq2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fitness_app',
})

// This wrapper wil allow the use of promise functions
// Like .then() and .catch() so that we can use it in an async way along with expressJS.
// function query() {} same as below

const query = (sql, parameters) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, parameters, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

// Export the new query function so that the models can use it
module.exports = { query }