/* ==========================================
   RAJ Recommends
   Premium Landing Page
   script.js
========================================== */

window.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ELEMENTS
    ========================== */

    const poster = document.querySelector(".poster");
    const reflection = document.querySelector(".reflection");
    const glow = document.querySelector(".cursor-glow");
    const cards = document.querySelectorAll(".card");
    const qr = document.querySelector(".qr");

    /* ==========================
       FLOATING POSTER
    ========================== */

    let angle = 0;
    let mouseX = 0;
    let mouseY = 0;

    function animatePoster(){

        angle += 0.02;

        const floatY = Math.sin(angle) * 10;
        const rotateZ = Math.sin(angle) * 1.2;

        poster.style.transform = `
        translateY(${floatY}px)
        rotateX(${mouseY}deg)
        rotateY(${mouseX}deg)
        rotateZ(${rotateZ}deg)
        `;

        requestAnimationFrame(animatePoster);

    }

    animatePoster();

    /* ==========================
       POSTER PARALLAX
    ========================== */

    poster.addEventListener("mousemove",(e)=>{

        const rect = poster.getBoundingClientRect();

        mouseX = ((e.clientX-rect.left)/rect.width-.5)*15;

        mouseY = ((e.clientY-rect.top)/rect.height-.5)*-15;

        reflection.style.left =
        (e.clientX-rect.left-90)+"px";

        reflection.style.top =
        (e.clientY-rect.top-90)+"px";

    });

    poster.addEventListener("mouseleave",()=>{

        mouseX = 0;
        mouseY = 0;

    });

    /* ==========================
       CURSOR GLOW
    ========================== */

    document.addEventListener("mousemove",(e)=>{

        glow.style.left=e.clientX+"px";

        glow.style.top=e.clientY+"px";

    });

    /* ==========================
       QR PULSE
    ========================== */

    let scale = 1;

    let dir = 0.002;

    function animateQR(){

        scale += dir;

        if(scale>1.05) dir=-0.002;

        if(scale<1) dir=0.002;

        qr.style.transform=`scale(${scale})`;

        requestAnimationFrame(animateQR);

    }

    animateQR();

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    cards.forEach(card=>{

        card.classList.add("fade-up");

        observer.observe(card);

    });

    /* ==========================
       HEADER SHADOW
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>30){

            header.style.boxShadow=
            "0 15px 40px rgba(0,0,0,.12)";

        }else{

            header.style.boxShadow=
            "0 10px 30px rgba(0,0,0,.08)";

        }

    });

    /* ==========================
       BUTTON RIPPLE
    ========================== */

    document.querySelectorAll("a").forEach(btn=>{

        btn.addEventListener("click",()=>{

            btn.style.transform="scale(.96)";

            setTimeout(()=>{

                btn.style.transform="";

            },120);

        });

    });

});