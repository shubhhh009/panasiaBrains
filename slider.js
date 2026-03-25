const strengthsData = [
    {
        index: "01",
        title: "Comprehensive Selection of Restaurant Supplies",
        desc: "Especially we specialize the wide range of various products for the Japanese restaurant use, such as kitchen utensils, restaurant decorations, tableware, disposable products, uniforms and any other kinds of the relative products as the professional of the Japanese restaurant supplies.",
        img: "images/core1.jpg"
    },
    {
        index: "02",
        title: "Dynamic Sourcing of Dry, Chilled, and Frozen Foods",
        desc: "Also, we positively carry the wide range of Japanese foods, the dry foods, the chilled foods and the frozen foods, and we immediately search for your requested or desired foods on as-needed basis. In addition, we offer you the new and suitable information for your more attractive menu.",
        img: "images/core2.jpg"
    },
    {
        index: "03",
        title: "Deep-Rooted Networks with Local Manufacturers",
        desc: "In regard to the arrangements of the domestic market in Japan, we have the experienced knowledge and the firm relationships and networks with the factories in the production areas for each product.",
        img: "images/core3.jpg"
    },
    {
        index: "04",
        title: "Expert Global Logistics & Seamless Export Solutions",
        desc: "We are professionals in global shipping, offering flexible transport via sea (FCL/LCL) and air, and domestic delivery for dry, chilled, or frozen cargo. Our expertise ensures all critical documentation—from invoices to health certificates and origin permits—is handled with precision for a smooth customs clearance in your country.",
        img: "images/core4.jpg"
    },
    {
        index: "05",
        title: "Meticulous Custom Labeling & Barcode Services",
        desc: "Moreover, we could prepare and print out the labels / barcodes to put the individual piece and the inner / outer cartons on your request basis.",
        img: "images/core5.jpg"
    },
    {
        index: "06",
        title: "Bespoke Product Development & Unique Gift Curation",
        desc: "Additionally we have the capacity to create your original items to achieve differentiation and to appeal to your customers; your restaurant name or logo. What is more, we have the deep and unique experience in creating the attractive gift sets or the giveaways to please your value customers.",
        img: "images/core6.jpg"
    },
    {
        index: "07",
        title: "Versatile Sourcing Beyond Restaurant Supplies",
        desc: "Beside the restaurant supply, we are willingly search for ANY KINDS of your desirable products and items, conduct market research and arrange for export to your destination.",
        img: "images/core7.jpg"
    }
];

let currentSlide = 0;

const imgEl = document.getElementById('strength-img');
const indexEl = document.getElementById('strength-index');
const titleEl = document.getElementById('strength-title');
const descEl = document.getElementById('strength-desc');

function updateSlide(index) {
    const data = strengthsData[index];

    // Add a quick fade out effect
    const container = document.querySelector('.strength-info-wrap');
    container.style.opacity = '0';
    imgEl.style.opacity = '0';

    setTimeout(() => {
        imgEl.src = data.img;
        indexEl.textContent = data.index;
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;

        // Fade back in
        container.style.opacity = '1';
        imgEl.style.opacity = '1';
    }, 250);
}

document.querySelector('.strength-controls .next-arrow').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % strengthsData.length;
    updateSlide(currentSlide);
});

document.querySelector('.strength-controls .prev-arrow').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + strengthsData.length) % strengthsData.length;
    updateSlide(currentSlide);
});

// --- PROOF SLIDER LOGIC ---
const proofItems = document.querySelectorAll('.proof-section .proof-item');
let currentProofSlide = 0;

function updateProofSlide(index) {
    if (!proofItems.length) return;

    // Toggle active class
    proofItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
            item.style.opacity = '1';
        } else {
            item.classList.remove('active');
            item.style.opacity = '0';
        }
    });
}

const nextProofBtn = document.querySelector('.proof-controls .next-arrow');
const prevProofBtn = document.querySelector('.proof-controls .prev-arrow');

if (nextProofBtn && prevProofBtn) {
    nextProofBtn.addEventListener('click', () => {
        currentProofSlide = (currentProofSlide + 1) % proofItems.length;
        updateProofSlide(currentProofSlide);
    });

    prevProofBtn.addEventListener('click', () => {
        currentProofSlide = (currentProofSlide - 1 + proofItems.length) % proofItems.length;
        updateProofSlide(currentProofSlide);
    });
}
