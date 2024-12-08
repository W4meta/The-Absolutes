const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// document.addEventListener('DOMContentLoaded', () => {
//     const slider = document.querySelector('.bentobox');
//     let isDown = false;
//     let startX;
//     let scrollLeft;

//     slider.addEventListener('mousedown', (e) => {
//         isDown = true;
//         slider.style.cursor = 'grabbing';
//         startX = e.pageX - slider.offsetLeft;
//         scrollLeft = slider.scrollLeft;
//     });

//     slider.addEventListener('mouseleave', () => {
//         isDown = false;
//         slider.style.cursor = 'grab';
//     });

//     slider.addEventListener('mouseup', () => {
//         isDown = false;
//         slider.style.cursor = 'grab';
//     });

//     slider.addEventListener('mousemove', (e) => {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - slider.offsetLeft;
//         const walk = (x - startX) * 2;
//         slider.scrollLeft = scrollLeft - walk;
//     });

//     slider.addEventListener('touchstart', (e) => {
//         startX = e.touches[0].pageX - slider.offsetLeft;
//         scrollLeft = slider.scrollLeft;
//     });

//     slider.addEventListener('touchmove', (e) => {
//         if (e.touches.length !== 1) return;
//         const x = e.touches[0].pageX - slider.offsetLeft;
//         const walk = (startX - x) * 2;
//         slider.scrollLeft = scrollLeft + walk;
//     });
// });