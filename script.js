// ========== PAGE NAVIGATION (BERPINDAH HALAMAN) ==========
const navBtns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page-content');

function switchPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`page-${pageId}`).classList.add('active');
    
    navBtns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('data-page') === pageId) {
            btn.classList.add('active');
        }
    });
}

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.getAttribute('data-page');
        switchPage(page);
    });
});

// ========== COUNTDOWN TIMER ==========
function updateCountdown() {
    const target = new Date('June 8, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = target - now;
    
    if(diff <= 0) {
        document.getElementById('days').innerText = '0';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        clearInterval(timer);
        return;
    }
    
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (86400000)) / (3600000));
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = String(hours).padStart(2,'0');
    document.getElementById('minutes').innerText = String(mins).padStart(2,'0');
    document.getElementById('seconds').innerText = String(secs).padStart(2,'0');
}
updateCountdown();
const timer = setInterval(updateCountdown, 1000);

// ========== FILTER CHIPS (simulasi) ==========
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
    chip.addEventListener('click', function() {
        chips.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        // Di sini bisa ditambahkan filter berita sesuai kategori (demo)
        console.log('Filter:', this.innerText);
    });
});

// ========== LAINNYA: efek smooth, dll ==========
// Optional: animasi tambahan
document.querySelectorAll('.btn-primary, .btn-outline, .btn-sm').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // hanya untuk demo, jangan reload
        if(btn.getAttribute('href') === '#') e.preventDefault();
    });
});
