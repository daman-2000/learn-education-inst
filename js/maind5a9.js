(function ($) {
  "use strict";
  // Initiate the wowjs
  new WOW().init();

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();



  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
  });



  // Back to top button

  var btn = $('.back-to-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '100');
  });

  // Header carousel
  $(document).ready(function() {
    // Initialize the carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        items: 1,
        dots: true,
        loop: true,
        nav: false, 
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Add accessibility attributes to dots
    function addAccessibilityToDots() {
        // Select all dots
        var dots = $(".header-carousel .owl-dot");

        dots.each(function(index) {
            $(this).attr({  
                "role": "button",   
                'tabindex': '0',              // To indicate it’s clickable
                "aria-label": "Slide " + (index + 1),  // Descriptive label for each dot
                // "aria-pressed": $(this).hasClass("active") ? "true" : "false"
            });
        });
    }

    // Call the function after carousel initialization
    addAccessibilityToDots();

    // Update accessibility attributes on slide change
    $(".header-carousel").on('changed.owl.carousel', function(event) {
        addAccessibilityToDots();
    });
});

  // Header carousel

  $(".announcement-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000, // Specify the autoplay timeout value in milliseconds
    smartSpeed: 1000,
    dots:false,
    items: 2,
    loop: true,
    nav: true,

    responsive: {
      0: {
        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-double-left"></i>',
          '<i class="bi bi-chevron-double-right"></i>'
        ]
      },
      600: {
        items: 1,
        margin: 0,
        smartSpeed: 500,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-double-left"></i>',
          '<i class="bi bi-chevron-double-right"></i>'
        ]
      },
      1000: {
        items: 2,
        margin: 0,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-double-left"></i>',
          '<i class="bi bi-chevron-double-right"></i>'
        ]
      }
    },
    onInitialized: addAccessibilityAttributes, // Call the function when the slider is initialized
    onTranslated: addAccessibilityAttributes   // Call the function when the slider moves
   });

// Function to add the attributes to navigation buttons and dots
function addAccessibilityAttributes() {
  // Add attributes to navigation buttons
  $('.owl-prev, .owl-next').each(function() {
    $(this).attr({
      'role': 'button',
      'tabindex': '0',
    });

    // Add aria-label based on class (for previous or next button)
    if ($(this).hasClass('owl-prev')) {
      $(this).attr('aria-label', 'previous');
    } else if ($(this).hasClass('owl-next')) {
      $(this).attr('aria-label', 'next');
    }
  });
}

  // Header carousel
  $(".latest_updates_carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 2000,
    items: 1,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        dots: true,
        loop: true,
        nav: false,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ]
      },
      600: {
        autoplay: false,
        items: 1,
        dots: true,
        smartSpeed: 500,
        loop: true,
        nav: false,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ]
      },
      1000: {
        autoplay: false,
        items: 1,
        dots: true,
        loop: true,
        nav: false,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ]
      }
    },
    onInitialized: addAccessibilityToDots, // Call function after initialization
    onChanged: addAccessibilityToDots      // Update on slide change
});

// Function to add accessibility attributes to dots
function addAccessibilityToDots(event) {
    // Select all dots in the latest_updates_carousel
    var dots = $(".latest_updates_carousel .owl-dot");

    dots.each(function(index) {
        $(this).attr({
            "role": "button",   
            'tabindex': '0',             
            "aria-label": "Slide " + (index + 1),  // Descriptive label for each dot
            // "aria-selected": $(this).hasClass("active") ? "true" : "false" // Indicate active dot
        });
    });
}

  // Header carousel

  $(".faculty-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    items: 1,
    dots: false,

    loop: true,
    nav: true,

    responsive: {
      0: {
        items: 1,
        margin: 20,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ]
      },
      600: {
        items: 2,
        margin: 20,
        smartSpeed: 500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ]
      },
      1000: {
        items: 4,
        dots: false,
        margin: 20,
        loop: false,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
        ]

      }
    }

  });
  // footer Carousel
  $(".footer-carousel").owlCarousel({
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    smartSpeed: 500,
    items: 1,
    margin: 0,
    dots: true,
    loop: true,
    nav: false,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
    ],
    onInitialized: addAccessibilityAttributes, // Call the function when the slider is initialized
    onTranslated: addAccessibilityAttributes   // Call the function when the slider moves
  });
  
  // Function to add the attributes to navigation buttons and dots
  function addAccessibilityAttributes() {
    // Add attributes to navigation buttons
    $('.owl-prev, .owl-next').each(function() {
      $(this).attr({
        'role': 'button',
        'tabindex': '0',
      });
  
      // Add aria-label based on class (for previous or next button)
      if ($(this).hasClass('owl-prev')) {
        $(this).attr('aria-label', 'previous');
      } else if ($(this).hasClass('owl-next')) {
        $(this).attr('aria-label', 'next');
      }
    });
  
    // Add attributes to dots
    $('.footer-carousel .owl-dot').each(function(index) {
      $(this).attr({
        'role': 'button',
        'aria-label': 'Slide ' + (index + 1),  // Descriptive label for each dot
        // 'aria-selected': $(this).hasClass('active') ? 'true' : 'false', // Indicate active dot
        'tabindex': '0' // Make dots focusable
      });
    });
  }
  

  // Tab 

  $.fn.responsiveTabs = function () {

    return this.each(function () {
      var el = $(this),
        tabs = el.find('dt'),
        content = el.find('dd'),
        placeholder = $('<div class="responsive-tabs-placeholder"></div>').insertAfter(el);

      tabs.on('click', function () {
        var tab = $(this);

        tabs.not(tab).removeClass('active');
        tab.addClass('active');

        placeholder.html(tab.next().html());
      });

      tabs.filter(':first').trigger('click');
    });

  }


  $('.responsive-tabs').responsiveTabs();


  // Read More Toggle

  $(document).ready(function () {
    $(".toggle").click(function () {
      var elem = $(".toggle").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $(".toggle").text("Read Less");
        $(".text").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $(".toggle").text("Read More");
        $(".text").slideUp();
      }
    }); $(".toggle1").click(function () {
      var elem = $(".toggle1").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $(".toggle1").text("Read Less");
        $(".text1").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $(".toggle1").text("Read More");
        $(".text1").slideUp();
      }
    });

    $(".toggle2").click(function () {
      var elem = $(".toggle2").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $(".toggle2").text("Read Less");
        $(".text2").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $(".toggle2").text("Read More");
        $(".text2").slideUp();
      }
    });


    $(".toggle3").click(function () {
      var elem = $(".toggle3").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $(".toggle3").text("Read Less");
        $(".text3").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $(".toggle3").text("Read More");
        $(".text3").slideUp();
      }
    });


    $(".toggle4").click(function () {
      var elem = $(".toggle4").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $(".toggle4").text("Read Less");
        $(".text4").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $(".toggle4").text("Read More");
        $(".text4").slideUp();
      }
    });




  });

  // Load More Button

  $(document).ready(function () {
    $(".accordion-body ul.row li").slice(0, 4).show();
    $("#seeMore").click(function (e) {
      e.preventDefault();
      $(".accordion-body ul.row li:hidden").slice(0, 4).fadeIn("slow");

      if ($(".accordion-body ul.row li:hidden").length == 0) {
        $("#seeMore").fadeOut("slow");
      }
    });
  })


  var n = localStorage.getItem('on_load_counter');

  if (n === null) {
    n = 0;
  }

  n++;

  localStorage.setItem("on_load_counter", n);

  document.getElementById('CounterVisitor').innerHTML = n;



})(jQuery);

