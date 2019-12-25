function hamburger() {
    var nav, menu, cross;
    nav = document.getElementById("nav-mobile");
    menu = document.getElementById("mobile-untoggle");
    cross = document.getElementById("mobile-toggle");
    if (nav.style.display === "none") {
        nav.style.display = "block";
        menu.style.display = "none";
        cross.style.display = "block";
    } else {
        nav.style.display = "none";
        menu.style.display = "block";
        cross.style.display = "none";
    }
}