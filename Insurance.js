// JavaScript for sticky menu
window.addEventListener("scroll", function() {
    var header = document.getElementById("sticky-header");
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
// JavaScript for sticky menu color change
window.addEventListener("scroll", function() {
    var header = document.getElementById("sticky-header");
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
// JavaScript code
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 0);
  });
  