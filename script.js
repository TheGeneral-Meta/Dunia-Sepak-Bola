// ============================================
// PIALA DUNIA 2026 - MAIN JAVASCRIPT
// ============================================

(function() {
    'use strict';
    
    // ========== DOM ELEMENTS ==========
    const dom = {
        preloader: document.getElementById('preloader'),
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
        remindMeBtn: document.getElementById('remindMeBtn'),
        menuToggle: document.getElementById('menuToggle'),
        mobileNav: document.getElementById('mobileNav'),
        closeMenu: document.getElementById('closeMenu'),
        overlay: document.getElementById('overlay'),
        backToTop: document.getElementById('backToTop'),
        newsGrid: document.getElementById('newsGrid'),
        socialGrid: document.getElementById('socialGrid'),
        loadMoreBtn: document.getElementById('loadMoreBtn'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        logo: document.querySelector('.logo'),
        newsletterBtn: document.querySelector('.newsletter-form button'),
        newsletterInput: document.querySelector('.newsletter-form input')
    };
    
    // ========== PRELOADER ==========
    if (dom.preloader) {
        setTimeout(() => {
            dom.preloader.style.opacity = '0';
            setTimeout(() => {
                dom.preloader.style.display = 'none';
            }, 500);
        }, 1000);
    }
    
    // ========== COUNTDOWN TIMER ==========
    if (dom.days) {
        const targetDate = new Date('June 8, 2026 00:00:00').getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const diff = targetDate - now;
            
            if (diff <= 0) {
                dom.days.innerText = '0';
                dom.hours.innerText = '00';
                dom.minutes.innerText = '00';
                dom.seconds.innerText = '00';
                clearInterval(countdownInterval);
                return;
            }
            
            dom.days.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
            dom.hours.innerText = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            dom.minutes.innerText = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            dom.seconds.innerText = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
        }
        
        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    }
    
    // ========== REMIND ME BUTTON ==========
    if (dom.remindMeBtn) {
        dom.remindMeBtn.addEventListener('click', () => {
            alert('✅ Anda akan diingatkan 1 hari sebelum Piala Dunia 2026 dimulai!');
        });
    }
    
    // ========== MOBILE MENU ==========
    if (dom.menuToggle && dom.mobileNav && dom.overlay) {
        const toggleMenu = (show) => {
            dom.mobileNav.classList.toggle('active', show);
            dom.overlay.classList.toggle('active', show);
            document.body.style.overflow = show ? 'hidden' : '';
        };
        
        dom.menuToggle.addEventListener('click', () => toggleMenu(true));
        if (dom.closeMenu) dom.closeMenu.addEventListener('click', () => toggleMenu(false));
        dom.overlay.addEventListener('click', () => toggleMenu(false));
    }
    
    // ========== BACK TO TOP ==========
    if (dom.backToTop) {
        window.addEventListener('scroll', () => {
            dom.backToTop.classList.toggle('show', window.pageYOffset > 300);
        });
        
        dom.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ========== LOGO CLICK ==========
    if (dom.logo) {
        dom.logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
    
    // ========== NEWS DATA ==========
    const newsData = [
        { id: 1, title: "Stadion Megah Piala Dunia 2026 Mulai Rampung", date: "15 Maret 2024", category: "piala-dunia", catName: "Piala Dunia", excerpt: "Progres pembangunan 16 stadion di tiga negara mencapai 85%.", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop" },
        { id: 2, title: "Bursa Transfer: Target Utama Klub Eropa", date: "12 Maret 2024", category: "transfer", catName: "Transfer", excerpt: "Bintang muda mulai menjadi incaran klub-klub top Eropa.", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop" },
        { id: 3, title: "Perempat Final UCL: Analisis Taktik", date: "10 Maret 2024", category: "ucl", catName: "Liga Champions", excerpt: "Delapan tim siap bertarung di babak perempat final.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop" },
        { id: 4, title: "Jadwal Piala Dunia 2026 Resmi Dirilis", date: "8 Maret 2024", category: "piala-dunia", catName: "Piala Dunia", excerpt: "FIFA resmi mengumumkan jadwal lengkap pertandingan.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop" },
        { id: 5, title: "MU Incar Striker Muda Brasil", date: "5 Maret 2024", category: "transfer", catName: "Transfer", excerpt: "Setan Merah siapkan dana besar untuk striker baru.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop" },
        { id: 6, title: "Real Madrid Lolos ke Semifinal UCL", date: "3 Maret 2024", category: "ucl", catName: "Liga Champions", excerpt: "Real Madrid melaju setelah kemenangan dramatis.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop" },
        { id: 7, title: "Teknologi Offside Otomatis di Piala Dunia", date: "1 Maret 2024", category: "piala-dunia", catName: "Piala Dunia", excerpt: "FIFA akan gunakan teknologi offside otomatis.", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop" },
        { id: 8, title: "Liverpool Kejar Gelandang Portugal", date: "28 Feb 2024", category: "transfer", catName: "Transfer", excerpt: "Liverpool siap aktifkan klausul rilis gelandang.", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop" },
        { id: 9, title: "Bayern Tersingkir dari UCL", date: "25 Feb 2024", category: "ucl", catName: "Liga Champions", excerpt: "Bayern harus mengakui keunggulan lawan.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop" }
    ];
    
    // ========== RENDER NEWS ==========
    if (dom.newsGrid) {
        let currentFilter = "all";
        let visibleCount = 6;
        
        const getFilteredNews = () => {
            if (currentFilter === "all") return newsData;
            return newsData.filter(n => n.category === currentFilter);
        };
        
        const renderNews = () => {
            const filtered = getFilteredNews();
            const displayed = filtered.slice(0, visibleCount);
            
            dom.newsGrid.innerHTML = displayed.map(news => `
                <div class="news-card">
                    <img src="${news.image}" alt="${news.title}" loading="lazy">
                    <div class="news-content">
                        <span class="news-tag">${news.catName}</span>
                        <div class="news-date"><i class="far fa-calendar-alt"></i> ${news.date}</div>
                        <h3>${news.title}</h3>
                        <p>${news.excerpt}</p>
                        <a href="#" class="read-more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `).join('');
            
            if (dom.loadMoreBtn) {
                dom.loadMoreBtn.style.display = visibleCount >= filtered.length ? 'none' : 'inline-flex';
            }
        };
        
        if (dom.loadMoreBtn) {
            dom.loadMoreBtn.addEventListener('click', () => {
                visibleCount += 3;
                renderNews();
            });
        }
        
        if (dom.filterBtns.length) {
            dom.filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    dom.filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentFilter = this.dataset.filter;
                    visibleCount = 6;
                    renderNews();
                });
            });
        }
        
        renderNews();
    }
    
    // ========== SOCIAL DATA ==========
    const socialData = [
        { name: "Facebook Group", desc: "Live streaming & diskusi eksklusif", icon: "fb", link: "https://www.facebook.com/InfoBolaHarian2", btn: "Join Group" },
        { name: "Instagram", desc: "Behind the scene & konten visual", icon: "ig", link: "https://www.instagram.com/duniasepakbola.2/", btn: "Follow" },
        { name: "TikTok", desc: "Viral challenges & konten kreatif", icon: "tt", link: "https://www.tiktok.com/@duniasepakbola.2", btn: "Ikuti" },
        { name: "Discord", desc: "Voice chat & AMA dengan legenda", icon: "dc", link: "https://discord.gg/ys7ac44P", btn: "Join Server" },
        { name: "YouTube", desc: "Dokumenter 4K & analisis taktik", icon: "yt", link: "https://www.youtube.com/@DuniSepakBola.2", btn: "Subscribe" },
        { name: "Telegram", desc: "Notifikasi real-time & berita breaking", icon: "tg", link: "https://t.me/DuniaSepakBola2", btn: "Join Channel" }
    ];
    
    // ========== RENDER SOCIAL ==========
    if (dom.socialGrid) {
        const getIconClass = (icon) => {
            const icons = { fb: 'facebook-f', ig: 'instagram', tt: 'tiktok', dc: 'discord', yt: 'youtube', tg: 'telegram' };
            return icons[icon] || 'telegram';
        };
        
        dom.socialGrid.innerHTML = socialData.map(soc => `
            <div class="platform-card">
                <div class="platform-icon ${soc.icon}"><i class="fab fa-${getIconClass(soc.icon)}"></i></div>
                <h4>${soc.name}</h4>
                <p>${soc.desc}</p>
                <a href="${soc.link}" target="_blank" class="platform-btn">${soc.btn} →</a>
            </div>
        `).join('');
    }
    
    // ========== PREVENT EMPTY LINKS ==========
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
    
    // ========== AOS INIT ==========
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }
    
    // ========== TOUCH DEVICE ==========
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    console.log('Piala Dunia 2026 - Ready!');
})();
