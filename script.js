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
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // ========== COUNTDOWN ==========
    const daysEl = document.getElementById('days');
    if (daysEl) {
        function updateCountdown() {
            const target = new Date('June 8, 2026 00:00:00').getTime();
            const now = new Date().getTime();
            const diff = target - now;
            
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
        }
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }
    
    // ========== NEWS DATA ==========
    const newsData = [
        { id: 1, title: "Stadion Megah Piala Dunia 2026 Mulai Rampung", date: "15 Maret 2024", category: "piala-dunia", catName: "Piala Dunia", excerpt: "Progres pembangunan 16 stadion di tiga negara tuan rumah mencapai 85%. Stadion ikonik seperti MetLife Stadium dan SoFi Stadium hampir selesai direnovasi.", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=300&fit=crop" },
        { id: 2, title: "Bursa Transfer: Target Utama Klub-klub Eropa", date: "12 Maret 2024", category: "transfer", catName: "Transfer", excerpt: "Bintang muda mulai menjadi incaran klub-klub top Eropa. Nilai transfer diprediksi tembus rekor baru menjelang musim panas 2024.", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&h=300&fit=crop" },
        { id: 3, title: "Perempat Final Liga Champions: Analisis Taktik", date: "10 Maret 2024", category: "ucl", catName: "Liga Champions", excerpt: "Delapan tim siap bertarung di babak perempat final. Para pelatih mulai meracik strategi spesial untuk menghadapi lawan masing-masing.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop" },
        { id: 4, title: "Jadwal Piala Dunia 2026 Resmi Dirilis FIFA", date: "8 Maret 2024", category: "piala-dunia", catName: "Piala Dunia", excerpt: "FIFA resmi mengumumkan jadwal lengkap pertandingan Piala Dunia 2026 yang akan digelar di 16 kota di Amerika Serikat, Kanada, dan Meksiko.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop" },
        { id: 5, title: "Manchester United Incar Striker Muda Brasil", date: "5 Maret 2024", category: "transfer", catName: "Transfer", excerpt: "Setan Merah siapkan dana besar untuk mendatangkan striker muda berbakat asal Brasil yang menjadi incaran banyak klub Eropa.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop" },
        { id: 6, title: "Real Madrid Lolos ke Semifinal UCL", date: "3 Maret 2024", category: "ucl", catName: "Liga Champions", excerpt: "Real Madrid berhasil melaju ke babak semifinal setelah kemenangan dramatis 3-1 atas rival sekota Atletico Madrid di leg kedua.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop" },
        { id: 7, title: "Piala Dunia 2026 Akan Gunakan Teknologi Offside Otomatis", date: "1 Maret 2024", category: "piala-dunia", catName: "Piala Dunia", excerpt: "FIFA mengumumkan akan menggunakan teknologi offside otomatis terbaru untuk membantu wasit mengambil keputusan lebih akurat.", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=300&fit=crop" },
        { id: 8, title: "Liverpool Kejar Gelandang Muda Portugal", date: "28 Februari 2024", category: "transfer", catName: "Transfer", excerpt: "Liverpool dikabarkan siap mengaktifkan klausul rilis gelandang muda Portugal yang tampil impresif musim ini.", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&h=300&fit=crop" },
        { id: 9, title: "Bayern Munich Tersingkir dari UCL", date: "25 Februari 2024", category: "ucl", catName: "Liga Champions", excerpt: "Bayern Munich harus mengakui keunggulan lawan setelah bermain imbang di kandang dan kalah agregat 3-2.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500&h=300&fit=crop" }
    ];
    
    // ========== RENDER NEWS ==========
    const newsGrid = document.getElementById('newsGrid');
    if (newsGrid) {
        let currentFilter = "all";
        let visibleCount = 6;
        
        function renderNews() {
            let filtered = newsData;
            if (currentFilter !== "all") {
                filtered = newsData.filter(n => n.category === currentFilter);
            }
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
    const socialData = [
        { name: "Komunitas Facebook", desc: "Live streaming, diskusi eksklusif, polling prediksi skor.", icon: "fb", link: "#", btn: "Join Group" },
        { name: "Instagram", desc: "Behind the scene, reels, story eksklusif pemain bintang.", icon: "ig", link: "#", btn: "Follow" },
        { name: "TikTok", desc: "Challenge viral, konten kreatif, momen lucu balik layar.", icon: "tt", link: "#", btn: "Ikuti" },
        { name: "Discord", desc: "Voice chat fans global, AMA dengan legenda sepakbola.", icon: "dc", link: "#", btn: "Join Server" },
        { name: "YouTube", desc: "Dokumenter 4K, analisis taktik, wawancara eksklusif.", icon: "yt", link: "#", btn: "Subscribe" },
        { name: "Telegram", desc: "Notifikasi real-time skor, lineup, berita breaking.", icon: "tg", link: "#", btn: "Join Channel" }
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
                    <div class="social-icon ${s.icon}"><i class="fab fa-${faIcon}"></i></div>
                    <h4>${s.name}</h4>
                    <p>${s.desc}</p>
                    <a href="${s.link}" class="social-btn">${s.btn} →</a>
                </div>
            `;
        }).join('');
    }
    
    // ========== PREVENT EMPTY LINKS ==========
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
    
    // ========== LOGO CLICK ==========
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
    
    console.log('Piala Dunia 2026 Official Hub - Siap digunakan!');
});
