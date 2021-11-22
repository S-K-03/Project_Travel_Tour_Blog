let searchBtn = document.querySelector('#seacrh-btn');
let searchBar = document.querySelector('.search-bar-container');

window.scroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

searchBtn.addEventListener('click', ()=> {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let closeForm = document.querySelector('#form-close');

formBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active');
});
closeForm.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    });
});

var swiper = new Swiper(".review-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints:{
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        1024:{
            slidesPerView:4,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints:{
        450:{
            slidesPerView:2,
        },
        640:{
            slidesPerView:3,
        },
        768:{
            slidesPerView:4,
        },
        1024:{
            slidesPerView:5,
        }
    },
});