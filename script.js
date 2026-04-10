// ========== TAB NAVIGATION (BERPINDAH HALAMAN) ==========
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(tabId) {
    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');
    
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        }
    });
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
    });
});

// ========== COUNTDOWN TIMER ==========
function updateCountdown() {
    const target = new Date('June 8, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = target - now;
    
    if (diff <= 0) {
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

// ========== DATA BERITA (dinamis) ==========
const newsData = [
    { title: "Stadion Megah Piala Dunia 2026 Mulai Rampung", date: "15 Maret 2024", tag: "Piala Dunia", tagClass: "piala-dunia", excerpt: "Progres 16 stadion di tiga negara mencapai 85%, siap menyambut jutaan fans.", img: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=300&fit=crop", link: "#" },
    { title: "Bursa Transfer: Target Utama Klub Eropa", date: "12 Maret 2024", tag: "Transfer", tagClass: "transfer", excerpt: "Bintang muda mulai jadi incaran, nilai transfer diprediksi tembus rekor.", img: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&h=300&fit=crop", link: "#" },
    { title: "Perempat Final UCL: Analisis Taktik", date: "10 Maret 2024", tag: "Liga Champions", tagClass: "ucl", excerpt: "Delapan tim siap bertarung, pelatih racik strategi spesial.", img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop", link: "#" },
    { title: "Jadwal Piala Dunia 2026 Resmi Dirilis", date: "8 Maret 2024", tag: "Piala Dunia", tagClass: "piala-dunia", excerpt: "FIFA mengumumkan jadwal lengkap pertandingan di 16 kota.", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop", link: "#" },
    { title: "Manchester United Incar Striker Muda Brasil", date: "5 Maret 2024", tag: "Transfer", tagClass: "transfer", excerpt: "Setan Merah siapkan dana besar untuk bintang baru.", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop", link: "#" },
    { title: "Real Madrid Lolos ke Semifinal UCL", date: "3 Maret 2024", tag: "Liga Champions", tagClass: "ucl", excerpt: "Kemenangan dramatis atas rival sekota.", img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop", link: "#" }
];

let currentFilter = "all";
let visibleCount = 3;

function renderNews() {
    let filtered = newsData;
    if (currentFilter !== "all") {
        filtered = newsData.filter(news => news.tagClass === currentFilter);
    }
    const displayed = filtered.slice(0, visibleCount);
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = displayed.map(news => `
        <article class="news-card">
            <div class="news-img"><img src="${news.img}" alt="${news.title}" loading="lazy"></div>
            <div class="news-body">
                <div class="news-meta"><span class="news-date"><i class="far fa-calendar"></i> ${news.date}</span><span class="news-tag">${news.tag}</span></div>
                <h3>${news.title}</h3>
                <p>${news.excerpt}</p>
                <a href="${news.link}" class="read-more">Baca →</a>
            </div>
        </article>
    `).join('');
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (visibleCount >= filtered.length) {
        loadMoreBtn.style.display = "none";
    } else {
        loadMoreBtn.style.display = "inline-flex";
    }
}

document.getElementById('loadMoreBtn').addEventListener('click', () => {
    visibleCount += 3;
    renderNews();
});

// Filter chips
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
    chip.addEventListener('click', function() {
        chips.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.getAttribute('data-filter');
        visibleCount = 3;
        renderNews();
    });
});

// ========== DATA SOCIAL MEDIA (dinamis) ==========
const socialData = [
    { name: "Komunitas Facebook", desc: "Live streaming, diskusi eksklusif, dan polling prediksi skor.", iconClass: "fb", link: "#", btnText: "Join Group →" },
    { name: "Instagram", desc: "Behind the scene, reels, dan story eksklusif pemain bintang.", iconClass: "ig", link: "#", btnText: "Follow →" },
    { name: "TikTok Challenge", desc: "Ikutan #WorldCup2026Challenge dan menangkan merchandise.", iconClass: "tt", link: "#", btnText: "Ikuti →" },
    { name: "Discord Server", desc: "Voice chat bareng fans dunia, AMA dengan legenda.", iconClass: "dc", link: "#", btnText: "Join →" },
    { name: "YouTube", desc: "Dokumenter 4K, analisis taktik, dan wawancara eksklusif.", iconClass: "yt", link: "#", btnText: "Subscribe →" },
    { name: "Telegram Channel", desc: "Notifikasi real-time skor, lineup, dan berita breaking.", iconClass: "tg", link: "#", btnText: "Join →" }
];

function renderSocial() {
    const socialGrid = document.getElementById('socialGrid');
    socialGrid.innerHTML = socialData.map(soc => `
        <div class="social-card">
            <div class="social-icon-bg ${soc.iconClass}"><i class="fab fa-${soc.iconClass === 'yt' ? 'youtube' : soc.iconClass === 'dc' ? 'discord' : soc.iconClass}"></i></div>
            <h4>${soc.name}</h4>
            <p>${soc.desc}</p>
            <a href="${soc.link}" class="btn-sm">${soc.btnText}</a>
        </div>
    `).join('');
}

// Inisialisasi
renderNews();
renderSocial();

// ========== LAINNYA ==========
// Prevent default untuk link kosong
document.querySelectorAll('.read-more, .btn-sm, .featured-link').forEach(link => {
    if (link.getAttribute('href') === '#') {
        link.addEventListener('click', (e) => e.preventDefault());
    }
});
