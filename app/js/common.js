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

// Map


// var map;
// function initMap() {

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: 59.901126, lng: 30.294996 },
//     zoom: 10,
//     styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }]
//   });

//   var locations = [
//     {
//       lat: 59.913711,
//       lng: 30.511732
//     },
//     {
//       lat: 59.979842,
//       lng: 30.352959
//     },
//     {
//       lat: 59.873044,
//       lng: 30.328798
//     },
//     {
//       lat: 59.959045,
//       lng: 30.306270
//     }
//   ];

//   for (i = 0; i < locations.length; i++) {
//     var marker = new google.maps.Marker({
//       position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
//       map: map,
//     });
//   }
// }
