"use client";

import React, { useState } from 'react';

export default function SolarForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    postcode: '',
    householdSize: '',
    annualConsumption: '',
    peakUsageTime: '',
    roofInclination: '',
    roofArea: '',
    name: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading state to true
    try {
      const response = await fetch('/api/multistep_form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormSubmitted(true);  // Set form submitted state
        setTimeout(() => {  // Hide the success message after 3 seconds
          setFormSubmitted(false);
        }, 10000);
        setFormData({
          postcode: '', householdSize: '', annualConsumption: '', 
          peakUsageTime: '', roofInclination: '', roofArea: '', 
          name: '', phone: ''
        });
        setStep(1);
      } else {
        alert('Fehler beim Senden.');
      }
    } catch (error) {
      alert('Ein Fehler ist aufgetreten.');
    } finally {
      setLoading(false);  // Reset loading state
    }
  };

  return (
    <div className="container-fluid py-5" style={{background: '#13487F'}}>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-md-5">
              <div className="text-center mb-4">
                <i className="bi bi-sun fs-1 text-warning mb-3"></i>
                <h2 className="fw-bold">Anfrage für eine Solaranlage</h2>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-5">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="position-relative d-flex flex-column align-items-center" style={{width: '14%'}}>
                    <div className={`rounded-circle d-flex align-items-center justify-content-center ${
                      i + 1 === step ? 'bg-primary text-white' : 
                      i + 1 < step ? 'bg-success text-white' : 'bg-light'
                    }`} style={{width: '40px', height: '40px'}}>
                      {i + 1 < step ? '✓' : i + 1}
                    </div>
                    <div className="progress w-100 position-absolute" style={{top: '20px', zIndex: -1}}>
                      <div className="progress-bar bg-success" style={{width: `${(step / 7) * 100}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="fade show">
              {step === 1 && (
                  <div>
                    <h4 className="mb-3">Standort der Solaranlage</h4>
                    <p className="text-muted">Bitte geben Sie Ihre Postleitzahl ein für ein regionales Angebot.</p>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      placeholder="Postleitzahl"
                    />
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h4 className="mb-3">Haushaltsgröße</h4>
                    <p className="text-muted">Wie viele Personen leben in Ihrem Haushalt?</p>
                    <div className="row g-3">
                      {['1', '2', '3', '4', '5+'].map((size) => (
                        <div className="col" key={size}>
                          <input
                            type="radio"
                            className="btn-check"
                            name="householdSize"
                            id={`size${size}`}
                            value={size}
                            checked={formData.householdSize === size}
                            onChange={handleInputChange}
                          />
                          <label className="btn btn-outline-primary w-100 py-3" htmlFor={`size${size}`}>
                            <i className="bi bi-people mb-2 d-block fs-4"></i>
                            {size} {size === '1' ? 'Person' : 'Personen'}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h4 className="mb-3">Stromverbrauch</h4>
                    <p className="text-muted">Wie hoch ist Ihr jährlicher Verbrauch?</p>
                    <div className="input-group input-group-lg">
                      <input
                        type="number"
                        className="form-control"
                        name="annualConsumption"
                        value={formData.annualConsumption}
                        onChange={handleInputChange}
                        placeholder="Jahresverbrauch"
                      />
                      <span className="input-group-text">kWh/Jahr</span>
                    </div>
                  </div>
                )}

               
{step === 4 && (
                  <div className="fade-in">
                    <h4>Zu welchen Zeiten nutzen Sie am meisten Strom?</h4>
                    <p className='text-muted'>Um Ihre Nutzungsmuster besser zu verstehen und die Rentabilität eines Stromspeichers zu prüfen, teilen Sie uns bitte mit, wann Sie typischerweise den höchsten Stromverbrauch haben.</p>
                    <select
                      className="form-select mb-3"
                      name="peakUsageTime"
                      value={formData.peakUsageTime}
                      onChange={handleInputChange}
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="morning">Morgens</option>
                      <option value="midday">Mittags</option>
                      <option value="evening">Abends</option>
                      <option value="night">Nachts</option>
                    </select>
                  </div>
                )}

                {step === 5 && (
                  <div className="fade-in">
                    <h4>Wie stark ist Ihr Dach geneigt?</h4>
                    <p className='text-muted'>Der Neigungswinkel Ihres Dachs beeinflusst die Effizienz Ihrer Solaranlage.</p>
                    <div className="row g-3">
                      {['15', '30', '45', '60'].map((angle) => (
                        <div key={angle} className="text-center col">
                          <input
                            type="radio"
                            className="btn-check"
                            name="roofInclination"
                            id={`angle${angle}`}
                            value={angle}
                            checked={formData.roofInclination === angle}
                            onChange={handleInputChange}
                          />   
                           <label className="btn btn-outline-primary w-100 py-3" htmlFor={`angle${angle}`}>
                            <i className="bi bi-house-door mb-2 fs-4"></i> {angle}°
                          </label>                                                
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <div className="fade-in">
                    <h4>Wie groß ist die verfügbare Fläche auf Ihrem Dach?</h4>
                    <p className='text-muted'>Die Größe der verfügbaren Dachfläche bestimmt, wie viele Solarmodule installiert werden können.</p>
                    <div className="row g-3 mb-3">
                      {['20', '30', '40', '50+'].map((area) => (
                        <div key={area} className="text-center col">
                          <input
                            type="radio"
                            className="btn-check"
                            name="roofArea"
                            id={`area${area}`}
                            value={area}
                            checked={formData.roofArea === area}
                            onChange={handleInputChange}
                          />
                          <label className="btn btn-outline-primary w-100 py-3" htmlFor={`area${area}`}>
                          <svg
  className="w-6 h-6 text-gray-800 dark:text-white"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"
  />
</svg>


                            <br />
                            {area} m²
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {
                    step === 7 && (
                        <div className="fade-in">
                        <h4><i className="bi bi-person-vcard-fill text-primary me-2"></i>Ihre Kontaktdaten</h4>
                        <p className='text-muted'>Bitte geben Sie Ihre Kontaktdaten an, damit wir Sie bezüglich Ihres individuellen Solarangebots kontaktieren können.</p>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Ihr vollständiger Name"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">Telefonnummer</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Ihre Telefonnummer"
                          />
                        </div>
                      </div>
                    )
                }

                <div className="d-flex justify-content-between mt-5">
                  {step > 1 && (
                    <button className="btn outline-primary btn-lg px-4" onClick={prevStep} disabled={loading}>
                      <i className="bi bi-arrow-left me-2"></i>Zurück
                    </button>
                  )}
                  <button 
                    className={`btn btn-lg px-4 ms-auto btn-primary`} 
                    onClick={step < 7 ? nextStep : submitForm} 
                    disabled={loading}
                  >
                    {loading ? (
                      <>Lädt... <i className="bi bi-hourglass-split ms-2"></i></>
                    ) : step < 7 ? (
                      <>Weiter<i className="bi bi-arrow-right ms-2"></i></>
                    ) : (
                      <>senden<i className="bi bi-check-lg ms-2"></i></>
                    )}
                  </button>
                </div>
              </div>

              {/* Success message */}
              {formSubmitted && (
                <div className="alert alert-success mt-3" role="alert">
              Ihre Anfrage wurde erfolgreich gesendet! Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
