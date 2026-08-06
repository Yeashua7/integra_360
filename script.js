document.addEventListener('DOMContentLoaded', () => {

    // Funcionalidad del Menú Hamburguesa con accesibilidad ARIA
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            const isExpanded = navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
            mobileMenu.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        });

        // Soporte para teclado (Enter o Espacio)
        mobileMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                mobileMenu.click();
            }
        });
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && mobileMenu) {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('is-active');
                mobileMenu.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Smooth Scrolling para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            const headerOffset = 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});