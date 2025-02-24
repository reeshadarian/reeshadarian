document.addEventListener('DOMContentLoaded', () => {
    const cta = document.querySelector('.cta');
    cta.addEventListener('mouseover', () => {
        cta.style.transform = 'scale(1.1)';
    });
    cta.addEventListener('mouseleave', () => {
        cta.style.transform = 'scale(1)';
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
