document.addEventListener('DOMContentLoaded', () => {
    /* 
       --- CLEAN SLATE SERVICES LOGIC ---
       Supports Scroll-Spy and Smooth Scrolling for the new sp- layout.
    */
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const serviceBlocks = document.querySelectorAll('.detail-block');

    if (!sidebarItems.length || !serviceBlocks.length) return;

    // --- 1. Click to Scroll Logic ---
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - 100; // Offset for sticky header

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. Scroll Spy Logic (Highlight Active Menu Item) ---
    const observerOptions = {
        root: null,
        rootMargin: '-120px 0px -70% 0px', // Adjust detection zone near the top
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                // Remove active class from all items
                sidebarItems.forEach(item => item.classList.remove('active'));

                // Add active class to corresponding menu item
                const activeItem = document.querySelector(`.sidebar-item[data-target="${id}"]`);
                if (activeItem) {
                    activeItem.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe each service block
    serviceBlocks.forEach(block => observer.observe(block));

    /* --- 3. Removed dynamic header injection as it is now static in HTML --- */

    // --- 4. Mobile Menu Toggle ---
    const hamburger = document.getElementById('sp-hamburger');
    const overlay = document.getElementById('sp-mobile-overlay');
    const closeBtn = document.getElementById('sp-mobile-close');

    if (hamburger && overlay) {
        hamburger.addEventListener('click', () => {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});
