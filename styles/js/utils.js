
     $(document).ready(function(){
     
     $('.items').slick({
     dots: true,
     infinite: true,
     speed: 800,
     autoplay: true,
     autoplaySpeed: 2000,
     slidesToShow: 2,
     slidesToScroll: 2,
     responsive: [
     {
     breakpoint: 1024,
     settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     dots: true
     }
     },
     {
     breakpoint: 600,
     settings: {
     slidesToShow: 1,
     slidesToScroll: 1
     }
     },
     {
     breakpoint: 480,
     settings: {
     slidesToShow: 1,
     slidesToScroll: 1
     }
     }
     
     ]
     });
     });

     //Get the button
     var mybutton = document.getElementById("backToTop");
     
     // When the user scrolls down 20px from the top of the document, show the button
     window.onscroll = function() {scrollFunction()};
     
     function scrollFunction() {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
       } else {
         mybutton.style.display = "none";
       }
     }
     
     // When the user clicks on the button, scroll to the top of the document
     function topFunction() {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
     }
