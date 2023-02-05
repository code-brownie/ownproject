const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');
    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');
        // animate links
        navlinks.forEach((links, index) => {
            if (links.style.animation) {
                links.style.animation = '';
            } else {
                links.style.animation = `navlinksFade 0.5s forwards ${index / 7 + 0.2}s`
            }
        });

        // burger animatation
        burger.classList.toggle('toggle');
    });
}
navslide();