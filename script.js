function mainmenu() {
    const MENU = document.querySelector(".offcanvas-menu");
    const OVERLAY = document.querySelector(".backdrop");

    MENU.classList.toggle("active");
    OVERLAY.classList.toggle("active");
}


const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });