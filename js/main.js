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

const innovate = document.querySelector('.innovate')
const innovateH = innovate.clientHeight

window.addEventListener('scroll', ()=>{
    if(!(innovateH - window.scrollY/2 + 100 < 0)){
        console.log(innovateH - window.scrollY/2 + 100)
        innovate.style.height = innovateH - window.scrollY/1.6 + 100 + 'px'
        
    }
})


// const animBlock = document.querySelector('.innovate')
// let animBlockHeightFixed = animBlock.clientHeight
// let animBlockHeightAction



// window.addEventListener('scroll', ()=>{
//     window.addEventListener('load', ()=>{
//         let animBlockOffsetTop = animBlock.getBoundingClientRect().top;
//         let animBlockHeightScroll = animBlockHeightFixed + (animBlockOffsetTop -
//         250) - 200;
            
//         animBlock.style.height = animBlockHeightScroll +'px'
//     })

//     window.addEventListener('resize', ()=>{
//         let animBlockOffsetTop = animBlock.getBoundingClientRect().top;
//         let animBlockHeightScroll = animBlockHeightFixed + (animBlockOffsetTop -
//             250) - 200;
            
//         animBlock.style.height = animBlockHeightScroll +'px'

//     })
// })

const headerWrapper = document.querySelector('.header__wrapper')
const burger = document.querySelector('.header__burger')
const burgerInner = document.querySelector('.header__burger--menu--inner')
const paddingTop = parseInt(window.getComputedStyle(headerWrapper,null).getPropertyValue('padding-top'),10);
const paddingBottom = parseInt(window.getComputedStyle(headerWrapper,null).getPropertyValue('padding-bottom'),10);
const paddingTopHeight = headerWrapper.clientHeight - paddingTop - paddingBottom;
burgerInner.style.paddingTop = paddingTopHeight + 'px'

window.addEventListener('resize', ()=>{
    const paddingTopHeight = headerWrapper.clientHeight - paddingTop - paddingBottom;
    burgerInner.style.paddingTop = paddingTopHeight + 'px'
})

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
        start: '-1400',
    },
    y: 0,
    opacity: 1,
    duration: 1,
})

gsap.to(".featured__body--item--size-right", {
    scrollTrigger: {
        trigger: ".featured__body--item--size-right",
        start: '-1400',
    },
    y: 0,
    opacity: 1,
    duration: 1,
    delay: .4
})

gsap.to(".achievements__info--title", {
    scrollTrigger: {
        trigger: ".achievements__info--title",
        start: '-1500'
    },
    x: 0,
    opacity: 1,
    duration: 1,
})

gsap.to(".achievements__info--block--main", {
    scrollTrigger: {
        trigger: ".achievements__info--block--main",
        start: '-1500',
    },
    opacity: 1,
    duration: 1,
})

gsap.to(".achievements__body--block--size-all", {
    scrollTrigger: {
        trigger: ".achievements__body--block--size-all",
        start: '-1460',
    },
    opacity: 1,
    duration: 1,
})

gsap.to(".achievements__body--block--size-left", {
    scrollTrigger: {
        trigger: ".achievements__body--block--size-left",
        start: '-1500',
    },
    opacity: 1,
    duration: 1,
})

gsap.to(".achievements__body--block--size-right", {
    scrollTrigger: {
        trigger: ".achievements__body--block--size-right",
        start: '-1500',
    },
    opacity: 1,
    duration: 1,
    delay: .4,
})

gsap.to(".inquire__title", {
    scrollTrigger: {
        trigger: ".inquire__title",
        start: '-1200'
    },
    x: 200,
    opacity: 1,
    duration: 1,
})

gsap.to(".inquire__body--content", {
    scrollTrigger: {
        trigger: ".inquire__body--content",
        start: '-1400'
    },
    opacity: 1,
    duration: 1,
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

