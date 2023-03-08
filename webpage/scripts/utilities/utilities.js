// Utilities is in charge of parsing the data and returning it as HTML to be manipulated.
const accModel = require("../models/account_model")
const Util = {}


// needs a ton of adjustments obv in row names and references, but this is where you'll build the profile
Util.getUserProfile = async function (data) {
    let profile = `<h1>${data.rows[0].first_name} ${data.rows[0].last_name}</h1>`
    
    data.rows.forEach((row) => {
        profile += `<img src="${data.rows[row].image}" alt="Image of ${data.rows[row].first_name + "" + data.rows[row].last_name}"></img>`
    })

    return profile;
}

module.exports = Util;