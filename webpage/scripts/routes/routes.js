// Gets the request, calls functions from the controller function
const express = require("express")
const router = new express.Router()
const util = require("../utilities/utilities")
// const feedController = require("../controllers/feed_controller")
const accController = require("../controllers/account_controller")
const feedController = require("../controllers/feed_controller")

// Links to access the Backend API
let urlMain = "https://flutterservices.onrender.com";
let urlSignIn = "https://flutterservices.onrender.com/api/auth/signin";
let urlSignUp = "https://flutterservices.onrender.com/api/auth/signup";



// route to build the profile view
// router.get("/profile", feedController.buildProfile)


// Route for account information
// router.get("/sign_in", feedController.submitSignIn)




