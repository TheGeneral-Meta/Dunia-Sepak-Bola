// ============================================
// PIALA DUNIA 2026 - MAIN JAVASCRIPT
// Mobile Friendly + Desktop Optimal
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== COUNTDOWN ==========
    const daysEl = document.getElementById('days');
    if (daysEl) {
        function updateCountdown() {
            const target = new Date('June 8, 2026 00:00:00').getTime();
            const now = new Date().getTime();
            const diff = target - now;
            
            if (diff <= 0) {
                document.getElementById('days').innerText = '0';
                document.getElementById('hours').innerText = '00';
                document.getElementById('minutes').innerText = '00';
                document.getElementById('seconds').innerText = '00';
                clearInterval(interval);
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (86400000)) / (3600000));
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = String(hours).padStart(2, '0');
            document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
            document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
        }
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }

    // ========== NEWS DATA ==========
    const newsData = [
        { id: 1, title: "Stadion Megah Piala Dunia 2026 Mulai Rampung", date: "15 Maret 2024", category: "piala-dunia", catName: "Piala Dunia", excerpt: "Progres 16 stadion di tiga negara mencapai 85%, siap menyambut jutaan fans.", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=300&fit=crop", link: "#" },
        { id: 2, title: "Bursa Transfer: Target Utama Klub Eropa", date: "12 Maret 2024", category: "transfer", catName: "Transfer", excerpt: "Bintang muda mulai jadi incaran klub-klub top Eropa.", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&h=300&fit=crop", link: "#" },
        { id: 3, title: "Perempat Final UCL: Analisis Taktik", date: "10 Maret 2024", category: "ucl", catName: "Liga Champions", excerpt: "Delapan tim siap bertarung di babak perempat final.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop", link: "#" },
        { id: 4, title: "Jadwal Piala Dunia 2026 Resmi Dirilis", date: "8 Maret 2024", category: "piala-dunia", catName: "Piala Dunia", excerpt: "FIFA mengumumkan jadwal lengkap pertandingan di 16 kota.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop", link: "#" },
        { id: 5, title: "Manchester United Incar Striker Muda Brasil", date: "5 Maret 2024", category: "transfer", catName: "Transfer", excerpt: "Setan Merah siapkan dana besar untuk bintang baru.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop", link: "#" },
        { id: 6, title: "Real Madrid Lolos ke Semifinal UCL", date: "3 Maret 2024", category: "ucl", catName: "Liga Champions", excerpt: "Real Madrid melaju setelah kemenangan dramatis.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop", link: "#" }
    ];

    // ========== RENDER NEWS ==========
    const newsList = document.getElementById('newsList');
    if (newsList) {
        let currentFilter = "all";
        let visibleCount = 3;
        
        function renderNews() {
            let filtered = newsData;
            if (currentFilter !== "all") {
                filtered = newsData.filter(n => n.category === currentFilter);
            }
            const displayed = filtered.slice(0, visibleCount);
            
            newsList.innerHTML = displayed.map(news => `
                <div class="news-card">
                    <img class="news-img" src="${news.image}" alt="${news.title}" loading="lazy">
                    <div class="news-content">
                        <span class="news-tag">${news.catName}</span>
                        <div class="news-date"><i class="far fa-calendar"></i> ${news.date}</div>
                        <h3>${news.title}</h3>
                        <p>${news.excerpt}</p>
                        <a href="${news.link}" class="read-more">Baca Selengkapnya →</a>
                    </div>
                </div>
            `).join('');
            
            const btn = document.getElementById('loadMoreBtn');
            if (btn) {
                if (visibleCount >= filtered.length) btn.style.display = "none";
                else btn.style.display = "inline-block";
            }
        }
        
        const loadBtn = document.getElementById('loadMoreBtn');
        if (loadBtn) {
            loadBtn.addEventListener('click', () => {
                visibleCount += 3;
                renderNews();
            });
        }
        
        const filters = document.querySelectorAll('.filter-chip');
        filters.forEach(f => {
            f.addEventListener('click', function() {
                filters.forEach(ff => ff.classList.remove('active'));
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
        { name: "Facebook Group", desc: "Live streaming, diskusi eksklusif, polling prediksi skor.", icon: "fb", link: "#", btn: "Join Group" },
        { name: "Instagram", desc: "Behind the scene, reels, story eksklusif pemain bintang.", icon: "ig", link: "#", btn: "Follow" },
        { name: "TikTok", desc: "Challenge viral, konten kreatif, momen lucu balik layar.", icon: "tt", link: "#", btn: "Ikuti" },
        { name: "Discord", desc: "Voice chat fans global, AMA dengan legenda sepakbola.", icon: "dc", link: "#", btn: "Join Server" },
        { name: "YouTube", desc: "Dokumenter 4K, analisis taktik, wawancara eksklusif.", icon: "yt", link: "#", btn: "Subscribe" },
        { name: "Telegram", desc: "Notifikasi real-time skor, lineup, berita breaking.", icon: "tg", link: "#", btn: "Join Channel" }
    ];
    
    const socialList = document.getElementById('socialList');
    if (socialList) {
        socialList.innerHTML = socialData.map(s => {
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
                    <div class="social-icon ${s.icon}"><i class="fab fa-${faIcon}"></i></div>
                    <div class="social-info">
                        <h4>${s.name}</h4>
                        <p>${s.desc}</p>
                    </div>
                    <a href="${s.link}" class="social-btn">${s.btn} →</a>
                </div>
            `;
        }).join('');
    }
    
    // ========== PREVENT EMPTY LINKS ==========
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
    
    console.log('Piala Dunia 2026 - Ready! Mobile friendly + Desktop optimal');
});
