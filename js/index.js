// function scrollValue() {
//     var nav = document.getElementById('nav');
//     var scroll = window.scrollY;
//     if (scroll < 100) {
//         nav.classList.remove('navbar-color');
//     } else {
//         nav.classList.add('scrolled');
//     }
// }

// window.addEventListener('scroll', scrollValue);

// var nav = document.getElementById('a');
// var scroll = window.scrollY;
// if (scroll < 100) {
//     nav.classList.remove('nav-link');
// } else {
//     nav.classList.add('nav-link-scrolled');
// }


// window.addEventListener('scroll', scrollValue);
$(document).ready(function(){
    $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $(".navbar-color").css("background-color", "#f8f8f8");
      } else {
        $(".scrolled").css("background-color", "blue");
      }
    });
  });

