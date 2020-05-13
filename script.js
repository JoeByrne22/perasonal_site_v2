// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling to all links inside a navbar
$("#myNavbar a").on('click', function(event){

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash (#)
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 500, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
});


// $(window).scroll(function() {

//   if ($(window).scrollTop() > 100) {
//       $('.main_h').addClass('sticky');
//   } else {
//       $('.main_h').removeClass('sticky');
//   }
// });



// var controller = new ScrollMagic.Controller();

// 				// build scene
// 				var scene = new ScrollMagic.Scene({
//           offset: 2,
//           triggerHook: 0.5
//         })
//         .setTween(".navbar", {opacity: 1, visibility:"visible"}) 
//         .addIndicators() 
//         .addTo(controller);