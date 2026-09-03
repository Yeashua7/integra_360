// INTEGRA 360° — script.js v5.0
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
                entries.forEach((entry, index) => {
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

});