console.time('Работает')

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

const animBlock = document.querySelector('.innovate')
let animBlockHeightFixed = animBlock.clientHeight
let animBlockHeightAction



window.addEventListener('scroll', ()=>{
    let animBlockHeightAction = animBlock.clientHeight
    window.addEventListener('load', ()=>{
        let animBlockOffsetTop = animBlock.getBoundingClientRect().top;
        let animBlockHeightScroll = animBlockHeightFixed + (animBlockOffsetTop -
        250) - 200;
            
        animBlock.style.height = animBlockHeightScroll +'px'
    })
        
    window.addEventListener('scroll', ()=>{
        let animBlockOffsetTop = animBlock.getBoundingClientRect().top;
        let animBlockHeightScroll = animBlockHeightFixed + (animBlockOffsetTop - 250) - 200;
            
        animBlock.style.height = animBlockHeightScroll +'px'

    })
})

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
    delay: .4,
})


console.timeEnd('Работает')

