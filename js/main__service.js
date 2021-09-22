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

    gsap.to(".service__title--text", {
        y:0,
        opacity: 1,
        duration: 1.3,
    })

    gsap.to(".service__title--cats--item-first", {
        y:0,
        opacity: 1,
        duration: 1,
        delay: .2
    })

    gsap.to(".service__title--cats--item-second", {
        y:0,
        opacity: 1,
        duration: 1,
        delay: .4
    })

    gsap.to(".service__title--cats--item-third", {
        y:0,
        opacity: 1,
        duration: 1,
        delay: .6
    })

    gsap.to(".service__body", {
        opacity: 1,
        duration: 1.3,
        delay: .3
    })

}, 1000));

// Фильтр по категориям //

const serviceCats = document.querySelectorAll('.service__cat--btn')
const serviceBlocksCats = document.querySelectorAll('.service__body--item--cat')
serviceCats.forEach(catBtn => {
    catBtn.dataset.cat = catBtn.innerHTML
});

function catsFilterService() {
    serviceCats.forEach(catBtn => {
        
        catBtn.addEventListener('click', ()=>{
           
            const cat = catBtn.dataset.cat 
            serviceBlocksCats.forEach(blockCat => {
                blockCat.parentNode.classList.remove('hide')
                console.log('работает')
                if(!(cat == blockCat.innerHTML)){
                    blockCat.parentNode.classList.add('hide')
                }
            });
        })
    });
}

catsFilterService()

// Preloader //
var preloaderText = document.querySelector('.preloader__inner h2')

preloaderText.innerHTML = preloaderText.textContent.replace(/\S/g, "<span class='char'>$&</span>");

document.addEventListener("DOMContentLoaded", () => setTimeout(function(){
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
    }, 500)
}, 1000));



