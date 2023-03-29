// Variables for submit buttons

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