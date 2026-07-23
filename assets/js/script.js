// ===============================
// Cosmo Geomatics Solutions
// Main JavaScript
// ===============================

// Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Sticky Navbar

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});
/* ===========================
   STICKY HEADER & MOBILE MENU
=========================== */

header.sticky{
    background:#003b5c;
    box-shadow:0 8px 20px rgba(0,0,0,.15);
}

.menu-toggle{
    display:none;
    font-size:1.8rem;
    cursor:pointer;
    color:#fff;
}

@media (max-width:768px){

    .menu-toggle{
        display:block;
    }

    .nav-links{
        position:absolute;
        top:100%;
        left:0;
        width:100%;
        background:#003b5c;
        flex-direction:column;
        display:none;
        padding:20px 0;
        text-align:center;
    }

    .nav-links.active{
        display:flex;
    }

    .nav-links li{
        margin:15px 0;
    }

    .hero{
        padding:110px 20px 70px;
    }

    .hero-text h1{
        font-size:2.3rem;
    }

    .section-title h2,
    .about-text h2{
        font-size:2rem;
    }

    .hero-buttons{
        justify-content:center;
    }
}
