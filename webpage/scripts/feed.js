import filterProfiles from './generateProfile';

// URLs to BackEnd
const getProfilesURL = "https://flutterservices.onrender.com/api/account/feed";

function main() {
  let currentProfileIndex = 0;
  let profiles = [];

  fetch(getProfilesUrl, { method: 'GET' },{body: JSON.stringify('email':'flutteruseremailcookie','token':'')})
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


