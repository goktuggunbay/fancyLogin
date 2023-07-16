const _wrapper = document.querySelector('.wrapper');
const login_link = document.querySelector('.loginLink');
const register_link = document.querySelector('.registerLink');
const btnPopup = document.querySelector('.btnLoginNav');
const icon_close= document.querySelector('.iconClose');

register_link.addEventListener('click',()=>{
    _wrapper.classList.add('active');
})

login_link.addEventListener('click',()=>{
    _wrapper.classList.remove('active');
})

btnPopup.addEventListener('click',()=>{
    _wrapper.classList.add('active-popup');
})

icon_close.addEventListener('click',()=>{
    _wrapper.classList.remove('active-popup');
})