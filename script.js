const menuBtn = document.querySelector('.menu');
const navbar = document.querySelector('.navbar ul');
const cross = document.querySelector('.cross');

menuBtn.addEventListener('click' , ()=>{
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('display');
})

cross.addEventListener('click' , ()=>{
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('display');
})