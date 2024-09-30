//-----------------------------------HAMBURGER--------------------------------------//
  function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function closesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}




//-----------------------------------DESIGN--------------------------------------//
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0])
})

prev.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1])
})








//-----------------------------------CONTACT--------------------------------------//
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



function sendMail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs.send("service_y0dhmt9", "template_m2w19cd", {
      name: name,
      email: email,
      message: message
  })
  .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
  }, (error) => {
      console.log("FAILED...", error);
      alert("Failed to send message.");
  });
}



