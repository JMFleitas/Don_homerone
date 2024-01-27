export default function menuToggle(ctaBtn, menuToggle, menuLink) {
    const d = document;

    d.addEventListener('click', (e) => {
        if (e.target.matches(ctaBtn) || e.target.matches(`${ctaBtn} *`)) {
            d.querySelector(menuToggle).classList.toggle("menu-active");
            d.querySelector(ctaBtn).classList.toggle("is-active");
        }

        if (e.target.matches(menuLink)) {
            d.querySelector(menuToggle).classList.remove("menu-active");
            d.querySelector(ctaBtn).classList.remove("is-active")
        }

    });

}
