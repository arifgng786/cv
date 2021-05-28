const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {

        //Toggle Nave
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkfade 0.5s ease forwards ${index / 7 + 0.3}s`; 
            }
        });   

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();