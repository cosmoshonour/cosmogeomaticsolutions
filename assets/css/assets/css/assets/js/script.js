// ==========================================
// COSMO GEOMATICS SOLUTIONS
// Main JavaScript File
// ==========================================

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

// Scroll To Top
function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Fade Animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});

// Footer Year
const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

console.log("Cosmo Geomatics Solutions Website Loaded Successfully.");
