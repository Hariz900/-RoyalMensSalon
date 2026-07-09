/*==========================================
ROYAL MEN'S SALON
Premium Luxury CSS
Part 1A
==========================================*/

/* Google Font */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* Reset */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

html{
    scroll-behavior:smooth;
}

body{

    font-family:'Poppins',sans-serif;

    background:#0b0b0b;

    color:#ffffff;

    overflow-x:hidden;

    line-height:1.7;

}

/* Scrollbar */

::-webkit-scrollbar{

    width:10px;

}

::-webkit-scrollbar-track{

    background:#111;

}

::-webkit-scrollbar-thumb{

    background:#c8a96a;

    border-radius:20px;

}

/* Links */

a{

    text-decoration:none;

    color:white;

}

/* Images */

img{

    width:100%;

    display:block;

}

/* Container */

.container{

    width:90%;

    max-width:1200px;

    margin:auto;

}

/* Sections */

.section{

    padding:100px 0;

}

/* Titles */

.section-title{

    text-align:center;

    margin-bottom:60px;

}

.section-title span{

    color:#d4af37;

    font-size:15px;

    letter-spacing:3px;

    text-transform:uppercase;

}

.section-title h2{

    font-size:42px;

    margin-top:10px;

    font-weight:700;

}

/* Glass Effect */

.glass-card{

    background:rgba(255,255,255,0.06);

    border:1px solid rgba(255,255,255,.08);

    backdrop-filter:blur(18px);

    border-radius:18px;

    transition:.4s;

}

.glass-card:hover{

    transform:translateY(-8px);

    border-color:#d4af37;

    box-shadow:0 15px 40px rgba(212,175,55,.2);

}

/* Buttons */

.btn{

    display:inline-block;

    padding:15px 34px;

    border-radius:50px;

    font-weight:600;

    transition:.4s;

}

.btn-gold{

    background:#d4af37;

    color:#111;

}

.btn-gold:hover{

    transform:translateY(-5px);

    background:#f5d77a;

}

.btn-outline{

    border:2px solid #d4af37;

    color:#fff;

}

.btn-outline:hover{

    background:#d4af37;

    color:#111;

}

/*==============================
Navbar
==============================*/

header{

    position:fixed;

    width:100%;

    top:0;

    left:0;

    z-index:999;

    background:rgba(0,0,0,.55);

    backdrop-filter:blur(18px);

}

.navbar{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:18px 8%;

}

.logo{

    color:#d4af37;

    font-size:28px;

    font-weight:700;

}

.logo i{

    margin-right:8px;

}

.nav-links{

    display:flex;

    gap:35px;

    list-style:none;

}

.nav-links a{

    transition:.3s;

    font-weight:500;

}

.nav-links a:hover{

    color:#d4af37;

}

.menu-btn{

    display:none;

    font-size:28px;

    cursor:pointer;

}

/*==============================
Hero
==============================*/

.hero{

    height:100vh;

    background:

    linear-gradient(rgba(0,0,0,.75),
    rgba(0,0,0,.75)),

    url("https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1600");

    background-size:cover;

    background-position:center;

    display:flex;

    justify-content:center;

    align-items:center;

    text-align:center;

    position:relative;

}

.hero-content{

    max-width:850px;

    z-index:2;

}

.premium-tag{

    display:inline-block;

    background:rgba(212,175,55,.15);

    color:#d4af37;

    padding:10px 22px;

    border-radius:50px;

    margin-bottom:20px;

    letter-spacing:2px;

}

.hero h1{

    font-size:72px;

    font-weight:800;

    line-height:1.1;

}

.hero p{

    margin:30px auto;

    font-size:20px;

    max-width:700px;

    color:#ddd;

}

.hero-buttons{

    display:flex;

    justify-content:center;

    gap:20px;

    flex-wrap:wrap;

}

.scroll-down{

    position:absolute;

    bottom:30px;

    left:50%;

    transform:translateX(-50%);

    font-size:28px;

    color:#d4af37;

    animation:bounce 2s infinite;

}

@keyframes bounce{

0%,20%,50%,80%,100%{

transform:translate(-50%,0);

}

40%{

transform:translate(-50%,-15px);

}

60%{

transform:translate(-50%,-8px);

}

}
/*==========================================
ABOUT SECTION
==========================================*/

.about-grid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:60px;
    align-items:center;
}

.about-image img{
    width:100%;
    border-radius:20px;
    transition:.5s;
    box-shadow:0 20px 40px rgba(0,0,0,.5);
}

.about-image:hover img{
    transform:scale(1.05);
}

.about-content h3{
    font-size:36px;
    color:#d4af37;
    margin-bottom:20px;
}

.about-content p{
    color:#cccccc;
    margin-bottom:25px;
}

.about-features{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
    margin-top:30px;
}

.about-features .glass-card{
    padding:25px;
    text-align:center;
}

.about-features i{
    font-size:35px;
    color:#d4af37;
    margin-bottom:15px;
}

.about-features h4{
    font-size:18px;
}

/*==========================================
SERVICES
==========================================*/

.services{
    background:#111111;
}

.services-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
}

.service-card{
    padding:40px 30px;
    text-align:center;
    cursor:pointer;
    transition:.4s;
}

.service-card i{
    font-size:55px;
    color:#d4af37;
    margin-bottom:20px;
}

.service-card h3{
    font-size:24px;
    margin-bottom:15px;
}

.service-card p{
    color:#cfcfcf;
    font-size:15px;
}

