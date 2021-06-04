// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD0mgTYFJaa7s3-sFlx4LW9smpDZV43k8E",
  authDomain: "contactformgengle.firebaseapp.com",
  databaseURL:
    "https://contactformgengle-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contactformgengle",
  storageBucket: "contactformgengle.appspot.com",
  messagingSenderId: "727757173397",
  appId: "1:727757173397:web:7b4f28590d35608fcae19c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);
// Submit form
function submitForm(e) {
  e.preventDefault();

  // get values
  var name = getInputVal("name");
  var surname = getInputVal("surname");
  var company = getInputVal("company");
  var phone = getInputVal("phone");
  var message = getInputVal("message");
  var termsandconditions = getInputVal("termsandconditions");
  // Save message
  saveMessage(name, surname, company, phone, message, termsandconditions);

  // Clear fields
  UI.clearFields();

  // Show thankyou message
  UI.thankyou();
}
// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(
  name,
  surname,
  company,
  phone,
  message,
  termsandconditions
) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    surname: surname,
    company: company,
    phone: phone,
    message: message,
    termsandconditions: termsandconditions,
  });
}
class UI {
  static clearFields() {
    document.querySelector("#name").value = "";
    document.querySelector("#surname").value = "";
    document.querySelector("#company").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#message").value = "";
    document.querySelector("#termsandconditions").value = "";
  }
  static thankyou() {
    const list = document.querySelector("#thankyou");
    const row = document.createElement("p");
    row.innerHTML = `
    <div class="alert">
     <p class="text-danger mt-5"> Grazie, il tuo messaggio è stato recapitato correttamente! </p>
    </div>`;
    list.appendChild(row);

    setTimeout(() => document.querySelector("#thankyou").remove(), 3000);
  }
}

// Aggiungi la classe bg-light alla navbar on scroll

let navbar = document.querySelector("#navbar-example2");
// let navbarCTAScroll = document.querySelector('#navbarCTAScroll')
if (window.innerWidth > 576)
  [
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 20) {
        navbar.classList.add("bg-light", "shadow");
      } else {
        navbar.classList.remove("bg-light", "shadow");
      }
    }),
  ];

// let ul = document.querySelector('#navbar-ul')

// if ( window.innerWidth > 700 ) {

//       ul.classList.add('bg-danger', 'shadow')
//     } else {
//       ul.classList.remove('bg-light', 'shadow')
//     }
