export default function scrollNavbar() {
    const $navbarDesktop = document.querySelector(".navbar-desktop");

    window.addEventListener("scroll", e => {
        if (window.scrollY > 0) {
            console.log("baje");
            $navbarDesktop.classList.add("active-navbar");
        } else {
            console.log("subi");

            $navbarDesktop.classList.remove("active-navbar");
        }
    });
}
