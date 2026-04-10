// ============================================
// PIALA DUNIA 2026 - MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MOBILE MENU ==========
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');
    const overlay = document.getElementById('overlay');
    
    if (mobileBtn && mobileMenu && overlay) {
        const toggleMenu = (show) => {
            mobileMenu.classList.toggle('active', show);
            overlay.classList.toggle('active', show);
            document.body.style.overflow = show ? 'hidden' : '';
        };
        
        mobileBtn.addEventListener('click', () => toggleMenu(true));
        if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
        overlay.addEventListener('click', () => toggleMenu(false));
    }
    
    // ========== COUNTDOWN TIMER ==========
    const daysEl = document.getElementById('days');
    if (daysEl) {
        const targetDate = new Date('June 8, 2026 00:00:00').getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const diff = targetDate - now;
            
            if (diff <= 0) {
                daysEl.innerText = '0';
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
            
            daysEl.innerText = days;
            document.getElementById('hours').innerText = String(hours).padStart(2, '0');
            document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
            document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
            
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                const totalDays = 365;
                const elapsed = totalDays - days;
                const progress = (elapsed / totalDays) * 100;
                progressBar.style.width = Math.min(progress, 100) + '%';
            }
        }
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }
    
    // ========== REMIND ME BUTTON ==========
    const remindBtn = document.getElementById('remindBtn');
    if (remindBtn) {
        remindBtn.addEventListener('click', () => {
            alert('✅ Anda akan diingatkan 1 hari sebelum Piala Dunia 2026 dimulai!');
        });
    }
    
    // ========== NEWS DATA ==========
    const newsData = [
        { id: 1, title: "Stadion Megah Piala Dunia 2026 Mulai Rampung", date: "15 Maret 2024", category: "piala-dunia", catName: "Piala Dunia", excerpt: "Progres pembangunan 16 stadion di tiga negara tuan rumah mencapai 85%. Stadion ikonik seperti MetLife Stadium dan SoFi Stadium hampir selesai direnovasi.", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=300&fit=crop" },
        { id: 2, title: "Bursa Transfer: Target Utama Klub-klub Eropa", date: "12 Maret 2024", category: "transfer", catName: "Transfer", excerpt: "Bintang muda mulai menjadi incaran klub-klub top Eropa. Nilai transfer diprediksi tembus rekor baru menjelang musim panas 2024.", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&h=300&fit=crop" },
        { id: 3, title: "Perempat Final Liga Champions: Analisis Taktik", date: "10 Maret 2024", category: "ucl", catName: "Liga Champions", excerpt: "Delapan tim siap bertarung di babak perempat final. Para pelatih mulai meracik strategi spesial untuk menghadapi lawan masing-masing.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop" },
        { id: 4, title: "Jadwal Piala Dunia 2026 Resmi Dirilis FIFA", date: "8 Maret 2024", category: "piala-dunia", catName: "Piala Dunia", excerpt: "FIFA resmi mengumumkan jadwal lengkap pertandingan Piala Dunia 2026 yang akan digelar di 16 kota di Amerika Serikat, Kanada, dan Meksiko.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop" },
        { id: 5, title: "Manchester United Incar Striker Muda Brasil", date: "5 Maret 2024", category: "transfer", catName: "Transfer", excerpt: "Setan Merah siapkan dana besar untuk mendatangkan striker muda berbakat asal Brasil yang menjadi incaran banyak klub Eropa.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop" },
        { id: 6, title: "Real Madrid Lolos ke Semifinal UCL", date: "3 Maret 2024", category: "ucl", catName: "Liga Champions", excerpt: "Real Madrid berhasil melaju ke babak semifinal setelah kemenangan dramatis 3-1 atas rival sekota Atletico Madrid di leg kedua.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop" }
    ];
    
    // ========== RENDER NEWS ==========
    const newsGrid = document.getElementById('newsGrid');
    if (newsGrid) {
        let currentFilter = "all";
        let visibleCount = 6;
        
        function getFilteredNews() {
            if (currentFilter === "all") return newsData;
            return newsData.filter(n => n.category === currentFilter);
        }
        
        function updateNewsStats() {
            const total = getFilteredNews().length;
            const statsSpan = document.getElementById('totalNews');
            if (statsSpan) statsSpan.innerText = total;
        }
        
        function renderNews() {
            const filtered = getFilteredNews();
            const displayed = filtered.slice(0, visibleCount);
            
            newsGrid.innerHTML = displayed.map(news => `
                <div class="news-card">
                    <img src="${news.image}" alt="${news.title}" loading="lazy">
                    <div class="news-content">
                        <span class="news-tag">${news.catName}</span>
                        <div class="news-date"><i class="far fa-calendar-alt"></i> ${news.date}</div>
                        <h3>${news.title}</h3>
                        <p>${news.excerpt.substring(0, 100)}...</p>
                        <a href="#" class="read-more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `).join('');
            
            updateNewsStats();
            
            const loadBtn = document.getElementById('loadMoreBtn');
            if (loadBtn) {
                if (visibleCount >= filtered.length) loadBtn.style.display = "none";
                else loadBtn.style.display = "inline-flex";
            }
        }
        
        const loadBtn = document.getElementById('loadMoreBtn');
        if (loadBtn) {
            loadBtn.addEventListener('click', () => {
                visibleCount += 3;
                renderNews();
            });
        }
        
        const filters = document.querySelectorAll('.filter');
        filters.forEach(f => {
            f.addEventListener('click', function() {
                filters.forEach(ff => ff.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.getAttribute('data-filter');
                visibleCount = 6;
                renderNews();
            });
        });
        
        renderNews();
    }
    
    // ========== SOCIAL DATA ==========
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
            let faIcon = '';
            if (s.icon === 'fb') faIcon = 'facebook-f';
            else if (s.icon === 'ig') faIcon = 'instagram';
            else if (s.icon === 'tt') faIcon = 'tiktok';
            else if (s.icon === 'dc') faIcon = 'discord';
            else if (s.icon === 'yt') faIcon = 'youtube';
            else faIcon = 'telegram';
            
            return `
                <div class="social-card">
                    <div class="social-icon ${s.icon}">
                        <i class="fab fa-${faIcon}"></i>
                    </div>
                    <h4>${s.name}</h4>
                    <p>${s.desc}</p>
                    <a href="${s.link}" target="_blank" class="social-btn">${s.btn} →</a>
                </div>
            `;
        }).join('');
    }
    
    // ========== BACK TO TOP ==========
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('show', window.pageYOffset > 300);
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ========== LOGO CLICK ==========
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
    
    // ========== PREVENT EMPTY LINKS ==========
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
    
    console.log('Piala Dunia 2026 Official Hub - Fully Loaded!');
});
