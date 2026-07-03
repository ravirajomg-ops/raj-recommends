/* ==========================================
   RAJ Recommends v1
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ELEMENTS
    ========================== */

    const loader = document.getElementById("loader");
    const poster = document.querySelector(".poster");
    const reflection = document.querySelector(".reflection");
    const cursorGlow = document.querySelector(".cursor-glow");
    const cards = document.querySelectorAll(".card");
    const qr = document.querySelector(".qr");

    /* ==========================
       LOADER
    ========================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1800);

    });

    /* ==========================
       CURSOR GLOW
    ========================== */

    document.addEventListener("mousemove", (e) => {

        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";

    });

    /* ==========================
       POSTER 3D
    ========================== */

    let mouseX = 0;
    let mouseY = 0;
    let angle = 0;

    poster.addEventListener("mousemove", (e) => {

        const rect = poster.getBoundingClientRect();

        mouseX =
            ((e.clientX - rect.left) / rect.width - 0.5) * 18;

        mouseY =
            ((e.clientY - rect.top) / rect.height - 0.5) * -18;

        reflection.style.left =
            (e.clientX - rect.left - 90) + "px";

        reflection.style.top =
            (e.clientY - rect.top - 90) + "px";

    });

    poster.addEventListener("mouseleave", () => {

        mouseX = 0;
        mouseY = 0;

    });

    function animatePoster() {

        angle += 0.02;

        const floatY = Math.sin(angle) * 10;

        const rotateZ = Math.sin(angle) * 1.5;

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
       QR PULSE
    ========================== */

    let scale = 1;
    let direction = 0.0015;

    function qrAnimation() {

        scale += direction;

        if (scale >= 1.05)
            direction = -0.0015;

        if (scale <= 1)
            direction = 0.0015;

        qr.style.transform =
            `scale(${scale})`;

        requestAnimationFrame(qrAnimation);

    }

    qrAnimation();

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0px)";

            }

        });

    }, {

        threshold: 0.2

    });

    cards.forEach(card => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(60px)";

        card.style.transition =
            ".8s ease";

        observer.observe(card);

    });

    /* ==========================
       HEADER SHADOW
    ========================== */

    const header =
        document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 20px 60px rgba(0,0,0,.12)";

        } else {

            header.style.boxShadow =
                "0 18px 40px rgba(0,0,0,.08)";

        }

    });

    /* ==========================
       BUTTON CLICK
    ========================== */

    document.querySelectorAll("a").forEach(btn => {

        btn.addEventListener("click", () => {

            btn.style.transform =
                "scale(.97)";

            setTimeout(() => {

                btn.style.transform = "";

            }, 120);

        });

    });

});