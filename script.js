const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "eksudummymail@gmail.com",
        Password : "5F3087D06C99EF353F30CDB4907AFCD83A54",
        To : 'eksudummymail@gmail.com',
        From : "eksudummymail@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})