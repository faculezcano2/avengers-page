document.querySelector('.menuresponsiv').addEventListener('click',()=>{
    document.querySelector('.nav__left').classList.toggle('show');
});

document.querySelector('.nav__left').addEventListener('click',()=>{
    document.querySelector('.nav__left').classList.toggle('show');
});

ScrollReveal().reveal('.first', {delay:400});
ScrollReveal().reveal('.news_protagonists', {delay:400});
ScrollReveal().reveal('.comics', {delay:400});
ScrollReveal().reveal('.news_comics', {delay:400});
ScrollReveal().reveal('.movies', {delay:400});
ScrollReveal().reveal('.news_movies', {delay:400});
ScrollReveal().reveal('.characters', {delay:400});
ScrollReveal().reveal('#title__characters', {delay:400});
ScrollReveal().reveal('.social', {delay:400});
ScrollReveal().reveal('.footer-links', {delay:400});
ScrollReveal().reveal('.copy', {delay:400});


