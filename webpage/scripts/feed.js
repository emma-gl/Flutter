// import filterProfiles from './generateProfile';

if (document.cookie == null) {
  window.location.href = '../sign-in/sign-in.html';
} 

// URLs to BackEnd
function main() {
  let getProfilesURL = "https://flutterservices.onrender.com/api/account/";
  let currentProfileIndex = 0;
  let profiles = [];
  const email = getCookie("flutteruseremailcookie");
  const token = getCookie("flutterusertokencookie");

  console.log(email);
  console.log(token);

  let json = {"email": email, "token": token};

  fetch(getProfilesURL, { method: 'GET' },{body: JSON.stringify(json)})
    .then(response => response.json())
    .then(data => {
      profiles = data.profiles;
      
      console.log(profiles)
      
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