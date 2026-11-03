// Shared responsive navigation and contact form behavior.
(() => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const closeMenu = () => {
        if (!mobileMenu || !menuIcon) return;
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    };

    if (menuBtn && mobileMenu && menuIcon) {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden', isOpen);
            menuIcon.classList.toggle('fa-bars', isOpen);
            menuIcon.classList.toggle('fa-xmark', !isOpen);
            menuBtn.setAttribute('aria-expanded', String(!isOpen));
        });
    }

    mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const message = document.getElementById('form-message');
            if (!message) return;
            message.classList.remove('hidden');
            form.reset();
            window.setTimeout(() => message.classList.add('hidden'), 5000);
        });
    }
})();
