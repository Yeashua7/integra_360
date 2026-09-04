// INTEGRA 360° — script.js v5.1
document.addEventListener('DOMContentLoaded', () => {

    // ================================================================
    // 1. NAVBAR: Scroll effect (transparent → solid)
    // ================================================================
    const navbar = document.getElementById('navbar');

    const handleNavbarScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll(); // Run on load in case page is already scrolled


    // ================================================================
    // 2. HAMBURGER MENU — con accesibilidad ARIA
    // ================================================================
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu    = document.querySelector('.nav-menu');

    const closeMenu = () => {
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('is-active');
        mobileMenu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
            mobileMenu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Keyboard support
        mobileMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                mobileMenu.click();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Close on nav link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }


    // ================================================================
    // 3. SMOOTH SCROLLING for anchor links
    // ================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();

            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const elementTop   = targetElement.getBoundingClientRect().top + window.scrollY;
            const offset       = elementTop - navbarHeight - 20;

            window.scrollTo({ top: offset, behavior: 'smooth' });
        });
    });


    // ================================================================
    // 4. SCROLL REVEAL — Intersection Observer
    // ================================================================
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Staggered delay for grid items
                        const siblings = entry.target.closest('.process-steps, .benefits-grid');
                        let delay = 0;

                        if (siblings) {
                            const items = siblings.querySelectorAll('.reveal-on-scroll');
                            items.forEach((item, i) => {
                                if (item === entry.target) delay = i * 100;
                            });
                        }

                        setTimeout(() => {
                            entry.target.classList.add('is-visible');
                        }, delay);

                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback: show all immediately
        revealElements.forEach(el => el.classList.add('is-visible'));
    }


    // ================================================================
    // 5. HERO: Parallax subtle effect on scroll
    // ================================================================
    const hero = document.querySelector('.hero');

    if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                hero.style.backgroundPositionY = `calc(center + ${scrollY * 0.3}px)`;
            }
        }, { passive: true });
    }


    // ================================================================
    // 6. LIGHTBOX — Galería de imágenes de trabajos reales
    // ================================================================
    const lightbox         = document.getElementById('lightbox');
    const lightboxImg      = document.getElementById('lightbox-img');
    const lightboxCaption  = document.getElementById('lightbox-caption');
    const lightboxClose    = document.getElementById('lightbox-close');
    const lightboxPrev     = document.getElementById('lightbox-prev');
    const lightboxNext     = document.getElementById('lightbox-next');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');

    // Collect all gallery items in document order
    const galleryItems = Array.from(document.querySelectorAll('[data-lightbox="gallery"]'));
    let currentGalleryIndex = 0;

    const openLightbox = (index) => {
        if (!lightbox || galleryItems.length === 0) return;
        currentGalleryIndex = index;
        const item = galleryItems[index];

        // Use data-src first, fallback to the first img inside the card
        const src = item.getAttribute('data-src') || item.querySelector('img')?.src || '';
        const alt = item.getAttribute('data-alt') || item.querySelector('img')?.alt || '';

        lightboxImg.src     = src;
        lightboxImg.alt     = alt;
        lightboxCaption.textContent = alt;

        lightbox.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();

        // Toggle nav visibility
        const showNav = galleryItems.length > 1;
        if (lightboxPrev) lightboxPrev.style.display = showNav ? '' : 'none';
        if (lightboxNext) lightboxNext.style.display = showNav ? '' : 'none';
    };

    const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.setAttribute('hidden', '');
        document.body.style.overflow = '';
        // Return focus to the triggering card
        const trigger = galleryItems[currentGalleryIndex];
        if (trigger) trigger.focus();
    };

    const showLightboxPrev = () => {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
        openLightbox(currentGalleryIndex);
    };

    const showLightboxNext = () => {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
        openLightbox(currentGalleryIndex);
    };

    // Bind click/keyboard on each gallery card
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
    });

    if (lightboxClose)    lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    if (lightboxPrev)     lightboxPrev.addEventListener('click', showLightboxPrev);
    if (lightboxNext)     lightboxNext.addEventListener('click', showLightboxNext);

    // Global keyboard handler for lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightbox || lightbox.hasAttribute('hidden')) return;
        if (e.key === 'Escape')     closeLightbox();
        if (e.key === 'ArrowLeft')  showLightboxPrev();
        if (e.key === 'ArrowRight') showLightboxNext();
    });


    // ================================================================
    // 7. VIDEO MODAL — Tarjeta de video de trabajos reales
    // ================================================================
    const videoModal         = document.getElementById('video-modal');
    const videoModalClose    = document.getElementById('video-modal-close');
    const videoModalBackdrop = document.getElementById('video-modal-backdrop');
    const modalVideo         = document.getElementById('modal-video');
    const videoPlaceholder   = document.getElementById('video-placeholder');
    const videoCardTrigger   = document.getElementById('work-card-video');

    const openVideoModal = () => {
        if (!videoModal) return;
        videoModal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        if (videoModalClose) videoModalClose.focus();

        // Decide: show real video player or placeholder
        if (modalVideo) {
            const hasSrc = modalVideo.querySelectorAll('source').length > 0;
            if (hasSrc) {
                modalVideo.style.display = 'block';
                if (videoPlaceholder) videoPlaceholder.style.display = 'none';
                // User presses play manually — no autoplay with sound
            } else {
                // No video file yet — show the call-to-action placeholder
                modalVideo.style.display = 'none';
                if (videoPlaceholder) videoPlaceholder.style.display = 'flex';
            }
        }
    };

    const closeVideoModal = () => {
        if (!videoModal) return;
        videoModal.setAttribute('hidden', '');
        document.body.style.overflow = '';
        // Pause video when closing to stop audio/playback
        if (modalVideo && !modalVideo.paused) modalVideo.pause();
        if (videoCardTrigger) videoCardTrigger.focus();
    };

    if (videoCardTrigger) {
        videoCardTrigger.addEventListener('click', openVideoModal);
        videoCardTrigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openVideoModal();
            }
        });
    }

    if (videoModalClose)    videoModalClose.addEventListener('click', closeVideoModal);
    if (videoModalBackdrop) videoModalBackdrop.addEventListener('click', closeVideoModal);

    // Global keyboard handler for video modal
    document.addEventListener('keydown', (e) => {
        if (!videoModal || videoModal.hasAttribute('hidden')) return;
        if (e.key === 'Escape') closeVideoModal();
    });

});