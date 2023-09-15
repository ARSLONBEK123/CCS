const slider = document.querySelector('.slider')
const img = document.querySelector('img')
// button
const next = document.querySelector('#btn1')
const prev = document.querySelector('#btn2') 

let count = 0

function removeActive(){
    for (let i = 0 ; i < img.length; i++) {
        img[i].classList.remove('active');
    }
}

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)

// 

function nextSlide(){
    removeActive();
    count++;
    if (count === img.length) {
        count = 0;
    }
    img[count].classList.add('active');
}
// Preve 

function prevSlide () {
    removeActive();
    
    if (count === 0) {
        count = img.length;
    }    
    count--;
    img[count].classList.add('active')
}
