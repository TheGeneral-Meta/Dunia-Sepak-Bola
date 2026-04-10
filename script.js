// ========================================
// PIALA DUNIA 2026 - MAIN JAVASCRIPT
// Fully Functional & Optimized
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== COUNTDOWN TIMER ==========
    const daysEl = document.getElementById('days');
    if (daysEl) {
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
    }

    // ========== NEWS DATA ==========
    const newsData = [
        {
            id: 1,
            title: "Stadion Megah Piala Dunia 2026 Mulai Rampung",
            date: "15 Maret 2024",
            category: "piala-dunia",
            categoryName: "Piala Dunia",
            excerpt: "Progres pembangunan 16 stadion di tiga negara tuan rumah mencapai 85%. Stadion ikonik seperti MetLife Stadium dan SoFi Stadium hampir selesai direnovasi.",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 2,
            title: "Bursa Transfer: Target Utama Klub-klub Eropa",
            date: "12 Maret 2024",
            category: "transfer",
            categoryName: "Transfer",
            excerpt: "Bintang muda mulai menjadi incaran klub-klub top Eropa. Nilai transfer diprediksi tembus rekor baru menjelang musim panas 2024.",
            image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 3,
            title: "Perempat Final Liga Champions: Analisis Taktik",
            date: "10 Maret 2024",
            category: "ucl",
            categoryName: "Liga Champions",
            excerpt: "Delapan tim siap bertarung di babak perempat final. Para pelatih mulai meracik strategi spesial untuk menghadapi lawan masing-masing.",
            image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 4,
            title: "Jadwal Piala Dunia 2026 Resmi Dirilis FIFA",
            date: "8 Maret 2024",
            category: "piala-dunia",
            categoryName: "Piala Dunia",
            excerpt: "FIFA resmi mengumumkan jadwal lengkap pertandingan Piala Dunia 2026 yang akan digelar di 16 kota di Amerika Serikat, Kanada, dan Meksiko.",
            image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 5,
            title: "Manchester United Incar Striker Muda Brasil",
            date: "5 Maret 2024",
            category: "transfer",
            categoryName: "Transfer",
            excerpt: "Setan Merah siapkan dana besar untuk mendatangkan striker muda berbakat asal Brasil yang menjadi incaran banyak klub Eropa.",
            image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 6,
            title: "Real Madrid Lolos ke Semifinal UCL",
            date: "3 Maret 2024",
            category: "ucl",
            categoryName: "Liga Champions",
            excerpt: "Real Madrid berhasil melaju ke babak semifinal setelah kemenangan dramatis 3-1 atas rival sekota Atletico Madrid di leg kedua.",
            image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 7,
            title: "Piala Dunia 2026 Akan Gunakan Teknologi Offside Otomatis",
            date: "1 Maret 2024",
            category: "piala-dunia",
            categoryName: "Piala Dunia",
            excerpt: "FIFA mengumumkan akan menggunakan teknologi offside otomatis terbaru untuk membantu wasit mengambil keputusan lebih akurat.",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 8,
            title: "Liverpool Kejar Gelandang Muda Portugal",
            date: "28 Februari 2024",
            category: "transfer",
            categoryName: "Transfer",
            excerpt: "Liverpool dikabarkan siap mengaktifkan klausul rilis gelandang muda Portugal yang tampil impresif musim ini.",
            image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 9,
            title: "Bayern Munich Tersingkir dari UCL",
            date: "25 Februari 2024",
            category: "ucl",
            categoryName: "Liga Champions",
            excerpt: "Bayern Munich harus mengakui keunggulan lawan setelah bermain imbang di kandang dan kalah agregat.",
            image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop",
            link: "#"
        }
    ];

    // ========== RENDER NEWS (hanya jika ada newsGrid) ==========
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
                <article class="news-card">
                    <div class="news-image">
                        <img src="${news.image}" alt="${news.title}" loading="lazy">
                        <span class="news-tag-badge">${news.categoryName}</span>
                    </div>
                    <div class="news-content">
                        <div class="news-date">
                            <i class="far fa-calendar-alt"></i>
                            <span>${news.date}</span>
                        </div>
                        <h3 class="news-title">${news.title}</h3>
                        <p class="news-excerpt">${news.excerpt}</p>
                        <a href="${news.link}" class="read-more">
                            Baca Selengkapnya
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </article>
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
        
        // Load More Button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                visibleCount += 3;
                renderNews();
            });
        }
        
        // Filter Chips
        const filterChips = document.querySelectorAll('.filter-chip');
        filterChips.forEach(chip => {
            chip.addEventListener('click', function() {
                filterChips.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.getAttribute('data-filter');
                visibleCount = 6;
                renderNews();
            });
        });
        
        renderNews();
    }

    // ========== SOCIAL MEDIA DATA ==========
    const socialData = [
        { name: "Komunitas Facebook", desc: "Live streaming pertandingan, diskusi eksklusif, dan polling prediksi skor bersama jutaan fans.", icon: "fb", iconClass: "fab fa-facebook-f", link: "https://www.facebook.com/InfoBolaHarian2", btnText: "Join Group" },
        { name: "Instagram", desc: "Behind the scene, reels eksklusif, story pemain bintang, dan konten visual premium setiap hari.", icon: "ig", iconClass: "fab fa-instagram", link: "https://www.instagram.com/duniasepakbola.2/", btnText: "Follow" },
        { name: "TikTok", desc: "Challenge viral, konten kreatif, dan momen-momen lucu dari balik layar Piala Dunia.", icon: "tt", iconClass: "fab fa-tiktok", link: "https://www.tiktok.com/@duniasepakbola.2", btnText: "Ikuti" },
        { name: "Discord", desc: "Voice chat langsung dengan fans global, sesi AMA dengan legenda sepakbola.", icon: "dc", iconClass: "fab fa-discord", link: "https://discord.gg/ys7ac44P", btnText: "Join Server" },
        { name: "YouTube", desc: "Dokumenter 4K, analisis taktik mendalam, wawancara eksklusif dengan pemain bintang.", icon: "yt", iconClass: "fab fa-youtube", link: "https://www.youtube.com/@DuniSepakBola.2", btnText: "Subscribe" },
        { name: "Telegram", desc: "Notifikasi real-time skor, lineup, berita breaking, dan update langsung ke HP Anda.", icon: "tg", iconClass: "fab fa-telegram", link: "https://t.me/DuniaSepakBola2", btnText: "Join Channel" }
    ];
    
    // ========== RENDER SOCIAL (hanya jika ada socialGrid) ==========
    const socialGrid = document.getElementById('socialGrid');
    if (socialGrid) {
        function renderSocial() {
            socialGrid.innerHTML = socialData.map(soc => `
                <div class="social-platform-card">
                    <div class="platform-icon ${soc.icon}">
                        <i class="${soc.iconClass}"></i>
                    </div>
                    <h3 class="platform-name">${soc.name}</h3>
                    <p class="platform-desc">${soc.desc}</p>
                    <a href="${soc.link}" target="_blank" class="platform-btn">${soc.btnText} <i class="fas fa-arrow-right"></i></a>
                </div>
            `).join('');
        }
        renderSocial();
    }
    
    // ========== ANIMATION ON SCROLL ==========
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
    
    document.querySelectorAll('.countdown-card, .host-card, .fact-item, .news-card, .social-platform-card, .featured-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
    
    // ========== PREVENT DEFAULT FOR EMPTY LINKS ==========
    document.querySelectorAll('.read-more, .platform-btn, .featured-card').forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', (e) => e.preventDefault());
        }
    });
    
    // ========== ADD TOUCH OPTIMIZATION FOR MOBILE ==========
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // ========== LOGO CLICK BACK TO HOME ==========
    const logoArea = document.querySelector('.logo-area');
    if (logoArea) {
        logoArea.style.cursor = 'pointer';
        logoArea.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
    
    console.log('Piala Dunia 2026 Official Hub - Ready!');
});
