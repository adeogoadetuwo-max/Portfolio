const words = [
    "Digital Reality",
    "Amazing Websites",
    "Powerful Web Apps",
    "Business Success",
    "Creative Solutions"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        speed = 1500;
    }

    if (isDeleting && charIndex === -1) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});
/*==========================
        FAQ
==========================*/

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {

    faq.addEventListener("click", () => {

        faq.classList.toggle("active");

    });

});
/*==========================
      BACK TO TOP
==========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/*==========================
      PRELOADER
===========================*/

window.addEventListener("load",()=>{

const preloader=document.getElementById("preloader");

setTimeout(()=>{

preloader.classList.add("preloader-hide");

},1200);

});
// Scroll Reveal

function reveal(){

    const reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        const windowHeight = window.innerHeight;

        const revealTop = reveals[i].getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }else{

            reveals[i].classList.remove("active");

        }
    }
}

window.addEventListener("scroll", reveal);

reveal();