.service-card:hover{
    transform:translateY(-12px);
    box-shadow:0 20px 40px rgba(212,175,55,.25);
}

/*==========================================
PRICING
==========================================*/

.pricing-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.price-card{
    position:relative;
    padding:45px 25px;
    text-align:center;
    transition:.4s;
}

.price-card h3{
    font-size:24px;
    margin-bottom:15px;
}

.price-card h2{
    font-size:48px;
    color:#d4af37;
    margin-bottom:15px;
}

.price-card p{
    color:#cccccc;
}

.price-card:hover{
    transform:translateY(-12px);
    box-shadow:0 20px 45px rgba(212,175,55,.25);
}

.featured{
    border:2px solid #d4af37;
    transform:scale(1.05);
}

.featured:hover{
    transform:scale(1.08);
}

.popular{
    position:absolute;
    top:-15px;
    left:50%;
    transform:translateX(-50%);
    background:#d4af37;
    color:#111;
    padding:8px 20px;
    border-radius:30px;
    font-size:13px;
    font-weight:700;
    letter-spacing:1px;
}

/*==========================================
LUXURY HOVER EFFECTS
==========================================*/

.glass-card{
    overflow:hidden;
    position:relative;
}

.glass-card::before{
    content:"";
    position:absolute;
    top:0;
    left:-120%;
    width:60%;
    height:100%;
    background:linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,.18),
        transparent
    );
    transition:.8s;
}

.glass-card:hover::before{
    left:150%;
}

/*==========================================
RESPONSIVE GRID
==========================================*/

@media(max-width:992px){

    .about-grid{
        grid-template-columns:1fr;
    }

    .about-features{
        grid-template-columns:repeat(2,1fr);
    }

}

@media(max-width:768px){

    .about-features{
        grid-template-columns:1fr;
    }

    .services-grid,
    .pricing-grid{
        grid-template-columns:1fr;
    }

    .about-content h3{
        font-size:28px;
    }

}
/*==========================================
GALLERY
==========================================*/

.gallery{
    background:#111;
}

.gallery-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:20px;
}

.gallery-item{
    overflow:hidden;
    border-radius:18px;
    cursor:pointer;
}

.gallery-item img{
    width:100%;
    height:320px;
    object-fit:cover;
    transition:.5s;
}

.gallery-item:hover img{
    transform:scale(1.1);
}

/*==========================================
REVIEWS
==========================================*/

.reviews-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.review-card{
    padding:35px;
    text-align:center;
}

.review-card .stars{
    color:#d4af37;
    margin-bottom:20px;
    font-size:18px;
}

.review-card p{
    color:#ddd;
    margin-bottom:20px;
}

.review-card h4{
    color:#d4af37;
}

/*==========================================
WHY CHOOSE US
==========================================*/

.why{
    background:#111;
}

.why-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.why-grid .glass-card{
    padding:40px 25px;
    text-align:center;
}

.why-grid i{
    font-size:50px;
    color:#d4af37;
    margin-bottom:20px;
}

.why-grid h3{
    font-size:22px;
}

/*==========================================
CONTACT
==========================================*/

.contact-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:40px;
    align-items:center;
}

.contact-info{
    padding:40px;
}

.contact-info h3{
    color:#d4af37;
    margin-bottom:25px;
    font-size:30px;
}

.contact-info p{
    margin-bottom:18px;
    color:#ddd;
}

.contact-info i{
    color:#d4af37;
    margin-right:10px;
}

.contact-info .btn{
    margin-top:25px;
}

.map iframe{
    border-radius:20px;
}

/*==========================================
FOOTER
==========================================*/

footer{
    background:#000;
    padding:50px 20px;
    text-align:center;
}

.footer-logo{
    color:#d4af37;
    font-size:32px;
    font-weight:700;
    margin-bottom:20px;
}

.social-icons{
    margin:25px 0;
}

.social-icons a{
    display:inline-flex;
    justify-content:center;
    align-items:center;
    width:50px;
    height:50px;
    margin:0 8px;
    border-radius:50%;
    background:rgba(255,255,255,.08);
    transition:.4s;
}

.social-icons a:hover{
    background:#d4af37;
    color:#111;
    transform:translateY(-5px);
}

footer p{
    color:#aaa;
}

/*==========================================
BACK TO TOP
==========================================*/

#backToTop{
    position:fixed;
    right:20px;
    bottom:20px;
    width:50px;
    height:50px;
    border:none;
    border-radius:50%;
    background:#d4af37;
    color:#111;
    font-size:20px;
    cursor:pointer;
    display:none;
    z-index:999;
    transition:.3s;
}

#backToTop:hover{
    transform:translateY(-5px);
}

/*==========================================
RESPONSIVE
==========================================*/

@media(max-width:992px){

    .hero h1{
        font-size:55px;
    }

    .contact-grid{
        grid-template-columns:1fr;
    }

}

@media(max-width:768px){

    .navbar{
        padding:15px 5%;
    }

    .nav-links{
        display:none;
    }

    .menu-btn{
        display:block;
    }

    .hero h1{
        font-size:42px;
    }

    .hero p{
        font-size:16px;
    }

    .hero-buttons{
        flex-direction:column;
        align-items:center;
    }

    .section{
        padding:70px 0;
    }

    .section-title h2{
        font-size:30px;
    }

    .gallery-item img{
        height:250px;
    }

}

@media(max-width:480px){

    .hero h1{
        font-size:34px;
    }

    .btn{
        width:100%;
        text-align:center;
    }

    .logo{
        font-size:22px;
    }

}