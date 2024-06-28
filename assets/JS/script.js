

var typed = new Typed("#element", {
  strings: [
    "Web/App Developer",
    "MERN Stack Developer",
    "Java Developer",
    "Programmer...",
  ],

  typeSpeed: 50,
  backSpeed: 15,
  backDelay: 500,
  loop: true,
});

function myalert(){
    Toastify({
        text: "This project is still in development!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "#ff914d"
        },
        onClick: function(){} 
      }).showToast();
}

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.leftSection, .sub-title, .sub-title1, .col2 h1, .SkillBox', {origin: 'top'});
ScrollReveal().reveal('.rightSection, .contact-Right form, .work-list, .col2, .q2', {origin: 'bottom'});
ScrollReveal().reveal('.col1 img,  .contact-left, .q1, .QUAL_1', {origin: 'left',delay:300});
ScrollReveal().reveal('.q3', {origin: 'right',delay:300});

    
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}



document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: name,
          email: email,
          message: message
      })
  })
  .then(response => response.text())
  .then(result => {
      alert(result);
  })
  .catch(error => {
      console.error('Error:', error);
  });
});