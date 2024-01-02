// import apiKeys from './api-keys';

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
function setActiveLink(clickedElement) {
    // Remove the 'active' class from all links
    var links = document.querySelectorAll('.header-list li a');
    links.forEach(function(link) {
      link.parentNode.classList.remove('active');
    });

    // Add the 'active' class to the clicked link
    clickedElement.parentNode.classList.add('active');
  }

contactList.addEventListener("click", function(){
    contactList.classList.remove("is-active");
    contactList.classList.add("is-exit");
    hamburger.classList.remove("is-active");
    contactList.classList.remove("is-exit");
    contactList.style.display = "none";
});


var typed = new Typed('.auto-type', {
    strings: ["Web Development", "Android Development", "Python Development", "GUI", "Deployment", "Software Design", "Database"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

var typed = new Typed('.auto-type-phone', {
    // strings: ["Web Development", "Android Development", "Python Development"],
    strings: ["Web Development", "Android Development", "Python Development", "GUI", "Deployment", "Software Design", "Database"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

var typed = new Typed('.auto-type-tab', {
    // strings: ["Web Development", "Android Development", "Python Development"],
    strings: ["Web Development", "Android Development", "Python Development", "GUI", "Deployment", "Software Design", "Database"],
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

function changeBorder(formID){
    var id = document.getElementById(formID);
    id.style.border = "3px solid #81B214";
}

function resetBorder(formID) {
    var id = document.getElementById(formID);
    id.style.border = "3px solid #232d38"; // Change this to your desired default color
}

function sendEmail() {
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var errorMsg = document.getElementById('error-message');

    function setErrorBorder(element) {
        element.style.border = "3px solid red";
    }

    function resetErrorBorders() {
        name.style.border = "";
        phone.style.border = "";
        email.style.border = "";
        message.style.border = "";
    }

    if (name.value === "") {
        setErrorBorder(name);
    } else if (phone.value === "") {
        setErrorBorder(phone);
    } else if (email.value === "") {
        setErrorBorder(email);
    } else if (message.value === "") {
        setErrorBorder(message);
    } else {
        resetErrorBorders();

        if (!sendNotify(name.value)) {
            errorMsg.textContent = "Server Problem, Try Again";
            errorMsg.style.color = "red";

            setTimeout(function () {
                errorMsg.textContent = "";
            }, 3000);
        } else if(sendNotify(name.value)) {
            var body = `
                <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 5px;">
                    <h2>Contact Information:</h2>
                    <ul style="list-style: none; padding: 0;">
                        <li><strong>Name:</strong> ${name.value}</li>
                        <li><strong>Phone:</strong> ${phone.value}</li>
                        <li><strong>Email:</strong> ${email.value}</li>
                    </ul>
                    <div style="padding: 10px; border-left: 2px solid #555;">
                        <p><strong>Message:</strong></p>
                        <p style="margin-left: 10px;">${message.value}</p>
                    </div>
                </div>
            `;

            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "amansmas8016@gmail.com",
                Password: "14FBF103F1DFFBA20B7C636EC073C13977D2",
                To: 'arnabmondal203@gmail.com',
                From: "amansmas8016@gmail.com",
                Subject: "Portfolio Message From Web",
                Body: body
            })
                .then(function (msg) {
                    errorMsg.textContent = "Thank you, I will contact you later";
                    errorMsg.style.color = "#9ADE7B";
                    // Clear input fields
                    name.value = "";
                    phone.value = "";
                    email.value = "";
                    message.value = "";
                    setTimeout(function () {
                        errorMsg.textContent = "";
                    }, 3000);
                })
                .catch(function (error) {
                    errorMsg.textContent = "Server Problem, Try Again";
                    errorMsg.style.color = "red";
                    setTimeout(function () {
                        errorMsg.textContent = "";
                    }, 3000);
                });
        }
        else{
            errorMsg.textContent = "Server Problem, Try Again";
            errorMsg.style.color = "red";

            setTimeout(function () {
                errorMsg.textContent = "";
            }, 3000);
        }
    }
}


function sendEmailPhone() {
    var name = document.getElementById("pname");
    var phone = document.getElementById("pphone");
    var email = document.getElementById("pemail");
    var message = document.getElementById("pmessage");
    var errorMsg = document.getElementById('error-message-phone');

    function setErrorBorder(element) {
        element.style.border = "3px solid red";
    }

    function resetErrorBorders() {
        name.style.border = "";
        phone.style.border = "";
        email.style.border = "";
        message.style.border = "";
    }

    if (name.value === "") {
        setErrorBorder(name);
    } else if (phone.value === "") {
        setErrorBorder(phone);
    } else if (email.value === "") {
        setErrorBorder(email);
    } else if (message.value === "") {
        setErrorBorder(message);
    } else {
        resetErrorBorders();

        if (!sendNotify(name.value)) {
            errorMsg.textContent = "Server Problem, Try Again";
            errorMsg.style.color = "red";

            setTimeout(function () {
                errorMsg.textContent = "";
            }, 3000);
        } else if(sendNotify(name.value)) {
            var body = `
                <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 5px;">
                    <h2>Contact Information:</h2>
                    <ul style="list-style: none; padding: 0;">
                        <li><strong>Name:</strong> ${name.value}</li>
                        <li><strong>Phone:</strong> ${phone.value}</li>
                        <li><strong>Email:</strong> ${email.value}</li>
                    </ul>
                    <div style="padding: 10px; border-left: 2px solid #555;">
                        <p><strong>Message:</strong></p>
                        <p style="margin-left: 10px;">${message.value}</p>
                    </div>
                </div>
            `;

            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "amansmas8016@gmail.com",
                Password: "14FBF103F1DFFBA20B7C636EC073C13977D2",
                To: 'arnabmondal203@gmail.com',
                From: "amansmas8016@gmail.com",
                Subject: "Portfolio Message From Web",
                Body: body
            })
                .then(function (msg) {
                    errorMsg.textContent = "Thank you, I will contact you later";
                    errorMsg.style.color = "#9ADE7B";
                    // Clear input fields
                    name.value = "";
                    phone.value = "";
                    email.value = "";
                    message.value = "";
                    setTimeout(function () {
                        errorMsg.textContent = "";
                    }, 3000);
                })
                .catch(function (error) {
                    errorMsg.textContent = "Server Problem, Try Again";
                    errorMsg.style.color = "red";
                    setTimeout(function () {
                        errorMsg.textContent = "";
                    }, 3000);
                });
        }
        else{
            errorMsg.textContent = "Server Problem, Try Again";
            errorMsg.style.color = "red";

            setTimeout(function () {
                errorMsg.textContent = "";
            }, 3000);
        }
    }
}


function sendEmailTab() {
    var name = document.getElementById("tname");
    var phone = document.getElementById("tphone");
    var email = document.getElementById("temail");
    var message = document.getElementById("tmessage");
    var errorMsg = document.getElementById('error-message-tab');

    function setErrorBorder(element) {
        element.style.border = "3px solid red";
    }

    function resetErrorBorders() {
        name.style.border = "";
        phone.style.border = "";
        email.style.border = "";
        message.style.border = "";
    }

    if (name.value === "") {
        setErrorBorder(name);
    } else if (phone.value === "") {
        setErrorBorder(phone);
    } else if (email.value === "") {
        setErrorBorder(email);
    } else if (message.value === "") {
        setErrorBorder(message);
    } else {
        resetErrorBorders();

        if (!sendNotify(name.value)) {
            errorMsg.textContent = "Server Problem, Try Again";
            errorMsg.style.color = "red";

            setTimeout(function () {
                errorMsg.textContent = "";
            }, 3000);
        } else if(sendNotify(name.value)) {
            var body = `
                <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; border-radius: 5px;">
                    <h2>Contact Information:</h2>
                    <ul style="list-style: none; padding: 0;">
                        <li><strong>Name:</strong> ${name.value}</li>
                        <li><strong>Phone:</strong> ${phone.value}</li>
                        <li><strong>Email:</strong> ${email.value}</li>
                    </ul>
                    <div style="padding: 10px; border-left: 2px solid #555;">
                        <p><strong>Message:</strong></p>
                        <p style="margin-left: 10px;">${message.value}</p>
                    </div>
                </div>
            `;

            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "amansmas8016@gmail.com",
                Password: "14FBF103F1DFFBA20B7C636EC073C13977D2",
                To: 'arnabmondal203@gmail.com',
                From: "amansmas8016@gmail.com",
                Subject: "Portfolio Message From Web",
                Body: body
            })
                .then(function (msg) {
                    errorMsg.textContent = "Thank you, I will contact you later";
                    errorMsg.style.color = "#9ADE7B";
                    // Clear input fields
                    name.value = "";
                    phone.value = "";
                    email.value = "";
                    message.value = "";
                    setTimeout(function () {
                        errorMsg.textContent = "";
                    }, 3000);
                })
                .catch(function (error) {
                    errorMsg.textContent = "Server Problem, Try Again";
                    errorMsg.style.color = "red";
                    setTimeout(function () {
                        errorMsg.textContent = "";
                    }, 3000);
                });
        }
        else{
            errorMsg.textContent = "Server Problem, Try Again";
            errorMsg.style.color = "red";

            setTimeout(function () {
                errorMsg.textContent = "";
            }, 3000);
        }
    }
}


// var animationData = {
//     container: document.getElementById('lottie-container'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'https://lottie.host/692a190e-2179-4ba3-9b35-22a04de95348/4LBNrfvOl4.json' 
//   };
//   var anim = bodymovin.loadAnimation(animationData);
//   document.getElementById("site").style.visibility = "visible";

  document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};

async function sendNotify(name) {
    const pushbulletApiKey = apiKeys.pushbullet;
    try {
        const response = fetch('https://api.pushbullet.com/v2/pushes', {
            method: 'POST',
            headers: {
                'Access-Token': pushbulletApiKey, // Replace with your actual API key
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'note',
                title: 'Portfolio Web Message',
                body: `${name} wants to talk`,
            }),
        });

        const data = response.json();
        console.log('Notification Sent:', data);
        // alert('Notification Sent:\n' + JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.log('Error:', error);
        // alert('Error: ' + error.message);
        return false;
    }
}

// Example usage:
// sendNotify('John Doe');
