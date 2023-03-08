// For SERVER COMMUNICATION


// URLs to BackEnd: Main, Signup, SignIn
let urlMain = "https://flutterservices.onrender.com";
let urlSignIn = "https://flutterservices.onrender.com/api/auth/signin";
let urlSignUp = "https://flutterservices.onrender.com/api/auth/signup";

// Variables for submit buttons
const profileSubmit = document.querySelector('form input[type="submit"]');
const signInSubmit = document.querySelector('form input[type="submit"]');


// submit profile function
async function submitProfile() {
    // variables
    let first_name = document.querySelector("#first_name").value;
    let last_name = document.querySelector("#last_name").value;
    let city = document.querySelector("#city").value;
    let phone = document.querySelector("#phone").value;
    let gender = document.querySelector("#gender").value;
    let orientation = document.querySelector("#orientation").value;
    let email = document.querySelector("#email").value;
    let date_of_birth = document.querySelector("#date_of_birth").value;
    // get the data
    const response = await fetch(urlSignUp, {method: 'POST', body: JSON.stringify({
        first_name, last_name, city, phone, gender, orientation, email, date_of_birth
    })} );
}

async function submitSignIn() {
    let username = document.querySelector('form input[type="email"]').value;
    let password = document.querySelector('form input[type="password"]').value;
    
    // response will be the token
    const response = await fetch(urlSignIn, {method: 'POST', body: JSON.stringify({
        username, password
    })} );
}

async function passwordVerification() {
    let password = document.querySelector('form input[type="password"]').value;
    let confirmPassword = document.querySelector('form input[type="confirmPassword"]').value;

    while (password != confirmPassword) {
        // invalid password
    }
    // else, allow password to go through
}

// Event Listeners for submit buttons
// (calls a function)
profileSubmit.addEventListener("click", submitProfile);
signInSubmit.addEventListener("click", submitSignIn);
