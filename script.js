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



        var tween = new TimelineMax()
        .to(".first_name", 1, {left: "-=200"})
        .to(".last_name", 1, {right: "-=200"})
        .to(".profession", 1, {left: "-=200"});


        var controller = new ScrollMagic.Controller();

        // build scene
        
				var scene = new ScrollMagic.Scene({
          offset: 2,
          triggerHook: 0.5
        })

        .setPin("#section1")
        .setTween(tween) 
        .addIndicators() 
        .addTo(controller);




        // var scrollMagicController = new ScrollMagic();

        // // Create Animation for 0.5s
        // var tween = TweenMax.to('.navbar', 0.5, {
        //     backgroundColor: 'rgb(255, 39, 46)',
        //     scale: 7,
        //     rotation: 360
        // });
    
        // // Create the Scene and trigger when visible with ScrollMagic
        // var scene1 = new ScrollMagic.Scene({
        //     triggerElement: '#section1',
        //     offset: 150 /* offset the trigger 150px below #scene's top */
        // })
        // .setTween(tween)
        // .addTo(scrollMagicController);
    
        // // Add debug indicators fixed on right side
        // scene1.addIndicators();

        