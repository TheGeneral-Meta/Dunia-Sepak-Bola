// ============================================
// PIALA DUNIA 2026 - MAIN JAVASCRIPT
// Complete | Fully Functional
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== PRELOADER ==========
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    }
    
    // ========== AOS INIT ==========
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
    
    // ========== COUNTDOWN TIMER ==========
    function updateCountdown() {
        const targetDate = new Date('June 8, 2026 00:00:00').getTime();
        const now = new Date().getTime();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            if (document.getElementById('days')) {
                document.getElementById('days').innerText = '0';
                document.getElementById('hours').innerText = '00';
                document.getElementById('minutes').innerText = '00';
                document.getElementById('seconds').innerText = '00';
            }
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
    
    // ========== REMIND ME BUTTON ==========
    const remindMeBtn = document.getElementById('remindMeBtn');
    if (remindMeBtn) {
        remindMeBtn.addEventListener('click', () => {
            alert('✅ Anda akan diingatkan 1 hari sebelum Piala Dunia 2026 dimulai!');
        });
    }
    
    // ========== NEWS DATA (15 Berita) ==========
    const newsData = [
        { id: 1, title: "Stadion Megah Piala Dunia 2026 Mulai Rampung", date: "15 Maret 2024", category: "piala-dunia", categoryName: "Piala Dunia", excerpt: "Progres pembangunan 16 stadion di tiga negara tuan rumah mencapai 85%. Stadion ikonik seperti MetLife Stadium dan SoFi Stadium hampir selesai direnovasi.", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop", link: "#" },
        { id: 2, title: "Bursa Transfer: Target Utama Klub-klub Eropa", date: "12 Maret 2024", category: "transfer", categoryName: "Transfer", excerpt: "Bintang muda mulai menjadi incaran klub-klub top Eropa. Nilai transfer diprediksi tembus rekor baru menjelang musim panas 2024.", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop", link: "#" },
        { id: 3, title: "Perempat Final Liga Champions: Analisis Taktik", date: "10 Maret 2024", category: "ucl", categoryName: "Liga Champions", excerpt: "Delapan tim siap bertarung di babak perempat final. Para pelatih mulai meracik strategi spesial untuk menghadapi lawan masing-masing.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop", link: "#" },
        { id: 4, title: "Jadwal Piala Dunia 2026 Resmi Dirilis FIFA", date: "8 Maret 2024", category: "piala-dunia", categoryName: "Piala Dunia", excerpt: "FIFA resmi mengumumkan jadwal lengkap pertandingan Piala Dunia 2026 yang akan digelar di 16 kota.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop", link: "#" },
        { id: 5, title: "Manchester United Incar Striker Muda Brasil", date: "5 Maret 2024", category: "transfer", categoryName: "Transfer", excerpt: "Setan Merah siapkan dana besar untuk mendatangkan striker muda berbakat asal Brasil.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop", link: "#" },
        { id: 6, title: "Real Madrid Lolos ke Semifinal UCL", date: "3 Maret 2024", category: "ucl", categoryName: "Liga Champions", excerpt: "Real Madrid berhasil melaju ke babak semifinal setelah kemenangan dramatis 3-1.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop", link: "#" },
        { id: 7, title: "Piala Dunia 2026 Gunakan Teknologi Offside Otomatis", date: "1 Maret 2024", category: "piala-dunia", categoryName: "Piala Dunia", excerpt: "FIFA mengumumkan akan menggunakan teknologi offside otomatis terbaru.", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop", link: "#" },
        { id: 8, title: "Liverpool Kejar Gelandang Muda Portugal", date: "28 Februari 2024", category: "transfer", categoryName: "Transfer", excerpt: "Liverpool siap mengaktifkan klausul rilis gelandang muda Portugal.", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop", link: "#" },
        { id: 9, title: "Bayern Munich Tersingkir dari UCL", date: "25 Februari 2024", category: "ucl", categoryName: "Liga Champions", excerpt: "Bayern Munich harus mengakui keunggulan lawan setelah bermain imbang.", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=600&h=400&fit=crop", link: "#" },
        { id: 10, title: "Tiket Piala Dunia 2026 Mulai Dijual", date: "20 Februari 2024", category: "piala-dunia", categoryName: "Piala Dunia", excerpt: "FIFA mengumumkan penjualan tiket Piala Dunia 2026 akan dimulai bulan depan.", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop", link: "#" },
        { id: 11, title: "PSG Incar Bek Tengah Juventus", date: "18 Februari 2024", category: "transfer", categoryName: "Transfer", excerpt: "PSG siap mengeluarkan dana besar untuk mendatangkan bek tengah andalan Juventus.", image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&h=400&fit=crop", link: "#" },
        { id: 12, title: "Format Baru Piala Dunia 2026: 12 Grup", date: "15 Februari 2024", category: "piala-dunia", categoryName: "Piala Dunia", excerpt: "FIFA mengonfirmasi format baru Piala Dunia 2026 akan menggunakan 12 grup.", image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=400&fit=crop", link: "#" }
    ];
    
    // ========== RENDER NEWS ==========
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
                        <div class="news-date"><i class="far fa-calendar-alt"></i> ${news.date}</div>
                        <h3>${news.title}</h3>
                        <p>${news.excerpt.substring(0, 100)}...</p>
                        <a href="${news.link}" class="read-more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
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
                    <div class="platform-icon ${soc.icon}"><i class="fab fa-${faIcon}"></i></div>
                    <h4>${soc.name}</h4>
                    <p>${soc.desc}</p>
                    <a href="${soc.link}" target="_blank" class="platform-btn">${soc.btn} →</a>
                </div>
            `;
        }).join('');
    }
    
    // ========== MOBILE MENU ==========
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const closeMenu = document.getElementById('closeMenu');
    const overlay = document.getElementById('overlay');
    
    if (menuToggle && mobileNav && overlay) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        overlay.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // ========== BACK TO TOP BUTTON ==========
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ========== STICKY HEADER HANDLING ==========
    let lastScroll = 0;
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 150) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        });
    }
    
    // ========== PREVENT DEFAULT EMPTY LINKS ==========
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
    
    // ========== LOGO CLICK TO HOME ==========
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
    
    // ========== NEWSLETTER SUBSCRIPTION ==========
    const newsletterBtn = document.querySelector('.newsletter-form button');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', () => {
            const emailInput = document.querySelector('.newsletter-form input');
            if (emailInput && emailInput.value) {
                alert(`✅ Terima kasih ${emailInput.value} telah berlangganan newsletter kami!`);
                emailInput.value = '';
            } else {
                alert('⚠️ Silakan masukkan email Anda!');
            }
        });
    }
    
    // ========== TOUCH OPTIMIZATION ==========
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    console.log('Piala Dunia 2026 Official Hub - Fully Loaded!');
});
