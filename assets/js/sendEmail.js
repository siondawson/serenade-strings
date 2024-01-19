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
                document.getElementById("contact-form").innerHTML = `
                    <h2>Thankyou! Message Sent</h2>
                    <p>Your message sent successfully. If no reply within 24 hours, please check your spam!</p>
                    <a href="index.html" class="btn btn-primary">Home Page</a>
                `;
                console.log(res);
            }
        )
        .catch((err) => {
            console.error(err);
            document.getElementById("contact-form").innerHTML = `
                <h2>Error</h2>
                <p>There was an error sending your message. Please try again later.</p>
            `;
        });
}
