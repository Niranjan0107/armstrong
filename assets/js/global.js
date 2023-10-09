$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('.top').addClass('in');
    } else {
       $('.top').removeClass('in');
    }
});


var lightboxDescription = GLightbox({
   selector: 'glightbox'
 });
 
 
 function call(id) {
   const items = Array.from(document.getElementsByClassName("filter"));
   items.map(function (item, index) {
     console.log(item);
     if (id === "all") {
       item.classList.remove('d-none');
       item.classList.add('fadeIn','glightbox');
       setTimeout(clean,500);
     } else {
       const check = items[index].classList.contains(id);
       console.log(check);
 
       if (check) {
         item.classList.remove('d-none');
         item.classList.add('fadeIn','glightbox');
       } else {
         item.classList.add('d-none');
         item.classList.remove('fadeIn','glightbox');
       }
     }
   })
 }
 
 function clean() {
   const items = Array.from(document.getElementsByClassName("filter"));
   items.map(function (item, index) {
     item.classList.remove('fadeIn');
   })
 }
 



 $().ready(function(){
   $('.slick-carousel').slick({
     arrows: false,
     centerPadding: "0px",
     dots: false,
     speed: 1000,
     autoplay: true,
     autoplaySpeed: 1500,
     slidesToShow: 2,
     infinite: true,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
     
   });
 });


 $().ready(function(){
   $('.slick-carousel-testimonials').slick({
     arrows: false,
     centerPadding: "0px",
     dots: true,
     speed: 1000,
     autoplay: true,
     autoplaySpeed: 3500,
     slidesToShow: 3,
     infinite: true,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
   });
 });


 $(".mbl-search-box").click(function(){
   $(".mbl-search-form").toggleClass("active");
 });