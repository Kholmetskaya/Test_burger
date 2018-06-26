// Slider

$(function(){
    $('.slick-slider').slick();
})


//Burger-menu

document.addEventListener("DOMContentLoaded", function(){
    var burgerMenu = document.querySelector(".slider-composition-burger");
    var composition = document.querySelector(".slider-composition-info");
   
    burgerMenu.addEventListener('click', function() {
        composition.classList.toggle('active');
      });
});
  
  

