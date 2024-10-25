function mainmenu() {
    const MENU = document.querySelector(".offcanvas-menu");
    const OVERLAY = document.querySelector(".backdrop");

    MENU.classList.toggle("active");
    OVERLAY.classList.toggle("active");
}