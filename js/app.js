// Navigation Bar Scrool Animation
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var opacity = 1 - (window.scrollY / 150);
    opacity = Math.max(0, opacity);

    if(this.window.screenY > 500){
        opacity = 0;
        header.style.zIndex = 50;
    }else{
        header.classList.toggle('sticky', window.scrollY > 0);
        header.style.zIndex = 30;
    }

    header.style.opacity = opacity;
});