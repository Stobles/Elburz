const headerLogo = document.querySelector('.header__logo')
window.addEventListener('load', ()=>{
    const widthOfWindow = window.innerWidth
    if(widthOfWindow < 992){
        headerLogo.classList.remove('ibg')
    }
    else{
        headerLogo.classList.add('ibg')
    }
})
window.addEventListener('resize', ()=>{
    const widthOfWindow = window.innerWidth
    if(widthOfWindow < 992){
        headerLogo.classList.remove('ibg')
    }
    else{
        headerLogo.classList.add('ibg')
    }
})

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

// GSAP //
gsap.registerPlugin(ScrollTrigger)

const instagramH = document.querySelector('.footer__links--item--transform').clientHeight

    gsap.to(".main__info--title", {
        scrollTrigger: {
            trigger: ".main__info--title",
        },
        x: 0,
        opacity: 1,
        duration: 1,
    })

    gsap.to(".main__info--subtitle", {
        scrollTrigger: {
            trigger: ".main__info--subtitle",
        },
        y: 0,
        opacity: 1,
        duration: 1,
    })

    gsap.to(".main__logo--body--mountain", {
        scrollTrigger: {
            trigger: ".main__logo--body--mountain",
        },
        opacity: 1,
        duration: 1,
    })

    gsap.to(".featured__body--item--size-left", {
        scrollTrigger: {
            trigger: ".featured__body--item--size-left",
            start: '-1500',
        },
        y: 0,
        opacity: 1,
        duration: 1,
    })

    gsap.to(".featured__body--item--size-right", {
        scrollTrigger: {
            trigger: ".featured__body--item--size-right",
            start: '-1500',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        delay: .4
    })

    gsap.to(".achievements__info--title", {
        scrollTrigger: {
            trigger: ".achievements__info--title",
            start: '-1600'
        },
        x: 0,
        opacity: 1,
        duration: 1,
    })

    gsap.to(".achievements__info--block--main", {
        scrollTrigger: {
            trigger: ".achievements__info--block--main",
            start: '-1600',
        },
        opacity: 1,
        duration: 1,
    })

    gsap.to(".achievements__body--block--size-all", {
        scrollTrigger: {
            trigger: ".achievements__body--block--size-all",
            start: '-1660',
        },
        opacity: 1,
        duration: 1,
    })

    gsap.to(".achievements__body--block--size-left", {
        scrollTrigger: {
            trigger: ".achievements__body--block--size-left",
            start: '-1680',
        },
        opacity: 1,
        duration: 1,
    })

    gsap.to(".achievements__body--block--size-right", {
        scrollTrigger: {
            trigger: ".achievements__body--block--size-right",
            start: '-1680',
        },
        opacity: 1,
        duration: 1,
        delay: .4,
    })

    gsap.to(".inquire__title", {
        scrollTrigger: {
            trigger: ".inquire__title",
            start: '-1300'
        },
        x: 200,
        opacity: 1,
        duration: 1,
    })

    gsap.to(".inquire__body--content", {
        scrollTrigger: {
            trigger: ".inquire__body--content",
            start: '-1500'
        },
        opacity: 1,
        duration: 1,
    })

    gsap.to(".career__body", {
        scrollTrigger: {
            trigger: ".career__body",
            start: '-1500'
        },
        opacity: 1,
        duration: 1,
    })

    gsap.to(".footer__mail", {
        scrollTrigger: {
            trigger: ".footer__mail",
            start: '-1400'
        },
        y:0,
        opacity: 1,
        duration: 1,
    })

    gsap.to(".footer__telephone", {
        scrollTrigger: {
            trigger: ".footer__telephone",
            start: '-1400'
        },
        y:0,
        opacity: 1,
        duration: 1,
        delay: .2
    })

    gsap.to(".footer__skype", {
        scrollTrigger: {
            trigger: ".footer__skype",
            start: '-1400'
        },
        y:0,
        opacity: 1,
        duration: 1,
        delay: .4
    })

    gsap.to(".footer__links--item--instagram", {
        scrollTrigger: {
            trigger: ".footer__links--item--instagram",
            start: '-1900'
        },
        y:0,
        opacity: 1,
        duration: 1,
        delay: .2
    })

    gsap.to(".footer__links--item--facebook", {
        scrollTrigger: {
            trigger: ".footer__links--item--facebook",
            start: '-1900'
        },
        y:0,
        opacity: 1,
        duration: 1,
        delay: .4
    })

    gsap.to(".footer__links--item--transform", {
        scrollTrigger: {
            trigger: ".footer__links--item--telegram",
            start: '-1900'
        },
        y: -instagramH + -6,
        opacity: 1,
        duration: 1,
        delay: .6
    })

    gsap.to(".footer__links--item--facebook2", {
        scrollTrigger: {
            trigger: ".footer__links--item--facebook2",
            start: '-1900'
        },
        y:0,
        opacity: 1,
        duration: 1,
        delay: .8
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
            const animStart = 1;


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

