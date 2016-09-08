var modal = document.getElementById("popup-bg");
var modal2 = document.getElementById("popup-bg-brief");
var modal3 = document.getElementById("popup-bg-start");
var modal4 = document.getElementById("popup-bg-callback");
var modal5 = document.getElementById("popup-bg-thanks");
var btn = document.getElementById("all");
var btn2 = document.getElementById("download");
var btn3 = document.getElementById("startup");
var btn4 = document.getElementById("business");
var btn5 = document.getElementById("number-one");
var btn6 = document.getElementById("callback-1");
var btn7 = document.getElementById("callback-2");
var btn8 = document.getElementById("get");
var btn9 = document.getElementById("order");
var span = document.getElementsByClassName("close")[0];
//popup-1
btn.onclick = function () {
    "use strict";
    modal.style.display = "block";
};
//popup-2
btn2.onclick = function () {
    "use strict";
    modal2.style.display = "block";
};
//popup-3
btn3.onclick = function () {
    "use strict";
    modal3.style.display = "block";
};
btn4.onclick = function () {
    "use strict";
    modal3.style.display = "block";
};
btn5.onclick = function () {
    "use strict";
    modal3.style.display = "block";
};
//popup-4
btn6.onclick = function () {
    "use strict";
    modal4.style.display = "block";
};
btn7.onclick = function () {
    "use strict";
    modal4.style.display = "block";
};
btn9.onclick = function () {
    "use strict";
    modal3.style.display = "block";
};
//popup-5
//btn8.onclick = function () {
//    "use strict";
//    modal5.style.display = "block";
//};
$('form').on('submit', function () {
    var validation = true;
    if (validation) {
        // валидация успешна, данные пойдут на сервер
        return true;
        console.log("tru");
    }
    else {
        // валидация не пройдена, надо вывести ошибки и не отправлять форму
        return false;
        console.log("false");
    }
});
//close
window.onclick = function (event) {
    "use strict";
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    else if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == modal3) {
        modal3.style.display = "none";
    }
    else if (event.target == modal4) {
        modal4.style.display = "none";
    }
    else if (event.target == modal5) {
        modal5.style.display = "none";
    }
    else if (event.target == span) {
        modal5.style.display = "none";
    }
};
//slider
$(function () {
    var slider = $('.slider')
        , sliderContent = slider.html(), // Содержимое слайдера
        slideWidth = $('.slider-box').outerWidth(), // Ширина слайдера
        slideCount = $('.slider img').length, // Количество слайдов
        prev = $('.slider-box .prev'), // Кнопка "назад"
        next = $('.slider-box .next'), // Кнопка "вперед"
        sliderInterval = 3300, // Интервал смены слайдов
        animateTime = 1000, // Время смены слайдов
        course = 1, // Направление движения слайдера (1 или -1)
        margin = -slideWidth; // Первоначальное смещение слайдов
    $('.slider img:last').clone().prependTo('.slider'); // Копия последнего слайда помещается в начало.
    $('.slider img').eq(1).clone().appendTo('.slider'); // Копия первого слайда помещается в конец.  
    $('.slider').css('margin-left', -slideWidth); // Контейнер .slider сдвигается влево на ширину одного слайда.
    function nextSlide() { // Запускается функция animation(), выполняющая смену слайдов.
        interval = window.setInterval(animate, sliderInterval);
    }

    function animate() {
        if (margin == -slideCount * slideWidth - slideWidth) { // Если слайдер дошел до конца
            slider.css({
                'marginLeft': -slideWidth
            }); // то блок .slider возвращается в начальное положение
            margin = -slideWidth * 2;
        }
        else if (margin == 0 && course == -1) { // Если слайдер находится в начале и нажата кнопка "назад"
            slider.css({
                'marginLeft': -slideWidth * slideCount
            }); // то блок .slider перемещается в конечное положение
            margin = -slideWidth * slideCount + slideWidth;
        }
        else { // Если условия выше не сработали,
            margin = margin - slideWidth * (course); // значение margin устанавливается для показа следующего слайда
        }
        slider.animate({
            'marginLeft': margin
        }, animateTime); // Блок .slider смещается влево на 1 слайд.
    }

    function sliderStop() { // Функция преостанавливающая работу слайдера      
        window.clearInterval(interval);
    }
    prev.click(function () { // Нажата кнопка "назад"
        if (slider.is(':animated')) {
            return false;
        } // Если не происходит анимация
        var course2 = course; // Временная переменная для хранения значения course
        course = -1; // Устанавливается направление слайдера справа налево
        animate(); // Вызов функции animate()
        course = course2; // Переменная course принимает первоначальное значение
    });
    next.click(function () { // Нажата кнопка "назад"
        if (slider.is(':animated')) {
            return false;
        } // Если не происходит анимация
        var course2 = course; // Временная переменная для хранения значения course
        course = 1; // Устанавливается направление слайдера справа налево
        animate(); // Вызов функции animate()
        course = course2; // Переменная course принимает первоначальное значение
    });
    slider.add(next).add(prev).hover(function () { // Если курсор мыши в пределах слайдера
        sliderStop(); // Вызывается функция sliderStop() для приостановки работы слайдера
    }, nextSlide); // Когда курсор уходит со слайдера, анимация возобновляется.
    nextSlide(); // Вызов функции nextSlide()
});
//gallery-fancyBox
$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: 'none'
        , closeEffect: 'none'
        , helpers: {
            title: null
        }
    });
});
jQuery(function ($) {
    $("#date").mask("99/99/9999", {
        placeholder: "mm/dd/yyyy"
    });
    $("#phone").mask("(999) 999-9999");
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");
});