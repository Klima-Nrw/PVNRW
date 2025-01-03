const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

(async function () {
    const searchTerm = "Klima"; // Standardwert
    const city = "Dorsten"; // Standardwert

    // URL
    const url = "https://www.kleinanzeigen.de/s-dienstleistungen/46286/anbieter:privat/anzeige:gesuche/klimaanlage/k0c297l1758r50";

    try {
        // Fetch the HTML
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        });

        if (!response.ok) {
            console.error(`HTTP Error: ${response.status}`);
            return;
        }

        const html = await response.text();

        // Parse the HTML
        const dom = new JSDOM(html);
        const document = dom.window.document;

        // Find ads
        const ads = document.querySelectorAll("article.aditem:not(#srchrslt-adtable-altads article)");

        // Extract ad details
        const adData = Array.from(ads).map((ad) => {
            const titleElement = ad.querySelector("a.ellipsis");
            const priceElement = ad.querySelector("p.aditem-main--middle--price");
            const linkElement = ad.querySelector("a.ellipsis");
            const imageElement = ad.querySelector("img");

            return {
                title: titleElement ? titleElement.textContent.trim() : "Kein Titel",
                price: priceElement ? priceElement.textContent.trim() : "Kein Preis",
                link: linkElement ? `https://www.kleinanzeigen.de${linkElement.getAttribute('href')}` : "#",
                image: imageElement ? imageElement.getAttribute('src') : "https://static.kleinanzeigen.de/static/img/common/logo/logo-kleinanzeigen-horizontal.1f2pao1sh7vgo.svg"
            };
        });

        // Log the ads
        console.log(adData);

        // Example: render ads in an HTML structure
        renderAds(adData);

    } catch (error) {
        console.error(`Error fetching the URL: ${error.message}`);
    }

    function renderAds(adData) {
        const gallery = document.createElement('div');
        gallery.classList.add('gallery');

        adData.forEach((ad) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = ad.image;
            img.alt = ad.title;

            const title = document.createElement('h3');
            const link = document.createElement('a');
            link.href = ad.link;
            link.target = "_blank";
            link.textContent = ad.title;
            title.appendChild(link);

            const price = document.createElement('p');
            price.innerHTML = `<strong>Preis:</strong> ${ad.price}`;

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(price);
            gallery.appendChild(card);
        });

        document.body.appendChild(gallery);
    }
})();
