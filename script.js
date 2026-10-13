const navbar = document.getElementById("navbar");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const quoteForm = document.getElementById("quoteForm");


/* Navbar scroll efekti */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* Mobil menü */

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Menü linkine basınca mobil menüyü kapat */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* Teklif formu */

quoteForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Teklif talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz."
    );

});