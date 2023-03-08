// Processes the request
// This is also where the middleware / form validation will go
const feedModel = require("../models/feed_model")
const utilities = require("../utilities/utilities")

const accCont = {}

// Where the profile is built, being passed the data from the account model, which is where the query takes place.
accCont.buildProfile = async function (req, res, next) {
    const user_id = req.params.user_id
    
    let data = await feedModel.getProfile(user_id)

    const first_name = data[0].first_name

};

module.exports = buildProfile;