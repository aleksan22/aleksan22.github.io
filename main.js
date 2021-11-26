/*let x = prompt('Какой Вам нужен сайт? Варианты: 0 - визитка, 1 - лендинг');
let y = prompt('Нужна ли Вам адаптивная версия Вашего сайта? Варианты: 0 - да, 1 - нет');

let sale = ["Стоимость заказа: 1000р", "Стоимость заказа: 1500р", "Стоимость заказа: 2000р"];

if(x == 0 && y == 0){
        alert(sale[1])
    }
    else if(x == 0 && y == 1){
        alert(sale[0])
    }
    else if(x == 1 && y == 0){
        alert(sale[2])
    }
    else if(x == 1 && y == 1){
        alert(sale[1])
    }
    else{
        alert('Обновите страницу и выберите необходимые варианты ответов!')
    }
*/

  $('a[href^="#"]').click(function(){
    let elClick = $(this).attr("href");
    $('body').animate({scrollTop: $(elClick).position().top + $('body').scrollTop()}, 1500)
    
    return false;
  });  
  
  $(document).ready(function(){
    $('.slick__slider').slick({
        arrows:true, // показать стрелки
        dots: true
    })
  });

  $(document).ready(function(){
    $('.slick').slick({
        dots: true,
        prevArrow:'<img src="img/left.png" class="slick-prev" width="25px" height="25px">',
        nextArrow:'<img src="img/right.png" class="slick-next" width="25px" height="25px">'
    })
  });

let type = $('.type');
let design = $('.design');
let adapt = $('.adapt');

let button = $('.result__btn'),
    more = $('#more').val(),
    flexible = $('#flexible').val(),
    adaptive = $('#adaptive').val();
let y;
let x;
let z;
let numberX;
let numberY;
let numberZ;
let result;

type.click(function(){
  x = $(this).val();
  numberX = +x;
});

design.click(function(){
  y = $(this).val()
  numberY = +y
});

adapt.click(function(){
  z = $(this).val()
  numberZ = +z
});

button.click(function(){
  result = numberX + numberY + numberZ;
})

// MODAL ONE
$(document).ready(function(){
let modal = $('.modal__window');
$('modal__window--active');
let modalClose = $('.modal__window-btn');



setTimeout(function (){
  modal.addClass('modal__window--active');
}, 4000);
modalClose.click(function(){
  modal.removeClass('modal__window--active')
})
})


// MODAL TWO

let openBtn = $('.result__btn');
let okay = $('.window__bottom-btn');
let closeBtn = $('.window__btn');
$('window--active');
let windows = $('.window')

openBtn.click(function(){
  windows.addClass(' window--active')
  if (result == NaN){
    $('.window__text-one').style.display = 'none';
    $('.window__text-two').text('Обновите страницу и выберите требования к заказу ')
  } else{
    $('.window__text-one').text('Стоимость Вашего заказа: '+ result)
  }
  
})
closeBtn.click(function(){
  windows.removeClass('window--active')
})

// ANIMATE
// const statistic = (root) => {
//   document.querySelector('animate');
//   let activeAnimate = ('.statistic__item')
//   statistic(document.querySelector('.statistic'))
//   const options = { threshold: 0.3 }
//   const observer = new IntersectionObserver(callback, options)
//   observer.observe(s)
//   const callback = (entries) => {
//       activeAnimate.classList.add('animate')
//   }
//   new IntersectionObserver((entries) => {
//     options
//   })
// }

// let animate = document.querySelector('.statistic__item');
// let target = document.querySelector('.statistic__inner');

window.onload = () => {
  observer();
  
}
document.querySelector('animate');
  let animate = document.querySelector('.statistic__item')
function observer() {
  // устанавливаем настройки
  const options = {
    // родитель целевого элемента - область просмотра, не конкретный DOM элемент
    root: null,
    // без отступов
    rootMargin: '5px',
    // процент пересечения
    threshold: 0.5
  }

  // создаем наблюдатель
  const observer = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach(entry => {
      // если элемент является наблюдаемым
      if (entry.isIntersecting) {
        const tagTarget = entry.target;

        console.log('Наблюдатель работает');
        
        let array = document.querySelectorAll('.statistic__card').forEach(function(elem){
          elem.classList.add('animate')
          
        })
      
          // animate.classList.add('animate')
        
        
        // прекращаем наблюдение
        // observer.unobserve(tagTarget)
      }
    })
  }, options)
  
  // следим за всеми элементами с классом 'statistic__item' на странице
  const arr = document.querySelectorAll('.statistic__item')
  arr.forEach(i => {
    observer.observe(i)
  })
}