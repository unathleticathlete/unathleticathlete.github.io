document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Dynamic year for copyright in footer
    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-text').textContent += ` © ${currentYear} Anand Bharti`;

    // Lazy loading for videos
    document.querySelectorAll('video').forEach(video => {
        video.setAttribute('loading', 'lazy');
    });

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('nav').prepend(menuToggle);

    menuToggle.addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('show');
    });
});

