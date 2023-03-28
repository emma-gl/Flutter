// import filterProfiles from './generateProfile';

if (document.cookie == null) {
  window.location.href = '../sign-in/sign-in.html';
} 

// URLs to BackEnd
function main() {
  let getProfilesURL = "https://flutterservices.onrender.com/api/account/";
  let getProfilesURLtest = "http://localhost:3000/api/account";
  let currentProfileIndex = 0;
  let profiles = [];
  const email = getCookie("flutteruseremailcookie");
  const token = getCookie("flutterusertokencookie");
  console.log(email);
  console.log(token);

  let json = {"email": email, "token": token};
  console.log(JSON.stringify(json));
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
      profiles = data.profiles;
      console.log("test");
      console.log(profiles);
      
      const profileElements = document.querySelectorAll('.profile');
      profileElements.forEach((element, index) => {
        element.addEventListener('click', () => {
          // Get the next profile
          currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
          const profile = profiles[currentProfileIndex];
          // Update the UI with the next profile data
          // For example:
          document.getElementById('profile-id').textContent = profile.id;});
          
      });
    })
    .catch(error => {
      console.error(error);
    });
}


function getCookie (name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) { 
    return parts.pop().split(';').shift(); 
  }
}

function displayProfile(id) {

}

function swipe() {

}

function animation() {

}


main();