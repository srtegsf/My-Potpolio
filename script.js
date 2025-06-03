// menu icon 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// active-tab

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


// sticky navbar
let header = document.querySelector('.header');
header.classList.toggle('sticky' , window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

// swiper js 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   contact form 

const scriptURL = 'https://script.google.com/macros/s/AKfycbxJGR1gVn3nhszlTm2KtDdR7DQt9HfqjEz2UcuD4ek5s0N0zqOMyhM6HvnUsn2ONA0/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML="Message Submitted Successfully"
      setTimeout(function(){
          msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// dark mode 

let darkIcon=document.querySelector('#dark-icon');

darkIcon.onclick = () => {
  darkIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}