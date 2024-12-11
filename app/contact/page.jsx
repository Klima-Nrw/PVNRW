"use client";

import { useState } from 'react';
import Headers from "../../components/header";
import Footer from "../../components/footer";
import Link from 'next/link';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatusMessage(''); // Reset status message
    setIsLoading(true); // Set loading state

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatusMessage(result.message || 'Failed to send message');
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <title>Kontaktieren Sie uns | Solarsysteme</title>
      <Headers />

      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Kontakt</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="text-white" href="/">Startseite</Link>
              </li>             
              <li className="breadcrumb-item text-white active" aria-current="page">Kontakt</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Kontakt Start */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: "6rem 0" }}>
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <h6 className="text-primary">Kontaktieren Sie uns</h6>
                <h1 className="mb-4">Zögern Sie nicht, uns zu kontaktieren</h1>
                <p className="mb-4">
                  Haben Sie Fragen oder benötigen Sie Hilfe? Kontaktieren Sie uns jederzeit. Wir sind bestrebt, Ihnen die Unterstützung zu bieten, die Sie zum Erreichen Ihrer Ziele benötigen.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Ihr Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Ihr Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Ihre E-Mail"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <label htmlFor="email">Ihre E-Mail</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Betreff"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        <label htmlFor="subject">Betreff</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Hinterlassen Sie hier eine Nachricht"
                          id="message"
                          name="message"
                          style={{ height: 100 }}
                          value={formData.message}
                          onChange={handleChange}
                        />
                        <label htmlFor="message">Nachricht</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary rounded-pill py-3 px-5" type="submit" disabled={isLoading}>
                        {isLoading ? 'Senden...' : 'Nachricht senden'}
                      </button>
                    </div>
                  </div>
                </form>
                {statusMessage && <p className="mt-3">{statusMessage}</p>}
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-absolute w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameBorder={0}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
