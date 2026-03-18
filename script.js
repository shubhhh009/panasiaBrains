document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Slider Logic for 7 Core Strengths
    const slidesData = [
        {
            number: "01",
            title: "Comprehensive<br>Selection of<br>Restaurant Supplies",
            desc: "Especially we specialize the wide range of various products for the Japanese restaurant use, such as kitchen utensils, restaurant decorations, tableware, disposable products, uniforms and any other kinds of the relative products as the professional of the Japanese restaurant supplies.",
            img: "images/core1.jpg"
        },
        {
            number: "02",
            title: "Dynamic Sourcing of<br>Dry, Chilled, and<br>Frozen Foods",
            desc: "We source and export a massive variety of authentic Japanese food products, ensuring high quality and compliance. We provide comprehensive sourcing to match your specific restaurant needs, handling all temperature zones carefully.",
            img: "images/core2.jpg"
        },
        {
            number: "03",
            title: "Deep-Rooted<br>Networks with Local<br>Manufacturers",
            desc: "Capitalizing on decades of relationships with Japanese manufacturers, we bypass middlemen to offer you direct access to premium, authentic products at highly competitive B2B wholesale prices.",
            img: "images/core3.jpg"
        },
        {
            number: "04",
            title: "Expert Global Logistics<br>& Seamless Export<br>Solutions",
            desc: "Handling everything from shipping logistics, freight forwarding, and local customs compliance. We ensure that your shipments arrive safely and efficiently to your destination country with completely seamless operations.",
            img: "images/core4.jpg"
        },
        {
            number: "05",
            title: "Meticulous Custom<br>Labeling & Barcode<br>Services",
            desc: "We offer tailored repackaging, custom label translation, and barcode generation to ensure all exported items perfectly comply with your local market regulations and retail requirements.",
            img: "images/core5.jpg"
        },
        {
            number: "06",
            title: "Bespoke Product<br>Development & Unique<br>Gift Curation",
            desc: "Looking for an exclusive product line? We help develop original Japanese goods and curate distinctive premium gift sets specifically customized for your brand and clientele.",
            img: "images/core6.jpg"
        },
        {
            number: "07",
            title: "Versatile Sourcing<br>Beyond Restaurant<br>Supplies",
            desc: "Beyond culinary products, our immense procurement network allows us to source industrial machinery, specialized tools, and commercial-grade equipment directly from Japanese engineering firms.",
            img: "images/core7.jpg"
        }
    ];

    let currentSlide = 0;
    const numEl = document.getElementById('slide-num');
    const titleEl = document.getElementById('slide-title');
    const descEl = document.getElementById('slide-desc');
    const imgEl = document.getElementById('slide-img');
    const leftBtn = document.querySelector('.left-arrow');
    const rightBtn = document.querySelector('.right-arrow');

    function updateSlide() {
        if (!numEl || !imgEl) return;

        imgEl.style.opacity = '0.4';
        titleEl.style.opacity = '0';
        descEl.style.opacity = '0';

        setTimeout(() => {
            numEl.textContent = slidesData[currentSlide].number;
            titleEl.innerHTML = slidesData[currentSlide].title;
            descEl.innerHTML = slidesData[currentSlide].desc;
            imgEl.src = slidesData[currentSlide].img;

            imgEl.style.opacity = '1';
            titleEl.style.opacity = '1';
            descEl.style.opacity = '1';
        }, 300);
    }

    if (leftBtn && rightBtn) {
        imgEl.style.transition = 'opacity 0.3s ease';
        titleEl.style.transition = 'opacity 0.3s ease';
        descEl.style.transition = 'opacity 0.3s ease';

        leftBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
            updateSlide();
        });
        rightBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slidesData.length;
            updateSlide();
        });
    }
});
