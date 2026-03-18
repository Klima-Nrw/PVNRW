import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export default async function handler(req, res) {
  try {
    const category = req.query.category;

    let url;
    if (category === 'klimaanlagen') {
      url = `https://www.kleinanzeigen.de/s-dienstleistungen/46286/anbieter:privat/anzeige:gesuche/klimaanlage/k0c297l1758r50`;
    } else if (category === 'photovoltaik') {
      url = `https://www.kleinanzeigen.de/s-46286/anbieter:privat/anzeige:gesuche/photovoltaik/k0l1758r100`;
    } else {
      return res.status(400).json({ error: 'Invalid category' });
    }

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Warten, bis die Anzeigen geladen sind
    await page.waitForSelector('article.aditem', { timeout: 10000 });

    // Optional: Scrollen, damit lazy-loaded Bilder/Anzeigen erscheinen
    await autoScroll(page);

    const ads = await page.evaluate(() => {
      const adNodes = Array.from(document.querySelectorAll('article.aditem:not([id*="altads"])'));
      return adNodes.map(ad => {
        const titleEl = ad.querySelector('a.ellipsis');
        const priceEl = ad.querySelector('p.aditem-main--middle--price-shipping--price');
        const linkEl = ad.querySelector('a.ellipsis');
        const imgEl = ad.querySelector('img');

        return {
          title: titleEl ? titleEl.textContent.trim() : 'No Title',
          price: priceEl ? priceEl.textContent.trim() : 'No Price',
          link: linkEl ? `https://www.kleinanzeigen.de${linkEl.getAttribute('href')}` : '#',
          imageUrl: imgEl ? imgEl.src : "https://static.kleinanzeigen.de/static/img/common/logo/logo-kleinanzeigen-horizontal.1f2pao1sh7vgo.svg"
        };
      });
    });

    await browser.close();

    const filteredAds = ads.filter(ad => {
      const excludedTerms = ['Praktikant', 'Verstärkung', 'Festanstellung'];
      return !excludedTerms.some(term => ad.title.toLowerCase().includes(term.toLowerCase()));
    });

    res.status(200).json({ ads: filteredAds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

// Helferfunktion zum Scrollen der Seite
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
