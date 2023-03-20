import filterProfiles from './generateProfile';

// URLs to BackEnd
const getProfilesURL = "https://flutterservices.onrender.com/api/account/feed";


function getCookie (name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function main() {
  let currentProfileIndex = 0;
  let profiles = [];
  fetch(getProfilesUrl, { method: 'GET' },{body: JSON.stringify(`email:${getCookie('flutteruseremailcookie')}`,`token:${getCookie('flutterusertokencookie')}}`)
    .then(response => response.json())
    .then(data => {
      profiles = data.profiles;
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

function displayProfile() {

}

function swipe() {

}

function animation() {

}


