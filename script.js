// ========================================
// PIALA DUNIA 2026 - MAIN JAVASCRIPT
// ========================================

// ========== TAB NAVIGATION (BERPINDAH HALAMAN) ==========
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        // Sembunyikan semua konten
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Tampilkan konten yang dipilih
        const activeContent = document.getElementById(`tab-${tabId}`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
        
        // Update tombol active
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            }
        });
    }

    // Event listener untuk setiap tombol tab
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            switchTab(tab);
        });
    });

    // ========== COUNTDOWN TIMER ==========
    function updateCountdown() {
        const targetDate = new Date('June 8, 2026 00:00:00').getTime();
        const now = new Date().getTime();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            document.getElementById('days').innerText = '0';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
            clearInterval(countdownInterval);
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    // ========== DATA BERITA ==========
    const newsData = [
        {
            title: "Stadion Megah Piala Dunia 2026 Mulai Rampung",
            date: "15 Maret 2024",
            tag: "Piala Dunia",
            tagClass: "piala-dunia",
            excerpt: "Progres 16 stadion di tiga negara mencapai 85%, siap menyambut jutaan fans. Stadion ikonik seperti MetLife Stadium dan SoFi Stadium hampir selesai direnovasi.",
            img: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=300&fit=crop",
            link: "#"
        },
        {
            title: "Bursa Transfer: Target Utama Klub Eropa",
            date: "12 Maret 2024",
            tag: "Transfer",
            tagClass: "transfer",
            excerpt: "Bintang muda mulai jadi incaran klub-klub top Eropa. Nilai transfer diprediksi tembus rekor baru menjelang musim panas.",
            img: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&h=300&fit=crop",
            link: "#"
        },
        {
            title: "Perempat Final UCL: Analisis Taktik",
            date: "10 Maret 2024",
            tag: "Liga Champions",
            tagClass: "ucl",
            excerpt: "Delapan tim siap bertarung di babak perempat final. Para pelatih mulai meracik strategi spesial untuk menghadapi lawan masing-masing.",
            img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop",
            link: "#"
        },
        {
            title: "Jadwal Piala Dunia 2026 Resmi Dirilis",
            date: "8 Maret 2024",
            tag: "Piala Dunia",
            tagClass: "piala-dunia",
            excerpt: "FIFA resmi mengumumkan jadwal lengkap pertandingan Piala Dunia 2026 yang akan digelar di 16 kota di Amerika Serikat, Kanada, dan Meksiko.",
            img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop",
            link: "#"
        },
        {
            title: "Manchester United Incar Striker Muda Brasil",
            date: "5 Maret 2024",
            tag: "Transfer",
            tagClass: "transfer",
            excerpt: "Setan Merah siapkan dana besar untuk mendatangkan striker muda berbakat asal Brasil yang menjadi incaran banyak klub Eropa.",
            img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop",
            link: "#"
        },
        {
            title: "Real Madrid Lolos ke Semifinal UCL",
            date: "3 Maret 2024",
            tag: "Liga Champions",
            tagClass: "ucl",
            excerpt: "Real Madrid berhasil melaju ke babak semifinal setelah kemenangan dramatis atas rival sekota Atletico Madrid.",
            img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop",
            link: "#"
        }
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
        
        if (newsGrid) {
            newsGrid.innerHTML = displayed.map(news => `
                <article class="news-card">
                    <div class="news-img">
                        <img src="${news.img}" alt="${news.title}" loading="lazy">
                    </div>
                    <div class="news-body">
                        <div class="news-meta">
                            <span class="news-date"><i class="far fa-calendar"></i> ${news.date}</span>
                            <span class="news-tag">${news.tag}</span>
                        </div>
                        <h3>${news.title}</h3>
                        <p>${news.excerpt}</p>
                        <a href="${news.link}" class="read-more">Baca Selengkapnya →</a>
                    </div>
                </article>
            `).join('');
        }
        
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            if (visibleCount >= filtered.length) {
                loadMoreBtn.style.display = "none";
            } else {
                loadMoreBtn.style.display = "inline-flex";
            }
        }
    }

    // Load More Button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 3;
            renderNews();
        });
    }

    // Filter Chips
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

    // ========== DATA SOCIAL MEDIA ==========
    const socialData = [
        { name: "Komunitas Facebook", desc: "Live streaming, diskusi eksklusif, dan polling prediksi skor bersama jutaan fans.", iconClass: "fb", link: "#", btnText: "Join Group →" },
        { name: "Instagram", desc: "Behind the scene, reels, dan story eksklusif pemain bintang setiap hari.", iconClass: "ig", link: "#", btnText: "Follow →" },
        { name: "TikTok Challenge", desc: "Ikutan #WorldCup2026Challenge dan menangkan merchandise eksklusif.", iconClass: "tt", link: "#", btnText: "Ikuti →" },
        { name: "Discord Server", desc: "Voice chat bareng fans dunia, AMA dengan legenda sepakbola.", iconClass: "dc", link: "#", btnText: "Join →" },
        { name: "YouTube", desc: "Dokumenter 4K, analisis taktik mendalam, dan wawancara eksklusif.", iconClass: "yt", link: "#", btnText: "Subscribe →" },
        { name: "Telegram Channel", desc: "Notifikasi real-time skor, lineup, dan berita breaking langsung ke HP.", iconClass: "tg", link: "#", btnText: "Join →" }
    ];

    function renderSocial() {
        const socialGrid = document.getElementById('socialGrid');
        if (socialGrid) {
            socialGrid.innerHTML = socialData.map(soc => {
                let iconName = soc.iconClass;
                if (iconName === 'yt') iconName = 'youtube';
                if (iconName === 'dc') iconName = 'discord';
                if (iconName === 'tt') iconName = 'tiktok';
                if (iconName === 'ig') iconName = 'instagram';
                if (iconName === 'fb') iconName = 'facebook-f';
                if (iconName === 'tg') iconName = 'telegram';
                
                return `
                <div class="social-card">
                    <div class="social-icon-bg ${soc.iconClass}">
                        <i class="fab fa-${iconName}"></i>
                    </div>
                    <h4>${soc.name}</h4>
                    <p>${soc.desc}</p>
                    <a href="${soc.link}" class="btn-sm">${soc.btnText}</a>
                </div>
                `;
            }).join('');
        }
    }

    // Inisialisasi render
    renderNews();
    renderSocial();

    // ========== PREVENT DEFAULT UNTUK LINK KOSONG ==========
    document.querySelectorAll('.read-more, .btn-sm, .featured-link').forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
    });

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ========== INTERSECTION OBSERVER (FADE IN ANIMATION) ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.news-card, .social-card, .countdown-card, .host-section, .featured-social').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease-out';
        observer.observe(el);
    });

    console.log('Piala Dunia 2026 Official Hub - Siap digunakan!');
});
