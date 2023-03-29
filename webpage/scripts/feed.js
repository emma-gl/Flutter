// API Urls
let getProfilesURL = "https://flutterservices.onrender.com/api/account/";
let getProfilesURLtest = "http://localhost:3000/api/account";

// Simplified authentication check to see if cookies are there.
if (document.cookie == null) {
  window.location.href = '../sign-in/sign-in.html';
} 

// Profiles will be the array that gets the first ten
let profiles = [];

// Active profiles is the array that checks data is appropriate and displays it.
let activeProfiles = []
let activeProfilesIndex = 0;

let currentProfile = []



// Splits the cookies into necessary authentication pieces.
const email = getCookie("flutteruseremailcookie");
const token = getCookie("flutterusertokencookie");


let json = {"email": email, "token": token};

var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  fetch(getProfilesURL, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: myHeaders,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(json), // body data type must match "Content-Type" header
      })
  .then(response => response.json())
  .then(data => {
    // Profiles returns an array of up to ten profiles.
    profiles = data.profiles;
    // For each of these profiles, go through and check to make sure that it contains data. For right now, it is just checking for a first name, which is enough to get rid of test profiles.
    for (let profile = 0; profile < profiles.length; profile++) 
    {
      if (typeof profiles[profile].first_name != "undefined")
      {
        activeProfiles.push(profiles[profile])

        document.getElementById("first_name").innerHTML = profiles[profile].first_name 
        document.getElementById("gender").innerHTML = profiles[profile].gender 
        document.getElementById("age").innerHTML = calculateAge(profiles[profile].date_of_birth)
      }
    }
  })
  .catch(error => {
    console.error(error);
  });



function getCookie (name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) { 
    return parts.pop().split(';').shift(); 
  }
}

const calculateAge = (birthday) => {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs)

  return Math.abs(ageDate.getUTCFullYear() - 1970)
}



// document.getElementById("first_name").innerText = activeProfiles[activeProfilesIndex].first_name






// // URLs to BackEnd
// let getProfilesURL = "https://flutterservices.onrender.com/api/account/";
// let getProfilesURLtest = "http://localhost:3000/api/account";


// if (document.cookie == null) {
//   window.location.href = '../sign-in/sign-in.html';
// } 

// // Load the profiles as soon as the window is loaded
// document.getElementById("main").addEventListener("load", loadProfiles());

// async function loadProfiles() 
// {
//   const email = getCookie("flutteruseremailcookie");
//   const token = getCookie("flutterusertokencookie");

//   let data = getProfiles(email, token);
//   console.log(data)
// }

// function getProfiles(email, token) 
// {
//   let currentProfileIndex = 0;
//   let profiles = [];

//   let json = {"email": email, "token": token};
//   console.log(JSON.stringify(json));
//   var myHeaders = new Headers();

//   myHeaders.append('Content-Type', 'application/json');

//   fetch(getProfilesURL, {
//             method: "POST", // *GET, POST, PUT, DELETE, etc.
//             mode: "cors", // no-cors, *cors, same-origin
//             cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//             credentials: "same-origin", // include, *same-origin, omit
//             headers: myHeaders,
//             redirect: "follow", // manual, *follow, error
//             referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//             body: JSON.stringify(json), // body data type must match "Content-Type" header
//           })
//           .then(response => {
//             response.json()
//           })
//           .then(data => {
//             profiles = data.profiles;
//             console.log("test");
//             console.log(profiles);
            
//             const profileElements = document.querySelectorAll('.profile');
//             profileElements.forEach((element, index) => {
//               element.addEventListener('click', () => {
//                 // Get the next profile
//                 currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
//                 const profile = profiles[currentProfileIndex];
//                 // Update the UI with the next profile data
//                 // For example:
//                 document.getElementById('profile-id').textContent = profile.id;});
//           })
//           .catch(error => {
//             console.error(error);
//           });
//         })
//   console.log(data)
// };

// function getData(json)
// {
  
// }

// function getCookie (name) {
//   let value = `; ${document.cookie}`;
//   let parts = value.split(`; ${name}=`);
  
//   if (parts.length === 2) { 
//     return parts.pop().split(';').shift(); 
//   }
// }




