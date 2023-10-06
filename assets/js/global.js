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
   });
 });