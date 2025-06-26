// nav bar variables
const icons = document.querySelectorAll('.icon');
const navBar = document.querySelector('.nav-bar');

// // Navigation Bar Scrool Animation
// window.addEventListener('scroll', function() {
//     var header = this.document.querySelector('header');
//     var nav = this.document.getElementsByClassName("nav-icon-5");
//     var opacity = 1 - (window.scrollY / 150);
//     opacity = Math.max(0, opacity);

//     if(this.window.screenY > 500){
//         opacity = 0;
//         header.style.zIndex = 50;
//         nav.style.zIndex = 50;
//     }else{
//         header.classList.toggle('sticky', window.scrollY > 0);
//         nav.classList.toggle('sticky', window.scrollY > 0);
//         header.style.zIndex = 30;
//         nav.style.zIndex = 30;
//     }

//     header.style.opacity = opacity;
//     nav.style.opacity = opacity;
// });

// nav bar animation
icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
      icon.classList.toggle("open");
      navBar.classList.toggle("is-active");
    });
  });