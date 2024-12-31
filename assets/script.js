function sendEmail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: "Love Proposal",
    }

    emailjs.send('service_lyhluhf', 'template_ei6cfei', params)
    }
