function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var params = {
        name: document.getElementById("name").value,
        contact_number: document.getElementById("contact-number").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        where_did_you_hear: document.querySelector('input[name="where-did-you-hear"]:checked') ? document.querySelector('input[name="where-did-you-hear"]:checked').value : '',
    };

    const serviceID = "service_qfwwcsl";
    const templateID = "AvonStrings";

    emailjs
        .send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("contact-number").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.querySelector('input[name="where-did-you-hear"]:checked').checked = false; // Clear radio button selection
                console.log(res);
                alert("Your message sent successfully. If no reply within 24 hours please check your spam!");
            }
        )
        .catch((err) => {
            console.error(err);
            alert("There was an error sending your message. Please try again later.");
        });
}
