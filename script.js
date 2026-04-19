// ============================================
// PIALA DUNIA 2026 - FIXED DENGAN RSS FEED (NO CORS!)
// ============================================

// KONFIGURASI RSS WORDPRESS (tidak kena CORS)
const RSS_URL = 'https://newspialadunia.page.gd/feed/';
let newsData = [];
let currentFilter = "all";
let visibleCount = 6;

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
    
    // ========== AMBIL BERITA VIA RSS FEED (NO CORS!) ==========
    async function fetchNewsFromRSS() {
        try {
            const newsGrid = document.getElementById('newsGrid');
            const newsPreview = document.getElementById('newsPreview');
            
            if (newsGrid) newsGrid.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Memuat berita...</div>';
            if (newsPreview) newsPreview.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Memuat berita terbaru...</div>';
            
            // Gunakan layanan RSS to JSON gratis (no CORS!)
            const proxyUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
            const response = await fetch(proxyUrl + encodeURIComponent(RSS_URL));
            const data = await response.json();
            
            if (data.status === 'ok' && data.items && data.items.length > 0) {
                newsData = data.items.map(item => {
                    // Ambil gambar dari konten (jika ada)
                    let imageUrl = 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=300&fit=crop';
                    const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
                    if (imgMatch && imgMatch[1]) imageUrl = imgMatch[1];
                    
                    // Format tanggal Indonesia
                    const date = new Date(item.pubDate);
                    const formattedDate = date.toLocaleDateString('id-ID', {
                        day: 'numeric', month: 'long', year: 'numeric'
                    });
                    
                    // Bersihkan konten dari HTML untuk excerpt
                    let excerpt = item.content.replace(/<[^>]*>/g, '').substring(0, 150);
                    if (excerpt === '') excerpt = item.description.replace(/<[^>]*>/g, '').substring(0, 150);
                    
                    return {
                        id: item.guid,
                        title: item.title,
                        date: formattedDate,
                        category: 'piala-dunia',
                        catName: 'Piala Dunia',
                        excerpt: excerpt,
                        image: imageUrl,
                        link: item.link
                    };
                });
                
                renderAllNewsSections();
            } else {
                throw new Error('Gagal mengambil RSS feed');
            }
            
        } catch (error) {
            console.error('Error fetching RSS:', error);
            const newsGrid = document.getElementById('newsGrid');
            const newsPreview = document.getElementById('newsPreview');
            if (newsGrid) newsGrid.innerHTML = '<div class="error-msg"><i class="fas fa-exclamation-triangle"></i> Gagal memuat berita. Coba refresh halaman.</div>';
            if (newsPreview) newsPreview.innerHTML = '<div class="error-msg"><i class="fas fa-exclamation-triangle"></i> Gagal memuat berita terbaru.</div>';
        }
    }
    
    // Render di halaman berita (newsGrid)
    function renderNewsGrid() {
        const newsGrid = document.getElementById('newsGrid');
        if (!newsGrid) return;
        
        const filtered = newsData;
        const displayed = filtered.slice(0, visibleCount);
        
        if (displayed.length === 0) {
            newsGrid.innerHTML = '<div class="no-news"><i class="fas fa-newspaper"></i> Belum ada berita. Buat postingan pertama di WordPress!</div>';
        } else {
            newsGrid.innerHTML = displayed.map(news => `
                <div class="news-card">
                    <img src="${news.image}" alt="${news.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=300&fit=crop'">
                    <div class="news-content">
                        <span class="news-tag">${news.catName}</span>
                        <div class="news-date"><i class="far fa-calendar-alt"></i> ${news.date}</div>
                        <h3>${news.title}</h3>
                        <p>${news.excerpt.substring(0, 100)}...</p>
                        <a href="${news.link}" target="_blank" class="read-more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `).join('');
        }
        
        // Update statistik jumlah berita
        const totalSpan = document.getElementById('totalNews');
        if (totalSpan) totalSpan.innerText = filtered.length;
        
        // Sembunyikan tombol load more jika sudah habis
        const loadBtn = document.getElementById('loadMoreBtn');
        if (loadBtn) {
            if (visibleCount >= filtered.length) {
                loadBtn.style.display = "none";
            } else {
                loadBtn.style.display = "inline-flex";
            }
        }
    }
    
    // Render preview berita di halaman utama (index.html)
    function renderNewsPreview() {
        const newsPreview = document.getElementById('newsPreview');
        if (!newsPreview) return;
        
        // Ambil 3 berita terbaru untuk preview
        const previewNews = newsData.slice(0, 3);
        
        if (previewNews.length === 0) {
            newsPreview.innerHTML = '<div class="no-news">Belum ada berita. Buat postingan di WordPress CMS.</div>';
        } else {
            newsPreview.innerHTML = previewNews.map(news => `
                <div class="news-card">
                    <img src="${news.image}" alt="${news.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&h=300&fit=crop'">
                    <div class="news-content">
                        <span class="news-tag">${news.catName}</span>
                        <div class="news-date"><i class="far fa-calendar-alt"></i> ${news.date}</div>
                        <h3>${news.title}</h3>
                        <p>${news.excerpt.substring(0, 80)}...</p>
                        <a href="${news.link}" target="_blank" class="read-more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Render semua bagian berita
    function renderAllNewsSections() {
        renderNewsGrid();
        renderNewsPreview();
    }
    
    // Setup filter di halaman berita
    function setupFilters() {
        const filters = document.querySelectorAll('.filter');
        if (filters.length === 0) return;
        
        filters.forEach(f => {
            f.addEventListener('click', function() {
                filters.forEach(ff => ff.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.getAttribute('data-filter');
                visibleCount = 6;
                renderNewsGrid();
            });
        });
    }
    
    // Setup load more button
    function setupLoadMore() {
        const loadBtn = document.getElementById('loadMoreBtn');
        if (loadBtn) {
            loadBtn.addEventListener('click', () => {
                visibleCount += 6;
                renderNewsGrid();
            });
        }
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
    
    // ========== MULAI AMBIL DATA DARI RSS WORDPRESS ==========
    fetchNewsFromRSS();
    setupFilters();
    setupLoadMore();
    
    console.log('✅ Website terhubung ke RSS WordPress:', RSS_URL);
});
