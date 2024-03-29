const headerLogo = document.querySelector('.header__logo')

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


// GSAP-Анимации //

document.addEventListener("DOMContentLoaded", () => setTimeout(function(){
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".other__title--text", {
        y:0,
        opacity: 1,
        duration: 1.3,
    })

    gsap.to(".other__body--inner", {
        opacity: 1,
        duration: 1,
        delay: .4
    })

    gsap.to(".other__body--description", {
        opacity: 1,
        duration: 1,
        delay: .8
    })
}, 1000));



// Preloader //
var preloaderText = document.querySelector('.preloader__inner h2')

preloaderText.innerHTML = preloaderText.textContent.replace(/\S/g, "<span class='char'>$&</span>");

document.addEventListener("DOMContentLoaded", () => setTimeout(function(){
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
    }, 500)
}, 1000));






