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
  alert(result)
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