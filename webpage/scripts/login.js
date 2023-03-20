// For SERVER COMMUNICATION


// URLs to BackEnd: Main, Signup, SignIn
let urlMain = "https://flutterservices.onrender.com";
let urlSignIn = "https://flutterservices.onrender.com/api/auth/signin";
let urlSignUp = "https://flutterservices.onrender.com/api/auth/signup";

// Variables for submit buttons


// submit profile function
// async function submitProfile() {
//     // variables
//     let first_name = document.querySelector("first_name").value;
//     let last_name = document.querySelector("last_name").value;
//     let city = document.querySelector("city").value;
//     let phone = document.querySelector("phone").value;
//     let gender = document.querySelector("gender").value;
//     let orientation = document.querySelector("orientation").value;
//     let email = document.querySelector("email").value;
//     let date_of_birth = document.querySelector("date_of_birth").value;
//     // get the data
//     const response = await fetch(urlSignUp, {method: 'POST', body: JSON.stringify({
//         first_name, last_name, city, phone, gender, orientation, email, date_of_birth
//     })} );
// }


async function submitSignIn() {
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(username, password)

    let response = await checkValidation(username, password)
    console.log(response)

    if (response.status == 200) {
        // If response.status == 200, sign in
        document.cookie = `flutteruseremailcookie=${username}`;
        document.cookie = `flutterusertokencookie=${response.token}`;

        document.getElementById("error_message").innerHTML = `${document.cookie}`
    // }
    // else {
        // if not, throw error message onto page
        document.getElementById("error_message").innerHTML = "Invalid Username or Password"
    // }
}
}


async function checkValidation(email, password) {

    const json = `{"email": "${email}", "password": "${password}"}`
    // response will be the token
    console.log(json);
    const response = await fetch(urlSignIn, {method: 'POST', body: JSON.parse(json)});

    return response;
}

// Event Listeners for submit buttons
// const profileSubmit = document.querySelector("#profile_signup_submit");
// document.getElementById("sign_in_submit").addEventListener("click", submitSignIn());

