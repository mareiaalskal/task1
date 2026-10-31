
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuBtn.setAttribute("aria-expanded", isOpen);

});
