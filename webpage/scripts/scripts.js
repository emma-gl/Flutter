
// Side Navigation bar

console.log(cookie)

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
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}