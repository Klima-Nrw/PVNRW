import axios from 'axios';
import { JSDOM } from 'jsdom';

export default async function handler(req, res) {
  try {
    const { category = 'photovoltaik' } = req.query;
    const url = `https://www.kleinanzeigen.de/s-46286/anbieter:privat/anzeige:gesuche/${category}/k0l1758r100`;
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    const dom = new JSDOM(response.data);
    const document = dom.window.document;
    
    const fetchDescription = async (adUrl) => {
      try {
        const detailResponse = await axios.get(adUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });
        const detailDom = new JSDOM(detailResponse.data);
        const detailDoc = detailDom.window.document;
        const descriptionNode = detailDoc.querySelector('#viewad-description-text');
        return descriptionNode ? descriptionNode.textContent.trim() : "Keine Beschreibung verfügbar";
      } catch (error) {
        return "Keine Beschreibung verfügbar";
      }
    };

    const adsPromises = Array.from(document.querySelectorAll('article.aditem:not([id*="altads"])'))
      .map(async (ad) => {
        const title = ad.querySelector('a.ellipsis')?.textContent?.trim() || 'No Title';
        const price = ad.querySelector('p.aditem-main--middle--price')?.textContent?.trim() || 'No Price';
        const relativeLink = ad.querySelector('a.ellipsis')?.getAttribute('href') || '#';
        const link = `https://www.kleinanzeigen.de${relativeLink}`;
        const imageUrl = ad.querySelector('img')?.getAttribute('src') || 
          "https://static.kleinanzeigen.de/static/img/common/logo/logo-kleinanzeigen-horizontal.1f2pao1sh7vgo.svg";
        
        const description = await fetchDescription(link);
        return { title, price, link, imageUrl, description };
      });

    const ads = (await Promise.all(adsPromises))
      .filter(ad => {
        const excludedTerms = ['Praktikant', 'Verstärkung', 'Festanstellung'];
        return !excludedTerms.some(term => ad.title.toLowerCase().includes(term.toLowerCase()));
      });

    res.status(200).json({ ads });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
