
// Side Navigation bar

let navBarBool = 0;
function navBar() {
    if (navBarBool == 0) {
        openNav()
        navBarBool += 1;
    } else {
        closeNav()
        navBarBool -= 1;
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    // document.body.style.backgroundColor = "white";
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

const swipe_yes = document.getElementById("swipe_yes")
const swipe_no = document.getElementById("swipe_no")

swipe_yes.addEventListener("click", ()=> {
    const profile_display = document.getElementById("profile-display")
    profile_display.classList.add('animate__animated', "animate__fadeOutTopRight")
    // wait(1000)
    // profile_display.classList.remove('animate__animated', "animate__fadeOutTopRight")
})


swipe_no.addEventListener("click", ()=> {
    const profile_display = document.getElementById("profile-display")
    profile_display.classList.add('animate__animated', "animate__fadeOutBottomLeft")
    // wait(1000)
    // profile_display.classList.remove('animate__animated', "animate__fadeOutTopRight")
})





addEventListener
profileAnimation.classList.add("")