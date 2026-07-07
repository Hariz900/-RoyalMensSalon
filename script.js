/*=========================================
ROYAL MEN'S SALON
Premium JavaScript
=========================================*/

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        navLinks.classList.remove("active");

    });

});

// Back To Top

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        backToTop.style.display="flex";

    }else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Sticky Navbar

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(0,0,0,.92)";

    }else{

        header.style.background="rgba(0,0,0,.55)";

    }

});

// Scroll Animation

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:.15});

document.querySelectorAll(".glass-card,.section-title,.gallery-item").forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(50px)";

    el.style.transition=".7s";

    observer.observe(el);

});

// Active Navigation

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(window.pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// Hero Button Animation

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });


});

console.log("Royal Men's Salon Website Loaded Successfully!");
/* Mobile Menu */

@media(max-width:768px){

.nav-links.active{

display:flex;

flex-direction:column;

position:absolute;

top:80px;

left:0;

width:100%;

background:#111;

padding:20px 0;

text-align:center;

gap:20px;

}

.nav-links a.active{

color:#d4af37;

font-weight:700;

}

}