//elements reference
let closeIcon = document.querySelector(".close-icon");
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".header-nav");
let ul = document.querySelector(".header-ul");

// Remove navigation
function hide(e) {
    nav.style.visibility = "hidden";
}
closeIcon.addEventListener("click",hide,false);

// Show navigation
function show(e){
      nav.style.visibility = "visible";
}
hamburger.addEventListener("click",show,false);

ul.addEventListener("click",hide,false);

