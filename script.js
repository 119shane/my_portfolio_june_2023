const backBtn = document.querySelector(".back_btn")
const menuBtn = document.querySelector(".menu-btn")
const leftCol = document.querySelector('.left_col')

menuBtn.addEventListener('click', ()=> {
    leftCol.style.transform = 'translateX(0)'
})

backBtn.addEventListener('click', ()=> {
    leftCol.style.transform = 'translateX(-100%)'
})


