// ============================================
// PIALA DUNIA 2026 - MAIN JAVASCRIPT
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
        
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }
    
    if (document.getElementById('days')) {
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
            excerpt: "Bayern Munich harus mengakui keunggulan lawan setelah bermain imbang di kandang dan kalah agregat 3-2.",
            image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop",
            link: "#"
        }
    ];
    
    // ========== RENDER NEWS ==========
    const newsGrid = document.getElementById('newsGrid');
    if (newsGrid) {
        let currentFilter = "all";
        let visibleCount = 3;
        
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
                        <p>${news.excerpt}</p>
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
        
        renderNews();
    }
    
    // ========== SOCIAL DATA ==========
    const socialData = [
        { name: "Komunitas Facebook", desc: "Live streaming, diskusi eksklusif, polling prediksi skor.", icon: "fb", link: "https://www.facebook.com/InfoBolaHarian2", btn: "Join Group" },
        { name: "Instagram", desc: "Behind the scene, reels, story eksklusif pemain bintang.", icon: "ig", link: "https://www.instagram.com/duniasepakbola.2/", btn: "Follow" },
        { name: "TikTok", desc: "Challenge viral, konten kreatif, momen lucu balik layar.", icon: "tt", link: "https://www.tiktok.com/@duniasepakbola.2", btn: "Ikuti" },
        { name: "Discord", desc: "Voice chat fans global, AMA dengan legenda sepakbola.", icon: "dc", link: "https://discord.gg/ys7ac44P", btn: "Join Server" },
        { name: "YouTube", desc: "Dokumenter 4K, analisis taktik, wawancara eksklusif.", icon: "yt", link: "https://www.youtube.com/@DuniSepakBola.2", btn: "Subscribe" },
        { name: "Telegram", desc: "Notifikasi real-time skor, lineup, berita breaking.", icon: "tg", link: "https://t.me/DuniaSepakBola2", btn: "Join Channel" }
    ];
    
    const socialGrid = document.getElementById('socialGrid');
    if (socialGrid) {
        socialGrid.innerHTML = socialData.map(s => {
            let iconName = s.icon;
            let faIcon = '';
            if (iconName === 'fb') faIcon = 'facebook-f';
            else if (iconName === 'ig') faIcon = 'instagram';
            else if (iconName === 'tt') faIcon = 'tiktok';
            else if (iconName === 'dc') faIcon = 'discord';
            else if (iconName === 'yt') faIcon = 'youtube';
            else faIcon = 'telegram';
            
            return `
                <div class="social-card">
                    <div class="social-icon-bg ${s.icon}">
                        <i class="fab fa-${faIcon}"></i>
                    </div>
                    <h4>${s.name}</h4>
                    <p>${s.desc}</p>
                    <a href="${s.link}" target="_blank" class="social-btn">${s.btn} →</a>
                </div>
            `;
        }).join('');
    }
    
    // ========== PREVENT EMPTY LINKS ==========
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
    
    console.log('Piala Dunia 2026 - Ready!');
});
