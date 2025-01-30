"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Form from "../components/form";
import Boxes from "../components/boxes";
import Offer from "../components/offer";

export default function Page() {
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
        setStatusMessage('Anfrage erfolgreich gesendet!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatusMessage('Fehler beim Senden der Anfrage');
      }
    } catch (error) {
      setStatusMessage('Ein Fehler ist aufgetreten.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <Head>
        <title>Photovoltaik in NRW | Solaranlagen kaufen & installieren</title>
        <meta
          name="description"
          content="PV NRW – Ihr Experte für Photovoltaik-Lösungen in Nordrhein-Westfalen. Wir bieten maßgeschneiderte Solaranlagen für Privat- und Gewerbekunden, um eine nachhaltige Energiezukunft zu schaffen."
        />
        <meta
          name="keywords"
          content="Photovoltaik, Solaranlagen, erneuerbare Energien, Solarstrom, Nordrhein-Westfalen, PV NRW"
        />
        <meta name="author" content="PV NRW" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="de" />
      </Head>
      {/* Rest des Codes */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold">
                Alles aus einer Hand: <span className="text-primary">Verkauf, Montage & Reinigung von Solaranlagen</span>
              </h1>
              <p className="lead my-4" style={{ fontSize: "20px" }}>
                Senken Sie Ihre Stromkosten und fördern Sie eine grüne Zukunft mit unseren Photovoltaik-Lösungen.
                Wir bieten Planung, Installation und Wartung für nachhaltige Solarenergie und effiziente Stromversorgung.
              </p>
              <Link className="btn btn-lg btn-primary" href="/service">
                Mehr erfahren
              </Link>
            </div>
            <div className="col-lg-6">
              <img
                alt="Solarpanele"
                className="img-fluid"
                src="img/hero-image.jpg"
                loading="lazy"
              />
            </div>
          </div>
          {/* Weitere Inhalte */}
        </div>
      </section>
      {/* Weitere Abschnitte */}
    </>
  );
}
