// For SERVER COMMUNICATION
// URLs to BackEnd: Main, Signup, SignIn
let urlMain = "https://flutterservices.onrender.com";
let urlSignIn = "https://flutterservices.onrender.com/api/auth/signin";
let testSignIn = "http://localhost:3000/api/auth/signin";
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
    
    if (response != false) {
        console.log(document.cookie)
        // check and see if cookie is there / signed in 
        if (document.cookie === "") {
            document.cookie = `flutteruseremailcookie=${username}` + `; domain=; path=/`;
            document.cookie = `flutterusertokencookie=${response.token}` + `; domain=; path=/`;
            // + `;path=/`
            console.log(document.cookie)
            document.getElementById("error_message").innerHTML = `${document.cookie}`;
            window.location.href = '../feed/feed.html';
        } else {
            window.location.href = '../feed/feed.html';
        }

    }
    else {
        // if not, throw error message onto page
        document.getElementById("error_message").innerHTML = "Invalid Username or Password"
    }
}


async function checkValidation(email, password) {

    let json = {"email": email, "password": password};
    
    const profileSubmit = document.querySelector('form input[type="submit"]');
    const signInSubmit = document.querySelector('form input[type="submit"]');
    
    // response will be the token
    console.log(json);

    // const parsedResponse = await JSON.parse(json);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const response = await fetch(testSignIn, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: myHeaders,
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(json), // body data type must match "Content-Type" header
        });
        
        // const response = await fetch(testSignIn, {method: 'POST', headers: {
        //     "Content-Type": "application/json",
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        //   }, body: parsedResponse});
        if (response.status == 200) {
            let data = await response.json()
            return data;
        } else {
            return false;
        }
        
    }


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

async function passwordVerification() {
    let password = document.querySelector('form input[type="password"]').value;
    let confirmPassword = document.querySelector('form input[type="confirmPassword"]').value;

    while (password != confirmPassword) {
        // invalid password
    }
    // else, allow password to go through
}


// Event Listeners for submit buttons
// const profileSubmit = document.querySelector("#profile_signup_submit");
// document.getElementById("sign_in_submit").addEventListener("click", submitSignIn());
