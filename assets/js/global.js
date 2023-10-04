$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('.top').addClass('in');
    } else {
       $('.top').removeClass('in');
    }
});