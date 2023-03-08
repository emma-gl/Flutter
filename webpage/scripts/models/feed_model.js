// Gets all the data regarding another profile for it to be built by the Utilities
const pool = require("../")

async function getUserProfile(){
    return await pool.query("SELECT * FROM public.users")
  }