//Header Background Change on Scroll
let header = document.querySelector("header");
   
window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

jQuery(document).scroll(function(){
    if(jQuery(this).scrollTop() > 300)
    {   
       jQuery('#navigation').css({"background":"red"});
    } else {
       jQuery('#navigation').css({"background":"transparent"});
    }
});