const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    });
}

navSlide();

const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
    if (window.pageYOffset>100)
    {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active")
    }
})