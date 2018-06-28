// Slider

$(function(){
    $('.slick-slider').slick();
})


//Burger-menu

document.addEventListener("DOMContentLoaded", function(){
    var burgerMenu = document.querySelectorAll(".slider-composition-burger");
    var composition = document.querySelectorAll(".slider-composition-info");
    
    burgerMenu.forEach(function(item, i, burgerMenu) {   
        item.addEventListener('click', function() {
            composition.forEach(function(item, i, composition){
                item.classList.toggle('active');
            });          
        });
    });
});

// Team-list section 4


  
document.addEventListener("DOMContentLoaded", function(){
    var teamList = document.getElementsByClassName("team-content-list-item");
    var active = document.getElementsByClassName('active');
  
    Array.from(teamList).forEach(function(item, i, teamList) {
      item.addEventListener('click', function(e) {
        var currentItem = this;       
          if (active.length > 0 && active[0] !== currentItem) {
          active[0].classList.remove('active'); 
        }
        currentItem.classList.add('active');      
      });
    });
  });
// Portfolio section 4

// document.addEventListener("DOMContentLoaded", function(){
//   var foto = document.querySelectorAll(".reviews-content-person");
//   var cross = document.querySelectorAll(".reviews-content-person-info-name-img");
//   var modal = document.querySelector(".reviews-content-person-info")
//   var bg = document.querySelector('.reviews-bg');

//   [].forEach.call(foto, cross, function(item) {
//     item.addEventListener('click', function(e) {
//       event.preventDefault();  
//       console.log(e.target)
//       // modal.classList.toggle('active-foto');      
//     });  
    
//   });
// });

// Menu-list section 5

document.addEventListener("DOMContentLoaded", function(){
    var menuList = document.getElementsByClassName("menu-content-list-item");
    var selected = document.getElementsByClassName('selected');
  
    Array.from(menuList).forEach(function(item, i, menuList) {
      item.addEventListener('click', function(e) {
        var selectedItem = this;       
          if (selected.length > 0 && selected[0] !== selectedItem) {
            selected[0].classList.remove('selected'); 
        }
        selectedItem.classList.add('selected');      
      });
    });
});



