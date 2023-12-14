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

contactList.addEventListener("click", function(){
    contactList.classList.remove("is-active");
    contactList.classList.add("is-exit");
    hamburger.classList.remove("is-active");
    contactList.classList.remove("is-exit");
    contactList.style.display = "none";
});


var typed = new Typed('.auto-type', {
    strings: ["Web Development", "Android Development", "Python Development"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

var typed = new Typed('.auto-type-phone', {
    strings: ["Web Development", "Android Development", "Python Development"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

function download(){
    var pdfPath = 'script/pdf/CV2.pdf';

    // Create an anchor element
    var link = document.createElement('a');

    // Set the download attribute and the file path
    link.download = 'ArnabResume.pdf';
    link.href = pdfPath;
    link.target = "_blank";

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
}
