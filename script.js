const form = document.querySelector('.form')

function sendMessage() {
    (function () {
        emailjs.init("dBjEG7n6EREZQdyqs"); // Account Public key
    })();

    var serviceID = "service_ix0x5zp"; // Email Service ID
    var templateID = "template_xmbnw1n"; // Email Template ID

    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert('Thank you, ' + params['sendername'] + '| Your message has been sent.');
    })
    .catch();
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    }

    item.addEventListener("keyup", () => {
        if (item.value != "") {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
        else {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})