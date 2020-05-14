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




        var tween1 = new TimelineMax()
        .to(".mouse", 1, {opacity: "0"})
        .to(".first_name", 1, {left: "-=300", opacity: "0.8", visibility: "visible" })
        .to(".last_name", 1, {right: "-=300", opacity: "0.8", visibility: "visible" })
        .to(".profession", 1, {left: "-=300", opacity: "0.8", visibility: "visible" })
        .to(".navbar", 1, {opacity: "1", visibility: "visible"}, "+=9.0")
        .to(".bcg", 8, {opacity: "0.1"}, "-=9.0")
        


        var controller = new ScrollMagic.Controller();

        // build scene
        
				var scene = new ScrollMagic.Scene({
          triggerHook: 0.3,
          duration:'90%'
        })

        .setPin(".bcg")
        .setTween(tween1) 
        // .addIndicators() 
        .addTo(controller);







        
