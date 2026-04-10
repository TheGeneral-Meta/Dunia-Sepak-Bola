// Carousel Logic
const wrapper = document.getElementById('carouselWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Create dots
function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, idx) => {
        if (idx === currentIndex) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    currentIndex = index;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function nextSlide() {
    if (currentIndex + 1 < totalSlides) goToSlide(currentIndex + 1);
    else goToSlide(0);
}

function prevSlide() {
    if (currentIndex - 1 >= 0) goToSlide(currentIndex - 1);
    else goToSlide(totalSlides - 1);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
createDots();

// Optional: swipe support for touch devices
let touchStartX = 0;
let touchEndX = 0;
wrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});
wrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
});

// Countdown Timer
function updateCountdown() {
    const worldCupDate = new Date('June 8, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = worldCupDate - now;

    if (timeLeft <= 0) {
        document.querySelector('.countdown-grid').innerHTML = '<div style="grid-column:1/-1; text-align:center;">Piala Dunia 2026 Telah Dimulai!</div>';
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (86400000)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (3600000)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (60000)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// News categories interactive (just visual feedback)
document.querySelectorAll('.news-category').forEach(cat => {
    cat.addEventListener('click', function() {
        document.querySelectorAll('.news-category').forEach(c => {
            c.style.background = 'rgba(0, 204, 102, 0.1)';
            c.style.color = '#00AA55';
        });
        this.style.background = '#00AA55';
        this.style.color = 'white';
    });
});

// Optional: Animation on scroll (simple fade)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.social-card, .news-card, .countdown-container, .featured-social, .country-item').forEach(el => {
    observer.observe(el);
});

// Simple fade-in class
document.querySelectorAll('.fade-in').forEach(el => el.style.opacity = '1');

// Prevent right click / dev tools basic (optional, keep from original but simplified)
document.addEventListener('contextmenu', e => e.preventDefault());
