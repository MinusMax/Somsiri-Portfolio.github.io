
emailjs.init("pYX2ysXye-_MmcVVG");  

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  


    emailjs.sendForm("service_k87lqho", "template_fmmsee4", this) 
        .then(function(response) {
            console.log('Success:', response);
            alert("Your message has been sent successfully!");
        }, function(error) {
            console.log('Error:', error);
            alert("Failed to send the message. Please try again later.");
        });
});
