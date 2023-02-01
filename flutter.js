// Entry Point of the API Server 
  
const express = require('express');
require('dotenv').config();
  
/* Creates an Express application. 
   The express() function is a top-level 
   function exported by the express module.
*/
const app = express();
const Pool = require('pg').Pool;
const tls = require('node:tls');
  
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASS,
    port: 5432,
    ssl: true
});
  
pool.connect();
console.log("Connected")

async function view_users(){
    var query = await pool.query("SELECT * FROM users");
    console.log(query);
}

async function add_users(){
    //ask for user information then add it 
    var query = await pool.query("INSERT INTO users (first_name, last_name, \
        city, phone, gender, orientation, email, date_of_birth) VALUES ( \
            'Jane', 'Doe', 'New York City', '0987654321', 'Female', 'Straight', \
            'mail@email.com', '2000-10-30')");
    console.log(query);
}

async function delete_user(){
    //ask for user information then add it 
    var query = await pool.query("DELETE FROM users WHERE first_name='John'");
    console.log(query);
}

async function update_user(){
    //ask for user information then add it 
    var query = await pool.query("UPDATE users SET city = '' WHERE id == ");
    console.log(query);
}

//add_users();
view_users();
  
/* To handle the HTTP Methods Body Parser 
   is used, Generally used to extract the 
   entire body portion of an incoming 
   request stream and exposes it on req.body 
*/
// const bodyParser = require('body-parser');
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }));
  
  
// pool.connect((err, client, release) => {
//     if (err) {
//         return console.error(
//             'Error acquiring client', err.stack)
//     }
//     client.query('SELECT NOW()', (err, result) => {
//         release()
//         if (err) {
//             return console.error(
//                 'Error executing query', err.stack)
//         }
//         console.log("Connected to Database !")
//         const res = pool.query('SELECT * FROM users')
//         console.log(res)
//     })
// })
  
// // app.get('/testdata', (req, res, next) => {
// //     console.log("TEST DATA :");
// //     pool.query('Select * from test')
// //         .then(testData => {
// //             console.log(testData);
// //             res.send(testData.rows);
// //         })
// // })
  
 // Require the Routes API  
 // Create a Server and run it on the port 3000
 const server = app.listen(3000, function () {
     let host = server.address().address
     let port = server.address().port
     // Starting the Server at the port 3000
})