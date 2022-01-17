const express = require ('express')
const server = express()
const port = 8080

//set up sessions here when i get to it!
//
//
//

//Enable the middleware for JSON and urlencoded form data
server.use(express.json())
server.use(express.urlencoded({extended: true}))

//Allows the server to read static files like imgs, css, js and html
server.use('/frontend', express.static('frontend'))

//Below also does the same thing as above vvvv
//server.use(express.static(__dirname))


//Link up  the controllers when they're made!

//Connecting the userController
const userController = require("./backend/controllers/userController")
server.use("/api", userController)

//Connect the exerciseController
const exerciseController = require("./backend/controllers/exerciseController")
server.use("/api", exerciseController)

//
//
//




//Start the express server (keep this last)
server.listen(port, () => {
    console.log("server listening on http://localhost:" +port)
})