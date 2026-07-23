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
/* ===========================
   PROJECTS
=========================== */

.projects{
    padding:100px 8%;
    background:#ffffff;
}

.project-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
    gap:30px;
    margin-top:50px;
}

.project-card{
    background:#fff;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
    transition:.3s;
}

.project-card:hover{
    transform:translateY(-8px);
}

.project-card img{
    width:100%;
    height:240px;
    object-fit:cover;
}

.project-content{
    padding:25px;
}

.project-content h3{
    color:#003366;
    margin-bottom:12px;
}

.project-content p{
    color:#666;
    line-height:1.7;
}
/* ===========================
   CONTACT
=========================== */

.contact{
    padding:100px 8%;
    background:#f8f9fc;
}

.contact-container{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:40px;
    margin-top:50px;
}

.contact-info{
    background:#003366;
    color:#fff;
    padding:40px;
    border-radius:12px;
}

.contact-info h3{
    margin-bottom:20px;
}

.contact-info p{
    margin-bottom:18px;
    line-height:1.7;
}

.contact-form{
    display:flex;
    flex-direction:column;
    gap:18px;
}

.contact-form input,
.contact-form textarea{
    padding:15px;
    border:1px solid #ddd;
    border-radius:8px;
    font-size:16px;
}

.contact-form button{
    border:none;
    cursor:pointer;
}
/* ===========================
   FOOTER
=========================== */

footer{
    background:#002244;
    color:#fff;
    text-align:center;
    padding:30px 20px;
}

footer p{
    margin:8px 0;
}
