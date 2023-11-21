document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
  
    let currentIndex = 0;
  
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    function showSlide(index) {
      currentIndex = index;
      updateSlider();
    }
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });
  });
  

const form = document.querySelector('.form')

function sendMessage() {
    (function () {
        emailjs.init("dBjEG7n6EREZQdyqs"); // Account Public key
    })();

    var serviceID = "service_ix0x5zp"; // Email Service ID
    var templateID = "template_ak4raf8"; // Email Template ID

    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
    })
    .catch();
    form.reset();
}

function clearForm(event) {
    let 
}

// function checkInputs() {
//     const items = document.querySelectorAll(".item");

//     for (const item of items) {
//         if (item.value == "") {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }
//     }

//     item.addEventListener("keyup", () => {
//         if (item.value != "") {
//             item.classList.remove("error");
//             item.parentElement.classList.remove("error");
//         }
//         else {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }
//     })
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkInputs();
// })