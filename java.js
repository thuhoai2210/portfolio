mybutton = document.getElementById("headerweb");
window.onscroll = function () {
    scrollFunction();
}
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerweb.style.display = "flex";
    }
    else {
        headerweb.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

