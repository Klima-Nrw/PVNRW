'use client';

import { hide } from '@popperjs/core';
import { useState, useEffect } from 'react';

const styles = {
  container: {
    background: 'linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)',
    minHeight: '100vh',
    padding: '20px',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    textAlign: 'center',
    color: '#f7d51d',
    fontSize: '2.5rem',
    marginBottom: '20px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
  },
  select: {
    fontSize: '1em',
    padding: '5px',
    background: 'none',
    color: '#f7d51d',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
    display: 'inline-block',
    width: 'auto'
  },
  option: {
    background: '#2c3e50',
    color: '#ffffff'
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    padding: '20px',
    margin: '0 auto'
  },
  card: {
    background: '#2c3e50',
    borderRadius: '12px',
    padding: '15px',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  cardClicked: {
    background: '#e74c3c'
  },
  image: {
    maxWidth: '100%',
    borderRadius: '8px',
    marginBottom: '15px'
  },
  link: {
    color: '#f7d51d',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  price: {
    color: '#ecf0f1',
    fontSize: '1rem',
    marginTop: '10px'
  },
  description: {
    color: '#ecf0f1',
    fontSize: '0.9rem',
    marginTop: '10px',
    display: 'inline',
    textAlign: 'left',
    padding: '10px',
    borderRadius: '8px',
    height: 'auto'
  },
  loading: {
    textAlign: 'center',
    color: '#f7d51d',
    fontSize: '1.2rem',
    padding: '20px'
  }
};

export default function SearchPage() {
  const [ads, setAds] = useState([]);
  const [category, setCategory] = useState('photovoltaik');
  const [clickedCards, setClickedCards] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedClicks = JSON.parse(localStorage.getItem('clickedCards') || '{}');
    setClickedCards(savedClicks);
    fetchAds();
  }, [category]);

  const fetchAds = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/search?category=${category}`);
      const data = await response.json();
      if (data.ads) {
        setAds(data.ads);
      }
    } catch (error) {
      console.error('Error fetching ads:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (index) => {
    const newClickedCards = { ...clickedCards, [index]: true };
    setClickedCards(newClickedCards);
    localStorage.setItem('clickedCards', JSON.stringify(newClickedCards));
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value.toLowerCase();
    setCategory(newCategory);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        Gefundene Anzeigen für{' '}
        <select
          value={category}
          onChange={handleCategoryChange}
          style={styles.select}
        >
          <option style={styles.option} value="photovoltaik">Photovoltaik</option>
          <option style={styles.option} value="klimaanlagen">Klimaanlagen</option>
        </select>
      </h1>

      {loading && <div style={styles.loading}>Laden...</div>}

      <div style={styles.gallery}>
        {ads.map((ad, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              ...(clickedCards[index] ? styles.cardClicked : {})
            }}
          >
            <img
              src={ad.imageUrl}
              alt="Ad Image"
              style={styles.image}
            />
            <div>
              <a
                href={ad.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
                onClick={() => handleCardClick(index)}
              >
                {ad.title}
              </a>
              <p style={styles.price}>
                <strong>Preis:</strong> {ad.price}
              </p>
              <div style={styles.description}>
  {ad.description.length > 200
    ? `${ad.description.substring(0, 200)}...`
    : ad.description}
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}