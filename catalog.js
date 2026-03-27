document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('cp-hamburger');
    const overlay = document.getElementById('cp-mobile-overlay');
    const closeBtn = document.getElementById('cp-mobile-close');

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

    // --- Sample Product Data ---
    const products = [
        { id: 1, name: 'Tableware &\nDinnerware', sub: '', img: 'images/catalog/cata1.png', category: 'restaurant' },
        { id: 2, name: 'Kitchen\nEquipment', sub: '', img: 'images/catalog/cata2.png', category: 'restaurant' },
        { id: 3, name: 'Disposables &\nSupplies', sub: '', img: 'images/catalog/cata3.png', category: 'restaurant' },
        { id: 4, name: 'Food Items', sub: '', img: 'images/catalog/cata1.png', category: 'food' },
        { id: 5, name: 'Beverages', sub: '', img: 'images/catalog/cata2.png', category: 'food' },
        { id: 6, name: 'Frozen Foods', sub: '', img: 'images/catalog/cata3.png', category: 'food' },
        { id: 7, name: 'Custom Products', sub: '', img: 'images/catalog/cata1.png', category: 'custom' },
        { id: 8, name: 'OEM Items', sub: '', img: 'images/catalog/cata2.png', category: 'custom' },
        { id: 9, name: 'Branded Goods', sub: '', img: 'images/catalog/cata3.png', category: 'custom' },
    ];

    function renderProducts(category = 'restaurant') {
        const grid = document.getElementById('cp-products-grid');
        if (!grid) return;

        const filtered = products.filter(p => p.category === category);

        grid.innerHTML = filtered.map(p => `
            <div class="cp-product-card">
                <div class="cp-product-img-wrap">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <p class="cp-product-name">${p.name}</p>
            </div>
        `).join('');
    }

    // Tab Switching Logic
    const categoryTabs = document.querySelectorAll('.cp-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderProducts(tab.dataset.category);
        });
    });

    // Initial render
    renderProducts('restaurant');

});
