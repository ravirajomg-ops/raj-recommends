/* ==========================================
   RAJ Recommends - script.js
========================================== */

// Wait until page loads
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    // Hero animation
    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {
        hero.style.transition = "all 1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 200);

});

// ------------------------------
// Floating Poster
// ------------------------------

const poster = document.querySelector(".poster");

let angle = 0;

function animatePoster() {

    angle += 0.02;

    const y = Math.sin(angle) * 10;

    const rotate = Math.sin(angle) * 1.5;

    poster.style.transform = `
translateY(${y}px)
rotate(${rotate}deg)
rotateX(${mouseY}deg)
rotateY(${mouseX}deg)
`;

    requestAnimationFrame(animatePoster);

}

animatePoster();

// ===============================
// Premium 3D Poster
// ===============================

const poster = document.querySelector(".poster");

poster.addEventListener("mousemove", (e) => {

    const rect = poster.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((y / rect.height) - 0.5) * -18;

    poster.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.03)`;

});

poster.addEventListener("mouseleave", () => {

    poster.style.transition = ".5s";

    poster.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

});

poster.addEventListener("mouseenter", () => {

    poster.style.transition = ".15s";

});

// ------------------------------
// Reveal Animation
// ------------------------------

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s";

observer.observe(card);

});

// ------------------------------
// Button Click Animation
// ------------------------------

const buttons=document.querySelectorAll("a");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="";

},150);

});

});

// ------------------------------
// QR Pulse
// ------------------------------

const qr=document.querySelector(".qr");

let pulse=1;

let direction=.003;

setInterval(()=>{

pulse+=direction;

if(pulse>=1.05) direction=-.003;

if(pulse<=1) direction=.003;

qr.style.transform=`scale(${pulse})`;

},16);

// ------------------------------
// Header Shadow on Scroll
// ------------------------------

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>20){

header.style.boxShadow=
"0 8px 30px rgba(0,0,0,.08)";

}else{

header.style.boxShadow="none";

}

});

// ------------------------------
// Smooth Scroll
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

target.scrollIntoView({

behavior:"smooth"

});

});

});

console.log("✅ RAJ Recommends Loaded");