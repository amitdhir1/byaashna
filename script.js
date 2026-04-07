// Custom Cursor
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add clickable class to cursor when hovering over interactive elements
const clickableElements = 'a, button, .gallery-item, input, textarea, [role="button"]';
document.addEventListener('mouseover', (e) => {
    if (e.target.closest(clickableElements)) {
        cursor.classList.add('clickable');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest(clickableElements)) {
        cursor.classList.remove('clickable');
    }
});

// Scroll-based Active Navigation
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to corresponding link
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all sections after DOM is loaded
window.addEventListener('load', () => {
    sections.forEach(section => observer.observe(section));
});

document.addEventListener('DOMContentLoaded', () => {
    // Gallery Data (Current Work)
    const galleryItems = [
        {
            name: "Linen Layering Vest",
            front: "beigevestfront.jpg",
            views: ["beigevestside.jpg"],
            desc: "Item: Vest | Color: Beige | Fabric: Linen | Created because I felt my wardrobe lacked versatile layering pieces."
        },
        {
            name: "Luna Camisole",
            front: "blackmoontopfront.jpg",
            views: ["blackmoontopside.jpg"],
            desc: "Item: Camisole | Color: Black and gold | Fabric: Polyester crepe | My first time making a top. The Luna Camisole is part of a matching set with the Luna Maxi Skirt. Constructing the armholes and straps was challenging, and the finishing is slightly messy, but I love how the fit turned out."
        },
        {
            name: "Upcycled Lounge Shorts",
            front: "brownnavypajamashortsfront.jpg",
            views: ["brownnavypajamashortsside.jpg"],
            desc: "Item: Lounge shorts | Color: Brown, beige, and navy | Fabric: Cotton–polyester knit | My first time making pants. These were made from my grandpa's old T-shirt, focusing on comfort and reuse of existing materials."
        },
        {
            name: "Emerald Linen Button-Up",
            front: "greenbuttonupfront.jpg",
            views: ["greenbuttonupside.jpg"],
            desc: "Item: Button-up shirt | Color: Dark green | Fabric: Linen | Inspired by a shirt I saw on TikTok. This was my first time altering a pattern, adapted from my 'Retro Galaxy Button-Up.'"
        },
        {
            name: "Printed Cotton Kimono",
            front: "kamonofront.jpg",
            views: ["kamonoside.jpg", "kamonostylizedfront.jpg"],
            desc: "Item: Kimono | Color: Multicolor | Fabric: Printed cotton weave | Made after taking a pattern drafting class in Los Angeles. The fabric was purchased in Japan."
        },
        {
            name: "Luna Maxi Skirt",
            front: "longmoonskirtfront.jpg",
            views: ["longmoonskirtside.jpg"],
            desc: "Item: Maxi skirt | Color: Black and gold | Fabric: Polyester crepe | Designed to pair with the Luna Camisole. One of my first skirts; I love its flow and movement."
        },
        {
            name: "Sunflower Ruffle Midi Skirt",
            front: "midisunflowerskirtfront.jpg",
            views: ["midisunflowerskirtside.jpg"],
            desc: "Item: Midi skirt | Color: Yellow and black | Fabric: Cotton | Made to practice ruffle construction and zipper installation—both firsts for me."
        },
        {
            name: "Classic Black Mini Skirt",
            front: "miniblackskirtfront.jpg",
            views: ["miniblackskirtside.jpg"],
            desc: "Item: Mini skirt | Color: Black | Fabric: Polyester weave | Made using fabric I got for free in downtown Los Angeles."
        },
        {
            name: "Heritage Babydoll Top",
            front: "navyindiantopfront.jpg",
            views: ["navyindiantopside.jpg"],
            desc: "Item: Babydoll top | Color: Navy and beige | Fabric: Linen | Made using gifted fabric from a community member whose husband once owned a fabric shop. This piece holds strong personal and cultural significance."
        },
        {
            name: "Essential White Long Sleeve",
            front: "whitelongsleevefront.jpg",
            views: ["whitelongsleevetopside.jpg"],
            desc: "Item: Long-sleeve top | Color: White | Fabric: — | My first time making a long-sleeve top. I love this piece for its timeless elegance."
        }
    ];

    // Archive Data (Past Work)
    const archiveItems = [
        {
            name: "Retro Galaxy Button-Up",
            front: "blackgalaxybuttonupfront.jpg",
            views: ["blackgalaxybuttonupside.jpg"],
            desc: "Item: Shirt | Color: Multicolor | Fabric: Cotton | Made for my 11th birthday at a bowling alley. Inspired by Stranger Things and 80s fashion."
        },
        {
            name: "Polka Dot Circle Skirt",
            front: "bluepolkadotskirtfront.jpg",
            views: ["bluepolkadotskirtside.jpg"],
            desc: "Item: Circle skirt | Color: Blue and white | Fabric: Cotton | I wanted a big, poofy silhouette. This was the first garment I made when I started sewing lessons."
        },
        {
            name: "Euphoria Halter Top",
            front: "pinkblackhaltertopfront.jpg",
            views: ["pinkblackhaltertopside.jpg"],
            desc: "Item: Halter top | Color: Pink and black | Fabric: Double-knit polyester | Inspired by Euphoria, focusing on bold contrast and a fitted silhouette."
        },
        {
            name: "Valentine Mini Skirt",
            front: "pinkminiskirtfront.jpg",
            views: ["pinkminiskirtside.jpg"],
            desc: "Item: Mini skirt | Color: Pink | Fabric: Polyester weave | Made on a whim for my elementary school's Valentine's Day dress-up event."
        },
        {
            name: "Ceremony Linen Long Sleeve",
            front: "purplegreenlongsleevefront.jpg",
            views: ["purplegreenlongsleeveside.jpg"],
            desc: "Item: Long-sleeve top | Color: Purple and green | Fabric: Linen | Made using fabric received as a party favor from a half-sari ceremony. I had only two 1×1 meter squares to work with."
        },
        {
            name: "Red Heart Babydoll Dress",
            front: "redheartdressfront.jpg",
            views: ["redheartdressside.jpg", "redheartdressback.jpg"],
            desc: "Item: Babydoll dress | Color: Red | Fabric: Satin and tulle | Fabric was sourced for free in downtown Los Angeles, with additional satin purchased. Inspired by a piece by Macharatewers."
        },
        {
            name: "Cotton Sleep Lounge Shorts",
            front: "yellowpajamashortsfront.jpg",
            views: ["yellowpajamashortsside.jpg", "yellowpajamashortsstylizedside.jpg"],
            desc: "Item: Lounge shorts | Color: Yellow | Fabric: Cotton | Comfortable shorts I love wearing to sleep or layering under dresses."
        }
    ];

    // Render function for both gallery and archive
    function renderGallery(items, gridId) {
        const grid = document.getElementById(gridId);
        if (!grid) return;

        items.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('gallery-item');
            itemEl.dataset.index = index;

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('gallery-img-container');

            const img = document.createElement('img');
            img.src = `images/${item.front}`;
            img.alt = item.name;
            img.loading = 'lazy';

            const caption = document.createElement('div');
            caption.classList.add('gallery-caption');
            caption.innerText = item.name;

            imgContainer.appendChild(img);
            itemEl.appendChild(imgContainer);
            itemEl.appendChild(caption);

            grid.appendChild(itemEl);

            const detailView = document.createElement('div');
            detailView.classList.add('detail-view');
            detailView.id = `${gridId}-detail-${index}`;
            detailView.innerHTML = `
                <div class="detail-content">
                    <div class="detail-info">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                    </div>
                    <div class="detail-images">
                        ${item.views.map(view => `<img src="images/${view}" alt="${item.name} View" loading="lazy">`).join('')}
                    </div>
                </div>
            `;

            itemEl.addEventListener('click', () => {
                document.querySelectorAll('.detail-view').forEach(dv => {
                    if (dv !== detailView) dv.classList.remove('active');
                });

                if (detailView.classList.contains('active')) {
                    detailView.classList.remove('active');
                } else {
                    handleDetailExpansion(itemEl, detailView, grid);
                }
            });
        });
    }

    // Render both galleries
    renderGallery(galleryItems, 'gallery-grid');
    renderGallery(archiveItems, 'archive-grid');

    function handleDetailExpansion(clickedItem, detailViewContent, grid) {
        const existingActive = document.querySelector('.detail-view.active');
        if (existingActive && existingActive !== detailViewContent) {
            existingActive.classList.remove('active');
            if (existingActive.parentNode) existingActive.parentNode.removeChild(existingActive);
        }

        if (detailViewContent.classList.contains('active')) {
            detailViewContent.classList.remove('active');
            detailViewContent.remove();
            return;
        }

        const items = Array.from(grid.getElementsByClassName('gallery-item'));
        const clickedIndex = items.indexOf(clickedItem);
        const colCount = getComputedStyle(grid).gridTemplateColumns.split(' ').length;

        const rowStartIndex = Math.floor(clickedIndex / colCount) * colCount;
        let rowEndIndex = rowStartIndex + colCount - 1;
        if (rowEndIndex >= items.length) rowEndIndex = items.length - 1;

        const lastItemInRow = items[rowEndIndex];
        lastItemInRow.after(detailViewContent);

        setTimeout(() => {
            detailViewContent.classList.add('active');
        }, 10);
    }
});
