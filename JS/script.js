import slider from "./carrusel_index.js";
import menuSmart from "./menu-smart.js";
import menuToggle from "./menu_toggle.js";


const d = document;

d.addEventListener("DOMContentLoaded", e => {
    menuToggle(".cta-btn", ".menu-toggle", ".menu-toggle a")
    slider();
    menuSmart();
})