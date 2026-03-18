import puppeteer from 'puppeteer';

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

    const browser = await puppeteer.launch({ args: ['--no-sandbox'], headless: true });
    const page = await browser.newPage();

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    );

    await page.goto(url, { waitUntil: 'networkidle2' });

    const ads = await page.evaluate(() => {
      const adNodes = Array.from(document.querySelectorAll('article'));
      return adNodes.map(ad => {
        const titleEl = ad.querySelector('a[data-testid="ad-title"]');
        const priceEl = ad.querySelector('p[data-testid="ad-price"]');
        const linkEl = ad.querySelector('a[data-testid="ad-title"]');
        const imgEl = ad.querySelector('img');

        return {
          title: titleEl ? titleEl.textContent.trim() : 'No Title',
          price: priceEl ? priceEl.textContent.trim() : 'No Price',
          link: linkEl ? linkEl.href : '#',
          imageUrl: imgEl ? imgEl.src : "https://static.kleinanzeigen.de/static/img/common/logo/logo-kleinanzeigen-horizontal.1f2pao1sh7vgo.svg"
        };
      });
    });

    // Filtere unerwünschte Anzeigen
    const filteredAds = ads.filter(ad => {
      const excludedTerms = ['Praktikant', 'Verstärkung', 'Festanstellung'];
      return !excludedTerms.some(term => ad.title.toLowerCase().includes(term.toLowerCase()));
    });

    await browser.close();

    res.status(200).json({ ads: filteredAds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
