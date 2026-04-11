const navbartoggle = document.querySelector('.navbar-toggle');
const navbarmenu = document.querySelector('.menu');
navbartoggle.addEventListener('click',() =>{
    navbartoggle.classList.toggle('active');
    navbarmenu.classList.toggle('active');
});