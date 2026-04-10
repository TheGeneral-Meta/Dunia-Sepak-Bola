// ============================================
// PIALA DUNIA 2026 - MAIN JAVASCRIPT
// Complete | Fully Functional
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
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
        
        if (document.getElementById('days')) {
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = String(hours).padStart(2, '0');
            document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
            document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
        }
    }
    
    if (document.getElementById('days')) {
        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    }
    
    // ========== NEWS DATA (12 Berita Lengkap) ==========
    const newsData = [
        {
            id: 1,
            title: "Stadion Megah Piala Dunia 2026 Mulai Rampung",
            date: "15 Maret 2024",
            category: "piala-dunia",
            categoryName: "Piala Dunia",
            excerpt: "Progres pembangunan 16 stadion di tiga negara tuan rumah mencapai 85%. Stadion ikonik seperti MetLife Stadium dan SoFi Stadium hampir selesai direnovasi. FIFA memastikan semua venue siap digunakan pada kuartal pertama 2026.",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 2,
            title: "Bursa Transfer: Target Utama Klub-klub Eropa",
            date: "12 Maret 2024",
            category: "transfer",
            categoryName: "Transfer",
            excerpt: "Bintang muda mulai menjadi incaran klub-klub top Eropa. Nilai transfer diprediksi tembus rekor baru menjelang musim panas 2024. Beberapa nama besar seperti Kylian Mbappe dan Erling Haaland juga masuk radar.",
            image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 3,
            title: "Perempat Final Liga Champions: Analisis Taktik",
            date: "10 Maret 2024",
            category: "ucl",
            categoryName: "Liga Champions",
            excerpt: "Delapan tim siap bertarung di babak perempat final. Para pelatih mulai meracik strategi spesial untuk menghadapi lawan masing-masing. Manchester City vs Real Madrid menjadi laga paling dinantikan.",
            image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 4,
            title: "Jadwal Piala Dunia 2026 Resmi Dirilis FIFA",
            date: "8 Maret 2024",
            category: "piala-dunia",
            categoryName: "Piala Dunia",
            excerpt: "FIFA resmi mengumumkan jadwal lengkap pertandingan Piala Dunia 2026 yang akan digelar di 16 kota di Amerika Serikat, Kanada, dan Meksiko. Pembukaan akan berlangsung di Mexico City.",
            image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 5,
            title: "Manchester United Incar Striker Muda Brasil",
            date: "5 Maret 2024",
            category: "transfer",
            categoryName: "Transfer",
            excerpt: "Setan Merah siapkan dana besar untuk mendatangkan striker muda berbakat asal Brasil yang menjadi incaran banyak klub Eropa. Nilai transfer dikabarkan mencapai 100 juta euro.",
            image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 6,
            title: "Real Madrid Lolos ke Semifinal UCL",
            date: "3 Maret 2024",
            category: "ucl",
            categoryName: "Liga Champions",
            excerpt: "Real Madrid berhasil melaju ke babak semifinal setelah kemenangan dramatis 3-1 atas rival sekota Atletico Madrid di leg kedua. Gol bunuh diri di menit akhir memastikan kemenangan Los Blancos.",
            image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 7,
            title: "Piala Dunia 2026 Akan Gunakan Teknologi Offside Otomatis",
            date: "1 Maret 2024",
            category: "piala-dunia",
            categoryName: "Piala Dunia",
            excerpt: "FIFA mengumumkan akan menggunakan teknologi offside otomatis terbaru untuk membantu wasit mengambil keputusan lebih akurat. Teknologi ini sudah diuji coba di Piala Dunia 2022.",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 8,
            title: "Liverpool Kejar Gelandang Muda Portugal",
            date: "28 Februari 2024",
            category: "transfer",
            categoryName: "Transfer",
            excerpt: "Liverpool dikabarkan siap mengaktifkan klausul rilis gelandang muda Portugal yang tampil impresif musim ini. Klub asal Merseyside itu siap bersaing dengan Manchester City.",
            image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 9,
            title: "Bayern Munich Tersingkir dari UCL",
            date: "25 Februari 2024",
            category: "ucl",
            categoryName: "Liga Champions",
            excerpt: "Bayern Munich harus mengakui keunggulan lawan setelah bermain imbang di kandang dan kalah agregat 3-2. Ini menjadi kegagalan pertama Bayern dalam 5 tahun terakhir.",
            image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 10,
            title: "Tiket Piala Dunia 2026 Mulai Dijual",
            date: "20 Februari 2024",
            category: "piala-dunia",
            categoryName: "Piala Dunia",
            excerpt: "FIFA mengumumkan penjualan tiket Piala Dunia 2026 akan dimulai pada bulan depan. Harga tiket bervariasi mulai dari $50 hingga $2000 untuk kategori final.",
            image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 11,
            title: "PSG Incar Bek Tengah Juventus",
            date: "18 Februari 2024",
            category: "transfer",
            categoryName: "Transfer",
            excerpt: "PSG siap mengeluarkan dana besar untuk mendatangkan bek tengah andalan Juventus. Pemain asal Belanda itu menjadi target utama Les Parisiens.",
            image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 12,
            title: "Piala Dunia 2026: Format Baru 12 Grup",
            date: "15 Februari 2024",
            category: "piala-dunia",
            categoryName: "Piala Dunia",
            excerpt: "FIFA mengonfirmasi format baru Piala Dunia 2026 akan menggunakan 12 grup yang masing-masing berisi 4 tim. 16 tim terbaik akan lolos ke babak knock-out.",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop",
            link: "#"
        }
    ];
    
    // ========== RENDER NEWS (untuk halaman berita) ==========
    const newsGrid = document.getElementById('newsGrid');
    if (newsGrid) {
        let currentFilter = "all";
        let visibleCount = 6;
        
        function renderNews() {
            let filtered = newsData;
            if (currentFilter !== "all") {
                filtered = newsData.filter(news => news.category === currentFilter);
            }
            const displayed = filtered.slice(0, visibleCount);
            
            newsGrid.innerHTML = displayed.map(news => `
                <div class="news-card">
                    <img src="${news.image}" alt="${news.title}" loading="lazy">
                    <div class="news-content">
                        <span class="news-tag">${news.categoryName}</span>
                        <div class="news-date">
                            <i class="far fa-calendar-alt"></i>
                            <span>${news.date}</span>
                        </div>
                        <h3>${news.title}</h3>
                        <p>${news.excerpt.substring(0, 120)}...</p>
                        <a href="${news.link}" class="read-more">
                            Baca Selengkapnya <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `).join('');
            
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (loadMoreBtn) {
                if (visibleCount >= filtered.length) {
                    loadMoreBtn.style.display = "none";
                } else {
                    loadMoreBtn.style.display = "inline-flex";
                }
            }
        }
        
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                visibleCount += 3;
                renderNews();
            });
        }
        
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.getAttribute('data-filter');
                visibleCount = 6;
                renderNews();
            });
        });
        
        renderNews();
    }
    
    // ========== SOCIAL DATA (6 Platform) ==========
    const socialData = [
        {
            name: "Komunitas Facebook",
            desc: "Live streaming pertandingan, diskusi eksklusif, dan polling prediksi skor bersama jutaan fans.",
            icon: "fb",
            link: "https://www.facebook.com/InfoBolaHarian2",
            btnText: "Join Group"
        },
        {
            name: "Instagram",
            desc: "Behind the scene, reels eksklusif, story pemain bintang, dan konten visual premium setiap hari.",
            icon: "ig",
            link: "https://www.instagram.com/duniasepakbola.2/",
            btnText: "Follow"
        },
        {
            name: "TikTok",
            desc: "Challenge viral, konten kreatif, dan momen-momen lucu dari balik layar Piala Dunia.",
            icon: "tt",
            link: "https://www.tiktok.com/@duniasepakbola.2",
            btnText: "Ikuti"
        },
        {
            name: "Discord",
            desc: "Voice chat langsung dengan fans global, sesi AMA dengan legenda sepakbola.",
            icon: "dc",
            link: "https://discord.gg/ys7ac44P",
            btnText: "Join Server"
        },
        {
            name: "YouTube",
            desc: "Dokumenter 4K, analisis taktik mendalam, wawancara eksklusif dengan pemain bintang.",
            icon: "yt",
            link: "https://www.youtube.com/@DuniSepakBola.2",
            btnText: "Subscribe"
        },
        {
            name: "Telegram",
            desc: "Notifikasi real-time skor, lineup, berita breaking, dan update langsung ke HP Anda.",
            icon: "tg",
            link: "https://t.me/DuniaSepakBola2",
            btnText: "Join Channel"
        }
    ];
    
    // ========== RENDER SOCIAL (untuk halaman social) ==========
    const socialGrid = document.getElementById('socialGrid');
    if (socialGrid) {
        socialGrid.innerHTML = socialData.map(soc => {
            let faIcon = '';
            if (soc.icon === 'fb') faIcon = 'facebook-f';
            else if (soc.icon === 'ig') faIcon = 'instagram';
            else if (soc.icon === 'tt') faIcon = 'tiktok';
            else if (soc.icon === 'dc') faIcon = 'discord';
            else if (soc.icon === 'yt') faIcon = 'youtube';
            else faIcon = 'telegram';
            
            return `
                <div class="platform-card">
                    <div class="platform-icon ${soc.icon}">
                        <i class="fab fa-${faIcon}"></i>
                    </div>
                    <h4>${soc.name}</h4>
                    <p>${soc.desc}</p>
                    <a href="${soc.link}" target="_blank" class="platform-btn">${soc.btnText} →</a>
                </div>
            `;
        }).join('');
    }
    
    // ========== PREVENT DEFAULT FOR EMPTY LINKS ==========
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => e.preventDefault());
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
    
    // ========== INTERSECTION OBSERVER (Scroll Animation) ==========
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
    
    document.querySelectorAll('.host-card, .fact-card, .stadium-card, .news-card, .platform-card, .featured-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.5s ease-out';
        observer.observe(el);
    });
    
    // ========== LOGO CLICK BACK TO HOME ==========
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
    
    // ========== ADD TOUCH OPTIMIZATION ==========
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // ========== STICKY HEADER HANDLING ==========
    let lastScroll = 0;
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        });
    }
    
    console.log('Piala Dunia 2026 Official Hub - Fully Loaded!');
});
