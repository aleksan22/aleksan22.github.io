let asideOpen = document.querySelector('.header__menu-btn');
let aside = document.querySelector('.aside');
let asideClose = document.querySelector('.aside__head-btn');
let body = document.querySelector('body')
let wrapper = document.querySelector('.wrapper')
document.querySelector('aside--close');

asideOpen.addEventListener('click', () => {
    aside.classList.add('aside--close')
    body.classList.add('hidden')
})
asideClose.addEventListener('click', () => {
    aside.classList.remove('aside--close')
    body.classList.remove('hidden')
})

// MODAL

let headerLink = document.querySelector('.header__body-link');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__head-btn')
document.querySelector('active');

headerLink.addEventListener('click', () => {
    modal.classList.add('active')
    body.classList.add('hidden')
});
modalClose.addEventListener('click', () => {
    modal.classList.remove('active')
    body.classList.remove('hidden')
})
modal.addEventListener('click', () => {
    modal.classList.remove('active')
    body.classList.remove('hidden')
})

/*window.addEventListener("resize", function() {
    if (window.innerWidth >= 1200) {
      $('.slider__slick').slick('unslick');
      sliderIsLive = false;
    }
    else {
      if (sliderIsLive) {
        $('.slider__slick').slick();
        sliderIsLive = true;
      }
    }
  });*/
  $(document).ready(function(){
    $('.slider').slick({
      dots: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1200,
            settings: {
            slidesToShow: 2,
        }
        },
        {
          breakpoint: 920,
            settings: {
            slidesToShow: 1,
        }
        }
      ]
      
    });
  });
  