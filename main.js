// approach-1
// // Get the modal
// var modal = document.getElementById("contactForm");

// // Get the button that opens the modal
// var btn = document.getElementById("contactButton");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// function sendMessage() {
//   (function () {
//     emailjs.init("kZlBF-NuT1L5l5auq"); // Account Public key
//   })();

//   var serviceID = "service_lhgrzir"; // Email Service ID
//   var templateID = "template_zece7o8"; // Email template ID

//   var params = {
//     sendername: document.querySelector("#name").value,
//     senderemail: document.querySelector("#email").value,
//     message: document.querySelector("#message").value,
//   };

//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       alert(
//         "Thank you, " + params["sendername"] + "! Your message has  been sent."
//       );
//     })
//     .catch("failed");
// }

// approach -2

// // Get the modal
// var modal = document.getElementById("contactForm");

// // Get the button that opens the modal
// var btn = document.getElementById("contactButton");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// document.addEventListener("DOMContentLoaded", function () {
//   // Initialize EmailJS with your user ID
//   emailjs.init("kZlBF-NuT1L5l5auq"); // Replace with your EmailJS user ID

//   // Handle form submission
//   var form = document.querySelector("form");
//   form.onsubmit = function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Collect form data
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     // Send email using EmailJS
//     emailjs
//       .send("service_lhgrzir", "template_zece7o8", {
//         from_name: name,
//         from_email: email,
//         message: message,
//       })
//       .then(
//         function (response) {
//           alert("Email sent successfully!");
//           modal.style.display = "none"; // Close the modal on success
//         },
//         function (error) {
//           alert("Failed to send email. Please try again.");
//         }
//       );
//   };
// });

// approach-3

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("contactForm");
  var btn = document.getElementById("contactButton");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Initialize EmailJS with your user ID
  emailjs.init("7JcXxBokdb4pZsNDG");

  // Handle form submission
  var form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Send email using EmailJS
    emailjs
      .send("service_lhgrzir", "template_zece7o8", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        function (response) {
          alert("Email sent successfully!");
          modal.style.display = "none"; // Close the modal on success
        },
        function (error) {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again.");
        }
      );
  };
});
