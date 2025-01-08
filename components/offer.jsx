import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 24,
    minutes: 60,
    seconds: 60
  });

  const [showModal, setShowModal] = useState(false);  // To handle modal visibility
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    offer: null
  });

  const [isSuccess, setIsSuccess] = useState(null);  // To track form submission success
  const [errorMessage, setErrorMessage] = useState(''); // To track any error messages

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => ({
        ...prev,
        seconds: prev.seconds > 0 ? prev.seconds - 1 : 59,
        minutes: prev.seconds === 0 ? (prev.minutes > 0 ? prev.minutes - 1 : 59) : prev.minutes,
        hours: prev.minutes === 0 && prev.seconds === 0 ? (prev.hours > 0 ? prev.hours - 1 : 23) : prev.hours,
        days: prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0 ? prev.days - 1 : prev.days
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      power: '6kWp',
      storage: '10 kWh',
      originalPrice: '16.000',
      salePrice: '13.000',
      savings: '3.000',
      video: '/img/19percentOff.mp4'
    },
    {
      power: '8kWp',
      storage: '10 kWh',
      originalPrice: '17.500',
      salePrice: '14.000',
      savings: '3.500',
      video: '/img/18percentOff.mp4'
    },
    {
      power: '10kWp',
      storage: '10 kWh',
      originalPrice: '20.000',
      salePrice: '16.000',
      savings: '4.000',
      video: '/img/20percentOff.mp4'
    },
    {
      power: '12kWp',
      storage: '10 kWh',
      originalPrice: '22.000',
      salePrice: '18.000',
      savings: '4.000',
      video: '/img/18percentOff.mp4'
    }
  ];

  const handleOfferClick = (offer) => {
    setFormData({ ...formData, offer });
    setShowModal(true);  // Open modal when an offer is clicked
    setIsSuccess(null);  // Reset success/error message when opening modal
    setErrorMessage('');
  }; // <-- This was missing!

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the success/error message before submitting
    setIsSuccess(null);
    setErrorMessage('');

    // Send the form data along with the selected offer data to the API
    try {
      const response = await fetch('/api/offers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
        setErrorMessage('Etwas ist schiefgegangen. Bitte versuchen Sie es später erneut.');
      }
       // Close modal after submission
    } catch (error) {
      setIsSuccess(false);
      setErrorMessage('Es gab einen Fehler beim Senden der Daten.');
      
    }
  };

  return (
    <div className="container-fluid py-5" style={{background: '#13487F'}} >
      <div className="container">
        {/* Sale Banner */}
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h6 className="text-white">Exklusive Solaranlagen-Angebote</h6>
          <h1 className="mb-4 text-white">
            Sparen Sie jetzt bei unseren All-Inclusive Photovoltaik-Paketen
          </h1>
        </div>

        {/* Offers Grid */}
        <div className="row">
          {offers.map((offer, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 shadow">
                <div className="position-relative">
                <video
  src={offer.video}
  alt={`${offer.power} Solaranlage`}
  className="card-img-top"
  style={{height: '200px', objectFit: 'cover'}}
  autoPlay
  muted
  loop
  loading="lazy"
>
  Your browser does not support the video tag.
</video>

                  <div className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 m-2 rounded-pill">
                    <small className="font-weight-bold">
                      -{Math.round((parseInt(offer.savings) / parseInt(offer.originalPrice)) * 100)}%
                    </small>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">{offer.power} Anlage</h4>
                  <p className="text-muted mb-2"><del>€{offer.originalPrice}</del></p>
                  <h3 className="text-primary mb-2">€{offer.salePrice}</h3>
                  <p className="text-success font-weight-bold">Sie sparen €{offer.savings}</p>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>{offer.storage} Speicher inklusive</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Komplette DC Installation</li>
                    <li><i className="bi bi-x-circle-fill text-danger me-2"></i>Ohne Schaltschrank</li>
                    <li><i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>Gerüst optional</li>
                  </ul>
                </div>
                <div className="card-footer bg-white border-top-0">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => handleOfferClick(offer)}
                  >
                    Jetzt Angebot sichern
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="rounded p-4 d-inline-block" style={{background: "#13487f"}}>
              <p className="text-white mb-3">
                * Alle Preise inklusive MwSt. und Installation. Limitiertes Angebot, nur solange der Vorrat reicht.
              </p>
              <Link href="/quote">
                <button className="btn btn-light btn-lg">
                  Kostenlose Beratung vereinbaren
                </button>
              </Link>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal fade show rounded-lg" tabIndex="-1" style={{ display: 'block' }} aria-modal="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title text-white">                 
                  Vielen Dank, dass Sie sich für uns entschieden haben 💐
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)} aria-label="Schließen"></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="alert alert-info" role="alert">
                    <i className="bi bi-info-circle-fill me-2"></i>
                    Füllen Sie das Formular aus, unser Team wird sich in Kürze mit Ihnen in Verbindung setzen
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <i className="bi bi-person-fill me-2"></i>Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      <i className="bi bi-telephone-fill me-2"></i>Telefon
                    </label>
                    <div className="input-group input-group">
                      <span className="input-group-text">+49</span>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="privacyCheck" required />
                    <label className="form-check-label" htmlFor="privacyCheck">
                      Ich stimme der <Link href="/Datenschutzerklarung" className="text-primary">Datenschutzerklärung</Link> zu
                    </label>
                  </div>
                </div>
                <div className="modal-footer bg-light">
                  <button type="button" className="btn btn-outline-secondary" onClick={() => setShowModal(false)}>
                    <i className="bi bi-x-circle me-2"></i>Abbrechen
                  </button>
                  <button type="submit" className="btn btn-primary btn">
                    <i className="bi bi-send-fill me-2"></i>Angebot anfordern
                  </button>

                  {isSuccess !== null && (
                <div className={`mt-3 text-center ${isSuccess ? 'text-success' : 'text-danger'}`}>
                    {isSuccess ? '*Danke für Ihre Anfrage! Wir werden uns bald bei Ihnen melden.' : errorMessage}
                </div>
                )}

                </div>
              </form>
            
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialOffers;
