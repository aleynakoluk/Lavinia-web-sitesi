document.addEventListener('DOMContentLoaded', function () {
    // Slider işlevselliği
    const slides = document.querySelector('.slides');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    if (slides && prevButton && nextButton) {
        function showSlide(index) {
            const totalSlides = slides.children.length;
            if (index >= totalSlides) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = index;
            }
            const offset = -currentIndex * 100;
            slides.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', function () {
            showSlide(currentIndex - 1);
        });

        nextButton.addEventListener('click', function () {
            showSlide(currentIndex + 1);
        });
    }

    // Mobil Menü Event Listener
    const barsButton = document.getElementById('bars');
    const navbar = document.querySelector('.navbar');

    barsButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && !e.target.closest('#bars')) {
            navbar.classList.remove('active');
        }
    });

    // ScrollReveal ayarları
    ScrollReveal().reveal('.home', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
    });

    ScrollReveal().reveal('.about', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        delay: 300
    });

    ScrollReveal().reveal('.services', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        delay: 600
    });

    ScrollReveal().reveal('.shot-section', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        delay: 400
    });

    ScrollReveal().reveal('.contact', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        delay: 100
    });
});