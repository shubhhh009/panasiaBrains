document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const serviceBlocks = document.querySelectorAll('.service-block');

    if (!sidebarItems.length || !serviceBlocks.length) return;

    // --- 1. Click to Scroll Logic ---
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - 150; // Offset for header

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
        rootMargin: '-150px 0px -70% 0px', // Adjusts detection zone near the top
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

    // --- 3. Dynamic Service Header ---
    function renderServiceHeader() {
        const servicesContainer = document.querySelector('.services-container');
        if (!servicesContainer) return;

        // Check if header already exists to avoid duplication
        if (document.querySelector('.service-hero-header')) return;

        const headerHTML = `
            <div class="service-hero-header">
                <h1 class="service-main-title">SERVICE</h1>
                <div class="service-main-image">
                    <img src="images/servicesMain/servicesMain.jpg" alt="Service Showcase">
                </div>
            </div>
        `;

        // Inject at the very top of the container
        servicesContainer.insertAdjacentHTML('afterbegin', headerHTML);
    }

    renderServiceHeader();

    // --- 4. Navbar Services Link Interaction ---
    const servicesNavLink = document.querySelector('a[href="#services"]');
    if (servicesNavLink) {
        servicesNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceSection = document.getElementById('services');
            if (serviceSection) {
                window.scrollTo({
                    top: serviceSection.offsetTop - 80, // Offset for navigation bar
                    behavior: 'smooth'
                });
            }
        });
    }
    // --- 5. Mobile Menu Toggle Logic ---
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        if (menuClose) {
            menuClose.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }

        const mobileLinks = document.querySelectorAll('.mobile-nav-item');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
});


