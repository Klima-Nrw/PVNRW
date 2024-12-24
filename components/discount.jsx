'use client';

import React, { useState, useEffect } from 'react';
import './ChristmasPopup.css';

export default function ChristmasPopup() {
  const [show, setShow] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [snowflakes, setSnowflakes] = useState([]);
  const [showBullet, setShowBullet] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    const generateSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 50; i++) {
        flakes.push({
          id: i,
          left: Math.random() * window.innerWidth,
          duration: Math.random() * 5 + 5,
          size: Math.random() * 10 + 10,
        });
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setSuccessMessage('');
    setShowBullet(true);
  };

  const handleReopenPopup = () => {
    setShow(true);
    setShowBullet(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader
    const phoneNumber = document.getElementById('phoneInput').value;

    try {
      const response = await fetch('/api/discount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Danke schön! Unser Team wird sich in Kürze bei Ihnen melden');
        setTimeout(() => {
          handleClose();
        }, 5000); // Close popup after 5 seconds
      } else {
        setSuccessMessage('Bitte versuchen Sie es später noch einmal.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später.');
    } finally {
      setLoading(false); // Hide loader
    }
  };

  if (!show && !showBullet) return null;

  return (
    <>
      {show && (
        <div id="christmasPopup" className="popup-overlay">
          <div className="popup-content">
            <button id="closeButton" onClick={handleClose}>
              &times;
            </button>
            <h2 id="popupTitle">Weihnachtsgeschenk!</h2>
            <div id="popupBody">
              <h3 id="discountText">🎄 10% RABATT 🎄</h3>
              <p id="offerText">bis 29. Dezember</p>
              {!successMessage ? (
                <form id="phoneForm" onSubmit={handleSubmit}>
                  <label htmlFor="phoneInput">Geben Sie Ihre Handynummer für eine kostenlose Beratung ein:</label>
                  <input type="tel" id="phoneInput" required />
                  <button type="submit" id="submitButton" disabled={loading}>
                    {loading ? 'Wird gesendet...' : 'Jetzt sichern'}
                  </button>
                </form>
              ) : (
                <p className="success-message">{successMessage}</p>
              )}
            </div>
          </div>

          {/* Render snowflakes */}
          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="snowflake"
              style={{
                left: `${flake.left}px`,
                fontSize: `${flake.size}px`,
                animationDuration: `${flake.duration}s`,
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}

      {showBullet && (
        <div id="bulletIcon" onClick={handleReopenPopup}>
          <span>🎄</span>
          <span>10%</span>
          <span>RABATT</span>
          <span>🎄</span>
        </div>
      )}
    </>
  );
}
