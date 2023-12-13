var hamburger = document.querySelector(".hamburger");
var contactList = document.querySelector(".header-list-phone");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    var isActive = hamburger.classList.contains("is-active");

    if (isActive) {
        void contactList.offsetWidth;
        contactList.style.display = "block";
        setTimeout(function() {
            contactList.classList.add("is-active");
        }, 300);
    } else {
        contactList.classList.remove("is-active");
        contactList.classList.add("is-exit");
        setTimeout(function() {
            contactList.style.display = "none";
            contactList.classList.remove("is-exit");
        }, 300); // 300ms matches the transition duration
    }
});


var typed = new Typed('.auto-type', {
    strings: ["Web Development", "Android Development", "Python Development"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed = new Typed('.auto-type-phone', {
    strings: ["Web Development", "Android Development", "Python Development"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
