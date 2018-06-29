// // Slider

$(function(){
    $('.slick-slider').slick({
      prevArrow: '<button class="slick-prev"><img src="../img/arrow_left.png" alt="#" /></button>',
      nextArrow: '<button class="slick-next"><img src="../img/arrow_right.png" alt="#" /></button>',
    });
});


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

// Dots

jQuery(document).ready(function ($) {
  redrawDotNav();
  $(window).bind('scroll', function (e) { redrawDotNav(); });
  $('.dots-circle_1').click(function () { $('html, body').animate({ scrollTop: 0 }, 1000); return false; });
  $('.dots-circle_2').click(function () { $('html, body').animate({ scrollTop: $('#dots2').offset().top }, 1000); return false; });
  $('.dots-circle_3').click(function () { $('html, body').animate({ scrollTop: $('#dots3').offset().top }, 1000); return false; });
  $('.dots-circle_4').click(function () { $('html, body').animate({ scrollTop: $('#dots4').offset().top }, 1000); return false; });
  $('.dots-circle_5').click(function () { $('html, body').animate({ scrollTop: $('#dots5').offset().top }, 1000); return false; });
  $('.dots-circle_6').click(function () { $('html, body').animate({ scrollTop: $('#dots6').offset().top }, 1000); return false; });
  $('.dots-circle_7').click(function () { $('html, body').animate({ scrollTop: $('#dots7').offset().top }, 1000); return false; });
  $('.dots-circle_8').click(function () { $('html, body').animate({ scrollTop: $('#map').offset().top }, 1000); return false; });

  function redrawDotNav() {
    var section1Top = 0;
    var section2Top = $('#dots2').offset().top - (($('#dots3').offset().top - $('#dots2').offset().top) / 2);
    var section3Top = $('#dots3').offset().top - (($('#dots4').offset().top - $('#dots3').offset().top) / 2);
    var section4Top = $('#dots4').offset().top - (($('#dots5').offset().top - $('#dots4').offset().top) / 2);
    var section5Top = $('#dots5').offset().top - (($('#dots6').offset().top - $('#dots5').offset().top) / 2);
    var section6Top = $('#dots6').offset().top - (($('#dots7').offset().top - $('#dots6').offset().top) / 2);
    var section7Top = $('#dots7').offset().top - (($('#map').offset().top - $('#dots7').offset().top) / 2);
    var section8Top = $('#map').offset().top - (($(document).height() - $('#map').offset().top) / 2);
    $('#dots a').removeClass('active-dot');
    if ($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top) {
      $('#dots a.dots-circle_1').addClass('active-dot');
    } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top) {
      $('#dots .dots-circle_2').addClass('active-dot');
    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top) {
      $('#dots .dots-circle_3').addClass('active-dot');
    } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top) {
      $('#dots .dots-circle_4').addClass('active-dot');
    } else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top) {
      $('#dots .dots-circle_5').addClass('active-dot');
    } else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top) {
      $('#dots .dots-circle_6').addClass('active-dot');
    } else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top) {
      $('#dots .dots-circle_7').addClass('active-dot');
    } else if ($(document).scrollTop() >= section8Top) {
      $('#dots .dots-circle_8').addClass('active-dot');
    }
  }
});

