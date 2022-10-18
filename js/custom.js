 $('.banner-carousel').owlCarousel({ 
    loop: true, 
    nav: false,
    items:1,
    dots:true,
    animateIn: 'fadeIn', 
    animateOut: 'fadeOut',
    mouseDrag:false,
    touchDrag:false,
    pullDrag:false,
});

$('.testimonial-carousel').owlCarousel({ 
  loop: true, 
  nav: true,
  dots:false,
  margin:30,
  nav:true,
  navText : ["<img src='./images/next.svg'>","<img src='./images/next.svg'>"],
  responsiveClass:true,
    responsive:{
        0:{
            items:1, 
        },
        600:{
            items:3, 
        },
        1000:{
            items:4, 
        }
    }
});