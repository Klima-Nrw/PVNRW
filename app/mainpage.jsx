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
          <div className="row mt-5">
            <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4>Energiekosten sparen</h4>
              <p>Bis zu 80% weniger Stromkosten mit unseren Photovoltaikanlagen!</p>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
              <div className="mb-3">
                <svg
                  className="bi bi-house-fill"
                  fill="currentColor"
                  height={48}
                  viewBox="0 0 16 16"
                  width={48}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708L8 2.207l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6z" />
                  <path d="M13 10v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <h4>Experteninstallation</h4>
              <p>Über 10 Jahre Erfahrung in Solarenergie und Photovoltaik-Installation!</p>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
              <div className="mb-3">
                <svg
                  className="bi bi-check-circle-fill"
                  fill="currentColor"
                  height={48}
                  viewBox="0 0 16 16"
                  width={48}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.93 10.768a.75.75 0 0 0 1.06-.02l3.482-4.216a.75.75 0 1 0-1.137-.978l-3.02 3.66-1.47-1.353a.75.75 0 0 0-1.037 1.086l2 1.844z" />
                </svg>
              </div>
              <h4>Kundenzufriedenheit</h4>
              <p>Werden Sie Teil unserer zufriedenen Solarhaushalte!</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="mb-3">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={48}
                  height={48}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.695 17.695 0 0 0 2.022 7.98 17.405 17.405 0 0 0 5.403 6.158 1 1 0 0 0 1.15 0 17.406 17.406 0 0 0 5.402-6.157A17.694 17.694 0 0 0 20 6.68a1 1 0 0 0-.644-.949l-7-2.666Z" />
                </svg>
              </div>
              <h4>Umweltfreundlich</h4>
              <p>Nachhaltige Energie für eine grünere Zukunft!</p>
            </div>
          </div>
        </div>
      </section>
      {/* Weitere Inhalte */}
    </>
  );
}
