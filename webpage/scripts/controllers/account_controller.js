const accModel = require("../models/account_model")
const utilities = require("../utilities/utilities")

const accCont = {}

// Where the profile is built, being passed the data from the account model, which is where the query takes place.
accCont.buildProfile = async function (req, res, next) {
    const user_id = req.params.user_id
    
    let data = await accModel.getProfile(user_id)

    const className = data[0].


}