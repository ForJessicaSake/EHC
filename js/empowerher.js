/*==================== SHOW AND HIDE MENU ====================*/
var navLinks = document.getElementById("navLinks");
var navOvarlay = document.querySelector(".nav-overlay");
function showMenu(){
    navLinks.classList.add("view_nav");
    navOvarlay.classList.add("open");
}
function hideMenu(){
    navLinks.classList.remove("view_nav");
    navOvarlay.classList.remove("open");
}

/*==================== ONSCROLL NAV-BAR BACKROUND COLOR ====================*/
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
   
});


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1000,
    delay: 0,
    reset: false
});

sr.reveal(`.banner_data, .banner_img, 
            .about_details, .about_deta,  .about_detty, .abo_txt,
            .product_part_1, .product_part_2,
            .test_con, .containerX, .contain_box,
            .vison_n, .mission_n, .fav_quote, .footer_1,
            .footer_2, .footer_3, .map,
            .gal-img-1, .gal-img-2, .gal-img-3, .gal-img-4,
            .gal-img-5, .gal-img-6,
            .pro-webinar-1, .pro-webinar-2,
            .prog-bootcamp-1, .prog-bootcamp-2,
            .team-1, .team-2, .team-3, .team-4,
            .team-5, .team-6, .team-7`, {
            interval: 200
})


//current date for footer
var date = new Date();
document.querySelector(".current-date-year").innerHTML = date.getFullYear();

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


//current date for footer
var date = new Date();
document.querySelector(".current-date-year").innerHTML = date.getFullYear();





