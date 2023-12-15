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

function changeBorder(formID){
    var id = document.getElementById(formID);
    id.style.border = "3px solid #81B214";
}

function resetBorder(formID) {
    var id = document.getElementById(formID);
    id.style.border = "3px solid #232d38"; // Change this to your desired default color
}

function sendEmail(){
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var errorMsg = document.getElementById('error-message');
    if(name.value === ""){
        name.style.border = "3px solid red";
    } else if(phone.value === ""){
        phone.style.border = "3px solid red";
    } else if(email.value === ""){
        email.style.border = "3px solid red";
    } else if(message.value === ""){
        message.style.border = "3px solid red";
    } else {
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
            Subject: "This is the subject",
            Body: body
        })
            .then(function (msg) {
                // Success: Email sent
                // alert(message);
                errorMsg.textContent = "Thank you, I will contact you later";
                errorMsg.style.color = "#9ADE7B";
                // Clear input fields
                name.value = "";
                phone.value = "";
                email.value = "";
                message.value = "";
                setTimeout(function (){
                    errorMsg.textContent = "";
                }, 3000);
            })
            .catch(function (error) {
                // Handle error
                errorMsg.textContent = "Server Problem, Try Again";
                errorMsg.style.color = "red";
                // console.error("Error sending email:", error);
                setTimeout(function (){
                    errorMsg.textContent = "";
                }, 3000);
            });
        
    }
}

function sendEmailPhone(){
    var name = document.getElementById("pname");
    var phone = document.getElementById("pphone");
    var email = document.getElementById("pemail");
    var message = document.getElementById("pmessage");
    var errorMsg = document.getElementById('error-message-phone');
    if(name.value === ""){
        name.style.border = "3px solid red";
    } else if(phone.value === ""){
        phone.style.border = "3px solid red";
    } else if(email.value === ""){
        email.style.border = "3px solid red";
    } else if(message.value === ""){
        message.style.border = "3px solid red";
    } else {
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
            Subject: "This is the subject",
            Body: body
        })
            .then(function (msg) {
                // Success: Email sent
                // alert(message);
                errorMsg.textContent = "Thank you, I will contact you later";
                errorMsg.style.color = "#9ADE7B";
                // Clear input fields
                name.value = "";
                phone.value = "";
                email.value = "";
                message.value = "";
                setTimeout(function (){
                    errorMsg.textContent = "";
                }, 3000);
            })
            .catch(function (error) {
                // Handle error
                errorMsg.textContent = "Server Problem, Try Again";
                errorMsg.style.color = "red";
                // console.error("Error sending email:", error);
                setTimeout(function (){
                    errorMsg.textContent = "";
                }, 3000);
            });
        
    }
}