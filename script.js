// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP Animations
window.addEventListener('load', () => {
    gsap.from('.hero-text h1', { y: -50, opacity: 0, duration: 1 });
    gsap.from('.hero-text p', { y: 30, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from('.hero-image img', { scale: 0.8, opacity: 0, duration: 1, delay: 0.7 });

    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            duration: 1,
        });
    });
});

// Simple form submit interaction
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Your message has been sent!');
    e.target.reset();
});
