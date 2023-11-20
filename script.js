const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        secureToken : "72b7bd20-ac7c-4180-aa94-d548c8358a83",
        To : 'eksudummymail@gmail.com',
        From : "eksudummymail@gmail.com",
        Subject : "REGARDS",
        Body : "Name: ${document.getElementById('name').value} Email: ${document.getElementById('email').value} Regards: ${document.getElementById('message').value}"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})

        // Get the navbar element
        const navbar = document.querySelector('.navbar');

        // Function to handle the scrolling effect
        function handleScroll() {
            if (window.scrollY > 0) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);