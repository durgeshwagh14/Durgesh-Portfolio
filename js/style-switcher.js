/* ========================== Toggle Style Switcher ====================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) 
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* ========================== Theme Color ====================*/
const alternateStyles = document.querySelectorAll(".alternate-style"); // Use querySelectorAll
function setActiveStyle(colors) {
    alternateStyles.forEach((style) => {
        style.disabled = style.getAttribute("title") !== colors; // More concise way to set disabled
    });
}

/* ========================== Theme Light and Dark Mode ====================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
       dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

/* ========================== Typing Animation ====================*/
var typed = new Typed(".typing", {
    strings: [" ", "Full Stack Developer", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
}); 



