function sendEmail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: "Love Proposal",
    }

    emailjs.send('service_lyhluhf', 'template_ei6cfei', params).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
    }
}
