const d = document;

export default function menuSmart() {
    const $imgSmart = d.querySelectorAll("img[data-img-smart]");


    const cb = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");

            }
        })
    };

    const observer = new IntersectionObserver(cb, { threshold: 0.5 });

    $imgSmart.forEach(el => observer.observe(el));
}