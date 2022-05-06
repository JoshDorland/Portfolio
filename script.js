//Header Background Change on Scroll
let header = document.querySelector("header");
    
window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});
