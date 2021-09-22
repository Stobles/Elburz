const innerW = window.innerWidth
const innovate = document.querySelector('.innovate')
const innovateH = innovate.clientHeight
if(innerW > 992){
    window.addEventListener('load', animInnovate())
    window.addEventListener('resize', animInnovate)
    window.addEventListener('scroll', animInnovate)
}

function animInnovate() {
        if(!(innovateH - window.scrollY/2 + 100 < 0)){
            innovate.style.height = innovateH - window.scrollY/1.6 + 100 + 'px'
        }else{
            innovate.style.height = '0px'
        }
}

window.addEventListener('resize',()=>{
    if(window.innerWidth > 480){
        const paddingTop = parseInt(window.getComputedStyle(headerWrapper,null).getPropertyValue('padding-top'),10);
        const paddingBottom = parseInt(window.getComputedStyle(headerWrapper,null).getPropertyValue('padding-bottom'),10);
        const paddingTopHeight = headerWrapper.clientHeight - paddingTop - paddingBottom;
        burgerInner.style.paddingTop = paddingTopHeight + 'px'
    
        window.addEventListener('resize', ()=>{
            const paddingTopHeight = headerWrapper.clientHeight - paddingTop - paddingBottom;
            burgerInner.style.paddingTop = paddingTopHeight + 'px'
        })
    }
})

window.addEventListener('load',()=>{
    if(window.innerWidth > 480){
        const paddingTop = parseInt(window.getComputedStyle(headerWrapper,null).getPropertyValue('padding-top'),10);
        const paddingBottom = parseInt(window.getComputedStyle(headerWrapper,null).getPropertyValue('padding-bottom'),10);
        const paddingTopHeight = headerWrapper.clientHeight - paddingTop - paddingBottom;
        burgerInner.style.paddingTop = paddingTopHeight + 'px'
    
        window.addEventListener('resize', ()=>{
            const paddingTopHeight = headerWrapper.clientHeight - paddingTop - paddingBottom;
            burgerInner.style.paddingTop = paddingTopHeight + 'px'
        })
    }
})

const headerWrapper = document.querySelector('.header__wrapper')
const burger = document.querySelector('.header__burger')
const burgerInner = document.querySelector('.header__burger--menu--inner')

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('header__burger--btn') || e.target.closest('.header__burger--btn')){
        burger.classList.toggle('active')
    }

    if(!(e.target.classList.contains('header__burger--btn') || e.target.closest('.header__burger--btn') || e.target.closest('.header__burger'))){
        burger.classList.remove('active')
    }
})
  
// Скрипт анимации 

const animItems = document.querySelectorAll('.anim__items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (var i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = (window.innerHeight - window.innerHeight / animStart);

            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active')
            }
            else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('acitve');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

    }

    setTimeout(animOnScroll, 400);
}

// Анимация Счетчика //

const endNumber = document.querySelector('#end-number')
const time = 2000;
const step = 1;
var outNumOneTime = false

window.addEventListener('scroll', ()=>{
    if(document.querySelector('.achievements__info--block--minor').classList.contains('active')){
        if(!outNumOneTime){
            outNum(endNumber.innerHTML, '#number')
        }
    }
})

function outNum(num, elem) {
    let e = document.querySelector(elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if(n == num) {
            clearInterval(interval);
        }
        e.innerHTML = n;
    },t);
    outNumOneTime = true
};

// Анимация текста в главном блоке //

document.addEventListener("DOMContentLoaded", () => setTimeout(function(){
    var mainSubtitle = document.querySelector('.main__info--subtitle');
        var mainTitle = document.querySelector('.main__info--title');
        var mainTitleMobile = document.querySelector('.main__logo--title');
        mainSubtitle.innerHTML = mainSubtitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        mainTitle.innerHTML = mainTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        mainTitleMobile.innerHTML = mainTitleMobile.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
        .add({
            targets: '.main__info--title .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 70*i
        }).add({
            targets: '.main__info--subtitle .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 700 + 30 * i
        })

        if(window.innerWidth < 680){
            anime.timeline({loop: false})
            .add({
                targets: '.main__logo--title .letter',
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 2000,
                delay: (el, i) => 70*i
            }).add({
                targets: '.main__info--subtitle .letter',
                translateX: [40,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 2000,
                delay: (el, i) => 700 + 30 * i
            });
        }
}, 1000));  

// Подключение Скриптов на мобильном устройстве //

var oneTime = false

window.addEventListener('resize', ()=>{
    if (window.innerWidth < 767 && !oneTime) {
        var scriptBundle = document.createElement('script');
        scriptBundle.src = 'js/swiper-bundle.js';
        document.head.appendChild(scriptBundle);
        var scriptSwiper = document.createElement('script');
        scriptSwiper.src = 'js/swiper.js';
        document.head.appendChild(scriptSwiper);
        console.log(oneTime)
        oneTime = true
    }
})

window.addEventListener('load', ()=>{
    if (window.innerWidth < 767) {
        var scriptBundle = document.createElement('script');
        scriptBundle.src = 'js/swiper-bundle.js';
        document.head.appendChild(scriptBundle);
        setTimeout(()=>{
            var scriptSwiper = document.createElement('script');
            scriptSwiper.src = 'js/swiper.js';
            document.head.appendChild(scriptSwiper);
        },100)
        oneTime = true
    }
})

// Preloader //
var preloaderText = document.querySelector('.preloader__inner h2')

preloaderText.innerHTML = preloaderText.textContent.replace(/\S/g, "<span class='char'>$&</span>");

document.addEventListener("DOMContentLoaded", () => setTimeout(function(){
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
    }, 500)
}, 1000));

// Изменение цвета burger //
const burgerBodySpan = document.querySelectorAll('.header__burger--body span');
const burgerName = document.querySelector('.header__burger--name');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > window.innerHeight + document.querySelector('.innovate').clientHeight){
        burgerBodySpan.forEach(span => {
            span.style.backgroundColor = '#000000';
        });
        burgerName.style.color = '#000000';
    }

    if(!(window.scrollY > window.innerHeight + document.querySelector('.innovate').clientHeight)){
        burgerBodySpan.forEach(span => {
            span.style.backgroundColor = '#fff'
        });
        burgerName.style.color = '#fff';
    }
})


