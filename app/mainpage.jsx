"use client";
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Form from "../components/form"
import Boxes from "../components/boxes"
import Offer from "../components/offer"




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
      setStatusMessage('Ein Fehler ist aufgetreten.Ein Fehler ist aufgetreten..');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <>
  

<title>PVNrw | Wir installieren Solaranlagen</title>
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
<section className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0">
      <h1 className="display-4 fw-bold" >
  Alles aus einer Hand: <span className="text-primary">Verkauf, Montage & Reinigung von Solaranlagen</span>
</h1>
<p className="lead my-4" style={{fontSize: "20px"}}>
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





  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container about px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div
          className="col-lg-6 ps-lg-0 wow fadeIn"
          data-wow-delay="0.1s"
          style={{ minHeight: 400 }}
        >
          <div className="position-relative h-100">
   <img
  className="img-fluid w-100 h-100 img-cover"
  src="img/about.png"
  alt="uber aus"
  loading="lazy"
/>
          </div>
        </div>
        <div
          className="col-lg-6 about-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
       <div className="p-lg-5 pe-lg-0">
  <h6 className="text-primary">Über Uns</h6>
  <h1 className="mb-4">
  Über 10 Jahre Erfahrung in Solar- und erneuerbaren Energien – Ihr Partner für nachhaltige Lösungen!
  </h1>
  <p>
Mit über 10 Jahren Erfahrung in der erneuerbaren Energiebranche sind wir ein führender Anbieter von Solarenergie-Lösungen.
Wir bieten: Effiziente und langlebige Solarmodule
Individuelle Lösungen, perfekt auf Ihre Bedürfnisse abgestimmt
Engagierten Service und eine reibungslose Installation
Setzen Sie auf erschwingliche, nachhaltige Solarenergie für Haushalte und Unternehmen!
  </p>
  <p>
    <i className="fa fa-check-circle text-primary me-3" />
    Hochwertige Solarmodule, entwickelt für Effizienz und Langlebigkeit
  </p>
  <p>
    <i className="fa fa-check-circle text-primary me-3" />
    Individuelle Solar-Lösungen, abgestimmt auf Ihre Energiebedürfnisse
  </p>
  <p>
    <i className="fa fa-check-circle text-primary me-3" />
    Engagierter Kundenservice und ein nahtloser Installationsprozess
  </p>
  <Link
    href="/about"
    className="btn btn-primary rounded-pill py-3 px-5 mt-3"
    title="Erfahren Sie mehr über unsere Solarenergie-Lösungen"
  >
    Mehr Erfahren
  </Link>
</div>


        </div>
      </div>
    </div>
  </div>
  {/* About End */}



<Offer />


  {/* Service Start */}
  <div className="container-xxl py-5">
  <div className="container">
  <div
    className="text-center mx-auto mb-5 wow fadeInUp"
    data-wow-delay="0.1s"
    style={{ maxWidth: 600 }}
  >
    <h6 className="text-primary">Unsere Dienstleistungen</h6>
    <h1 className="mb-4">
     Experten für Solarmodulinstallation und Wartung – alles aus einer Hand!
    </h1>
  </div>
  <div className="row g-4">
    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-item rounded overflow-hidden">
        <img
          className="img-fluid"
          src="img/roof-installation.jpg"
          alt="Auf-Dach Installation"
        />
        <div className="position-relative p-4 pt-0">
          <div className="service-icon">
            <i className="fa fa-solar-panel fa-3x" />
          </div>
          <h4 className="mb-3">Auf-Dach Installation</h4>
          <p>
            Unsere Auf-Dach-Solaranlagen sorgen für eine optimale Energieerfassung und bieten die beste Effizienz für Ihr Zuhause oder Unternehmen.
          </p>
          <Link className="small fw-medium" href="/service">
            Mehr Erfahren
            <i className="fa fa-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
      <div className="service-item rounded overflow-hidden">
        <img
          className="img-fluid"
          src="img/surface-installation.jpg"
          alt="Auf-Flächen Installation"
        />
        <div className="position-relative p-4 pt-0">
          <div className="service-icon">
            <i className="fa fa-solar-panel fa-3x" />
          </div>
          <h4 className="mb-3">Auf-Flächen Installation</h4>
          <p>
          Unsere Solaranlagen für Flächen bieten eine flexible Lösung für Standorte mit begrenztem Dachraum und maximieren die Energie.
          </p>
          <Link className="small fw-medium" href="/service">
            Mehr Erfahren
            <i className="fa fa-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
      <div className="service-item rounded overflow-hidden">
        <img
          className="img-fluid"
          src="img/mantainance.jpg"
          alt="Wartungsdienste"
        />
        <div className="position-relative p-4 pt-0">
          <div className="service-icon">
            <i className="fa fa-wrench fa-3x" />
          </div>
          <h4 className="mb-3">Wartungsdienste</h4>
          <p>
            Wir bieten umfassende Wartungsdienste, damit Ihre Solaranlage dauerhaft mit maximaler Effizienz arbeitet.
          </p>
          <Link className="small fw-medium" href="/service">
            Mehr Erfahren
            <i className="fa fa-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

  {/* Service End */}

<Form />

   {/* Feature Start */}
   <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
  <div className="container feature px-lg-0">
  <div className="row g-0 mx-lg-0">
  <div
  className="col-lg-6 contact-text py-5 wow fadeIn px-1 px-md-5"
  data-wow-delay="0.5s"
  style={{
    paddingLeft: "10px", // Default padding for smaller screens
  }}
 >
    <div className="p-lg-5 ps-lg-0">
      <h6 className="text-primary">Warum Uns Wählen!</h6>
      <h1 className="mb-4">
       Ihr Vertrauenspartner
        Für Solarmodulinstallation und Wartung – zuverlässig und professionell!
      </h1>
      <p className="mb-4 pb-2">
        Spezialisiert auf Auf-Dach- und Flächeninstallationen von Solarmodulen, bieten wir individuelle Solarlösungen für Gewerbe- und Wohngebäude. Mit hochwertigen Photovoltaikanlagen,
        effizienten Solarmodulen und zuverlässigen Wartungsdiensten sorgt unser Expertenteam dafür,
        dass Ihr Solarstromsystem jahrelang optimal funktioniert. Wir sind Ihr Partner für erneuerbare Energien, nachhaltige Energieversorgung und kostensparende Solartechnik.
      </p>
      <div className="row g-4">
        <div className="col-md-6 col-sm-6">
          <div className="d-flex align-items-center">
            <div className="btn-lg-square bg-primary rounded-circle">
              <i className="fa fa-check text-white" />
            </div>
            <div className="ms-4">
              <p className="mb-0">Zuverlässige</p>
              <h5 className="mb-0">Installationen</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="d-flex align-items-center">
            <div className="btn-lg-square bg-primary rounded-circle">
              <i className="fa fa-users-cog text-white" />
            </div>
            <div className="ms-4">
              <p className="mb-0">Erfahrene</p>
              <h5 className="mb-0">Techniker</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="d-flex align-items-center">
            <div className="btn-lg-square bg-primary rounded-circle">
              <i className="fa fa-cogs text-white" />
            </div>
            <div className="ms-4">
              <p className="mb-0">Fachkundige</p>
              <h5 className="mb-0">Wartung</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="d-flex align-items-center">
            <div className="btn-lg-square bg-primary rounded-circle">
              <i className="fa fa-headphones-alt text-white" />
            </div>
            <div className="ms-4">
              <p className="mb-0">24/7</p>
              <h5 className="mb-0">Kundensupport</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="col-lg-6 pe-lg-0 wow fadeIn"
    data-wow-delay="0.5s"
    style={{ minHeight: 400 }}
  >
    <div className="position-relative h-100">
      <img
        className="position-absolute img-fluid w-100 h-100"
        src="img/feature.jpg"
        style={{ objectFit: "cover" }}
        alt="Solar Installation Services"
         loading="lazy"
      />
    </div>
  </div>
</div>

  </div>
</div>

  {/* Feature End */}


  <Boxes />


  {/* Projects Start */}
  <div className="container-xxl py-5">
  <div className="container">
  <div
    className="text-center mx-auto mb-5 wow fadeInUp"
    data-wow-delay="0.1s"
    style={{ maxWidth: 600 }}
  >
    <h6 className="text-primary">Unsere Referenzen</h6>
    <h1 className="mb-4">
   Neueste Photovoltaik-Installationen auf Dächern, Flachdächern und Freiflächen – effizient und nachhaltig!
    </h1>
  </div>      
 
  <div
  className="row g-4 portfolio-container wow fadeInUp"
  data-wow-delay="0.5s"
>
  <div className="col-lg-4 col-md-6 portfolio-item first">
    <div className="portfolio-img rounded overflow-hidden">
      <img
        className="img-fluid"
        src="img/recentwork-1.jpg"
        alt="Solaranlage Installation auf Dach"
        style={{ objectFit: 'cover', width: '100%', height: '300px' }}
         loading="lazy"

      />
      <div className="portfolio-btn">
        <a
          className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
          href="img/recentwork-1.jpg"
          data-lightbox="portfolio"
        >
          <i className="fa fa-eye"></i>
        </a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 portfolio-item second">
    <div className="portfolio-img rounded overflow-hidden">
      <img
        className="img-fluid"
        src="img/recentwork-2.jpg"
        alt="Solaranlage auf Flachdach"
        style={{ objectFit: 'cover', width: '100%', height: '300px' }}
         loading="lazy"
      />
      <div className="portfolio-btn">
        <a
          className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
          href="img/recentwork-2.jpg"
          data-lightbox="portfolio"
        >
          <i className="fa fa-eye"></i>
        </a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 portfolio-item third">
    <div className="portfolio-img rounded overflow-hidden">
      <img
        className="img-fluid"
        src="img/recentwork-3.jpg"
        alt="Solarwartung auf Dach"
        style={{ objectFit: 'cover', width: '100%', height: '300px' }}
         loading="lazy"
      />
      <div className="portfolio-btn">
        <a
          className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
          href="img/recentwork-3.jpg"
          data-lightbox="portfolio"
        >
          <i className="fa fa-eye"></i>
        </a>
      </div>
    </div>
  </div>
</div>


  <div
  className="row g-4 mt-4 portfolio-container wow fadeInUp"
  data-wow-delay="0.5s"
>
  <div className="col-lg-4 col-md-6 portfolio-item first">
    <div className="portfolio-img rounded overflow-hidden">
      <img
        className="img-fluid"
        src="img/recentwork-4.jpg"
        alt="Solaranlage Installation auf Dach"
        style={{ objectFit: 'cover', width: '100%', height: '300px' }}
         loading="lazy"
      />
      <div className="portfolio-btn">
        <a
          className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
          href="img/recentwork-4.jpg"
          data-lightbox="portfolio"
        >
          <i className="fa fa-eye"></i>
        </a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 portfolio-item second">
    <div className="portfolio-img rounded overflow-hidden">
      <img
        className="img-fluid"
        src="img/recentwork-5.jpg"
        alt="Solaranlage auf Flachdach"
        style={{ objectFit: 'cover', width: '100%', height: '300px' }}
         loading="lazy"
      />
      <div className="portfolio-btn">
        <a
          className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
          href="img/recentwork-5.jpg"
          data-lightbox="portfolio"
        >
          <i className="fa fa-eye"></i>
        </a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 portfolio-item third">
    <div className="portfolio-img rounded overflow-hidden">
      <img
        className="img-fluid"
        src="img/recentwork-6.jpg"
        alt="Solarwartung auf Dach"
        style={{ objectFit: 'cover', width: '100%', height: '300px' }}
         loading="lazy"
      />
      <div className="portfolio-btn">
        <a
          className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
          href="img/recentwork-6.jpg"
          data-lightbox="portfolio"
        >
          <i className="fa fa-eye"></i>
        </a>
      </div>
    </div>
  </div>
</div>

</div>

</div>


  
  {/* Quote Start */}
  <div className="container-fluid bg-light overflow-hidden mt-5 px-lg-0">
    <div className="container quote px-lg-0">
    <div className="row g-0 mx-lg-0">
  <div
    className="col-lg-6"
    data-wow-delay="0.1s"
    style={{ minHeight: 400 }}
  >
    <div className="position-relative h-100">
      <img
        className="position-absolute img-fluid w-100 h-100"
        src="img/form.png"
        style={{ objectFit: "cover" }}
        alt=""
      />
    </div>
  </div>
  <div
    className="col-lg-6 quote-text py-5 wow fadeIn"
    data-wow-delay="0.5s"
  >
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
</div>

    </div>
  </div>
  {/* Quote End */}



  <div className="pb-5 bg-light">
  <div
  className="text-center mx-auto mb-5 wow fadeInUp"
  data-wow-delay="0.1s"
  style={{ maxWidth: "600px" }}
>
  <h6 className="text-primary">Unser Blog</h6>
  <h1 className="mb-4">
  Entdecken Sie die neuesten Tipps, Trends und Erkenntnisse zur Solarenergie
  </h1>
</div>

  <div className="container">
    <div className="row g-4">
      {/* First Blog Post */}
      <div className="col-md-4">
        <div className="card border-0 shadow h-100">
          <img 
            src="/img/article1.png" 
            className="card-img-top rounded-top" 
            alt="Blog post 1 thumbnail" 
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">
            Regelmäßige Wartung sichert die langfristige Leistung von Solarmodulen
            </h5>
            <p className="card-text text-muted">
            Die Installation von Solarmodulen ist ein großer Schritt in Richtung Energieunabhängigkeit und Nachhaltigkeit. Doch um sicherzustellen....
            </p>
            <Link href="/artikel/die-bedeutung-der-regelmaBigen-wartung-von-solarmodulen" className="btn outline-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card border-0 shadow h-100">
          <img 
            src="/img/article2.png" 
            className="card-img-top rounded-top" 
            alt="Blog post 1 thumbnail" 
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">
            Maximierung der Energieeffizienz mit Solarmodulen auf dem Dach
            </h5>
            <p className="card-text text-muted">
            Solarmodule auf dem Dach sind eine ausgezeichnete Investition für Hausbesitzer und Unternehmen, die ihre Energiekosten senken.....
            </p>
            <Link  href="/artikel/maximierung-der-energieeffizienz-mit-solarmodulen-auf-dem-dach" className="btn outline-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Second Blog Post */}
      <div className="col-md-4">
        <div className="card border-0 shadow h-100">
          <img 
            src="/img/article3.png" 
            className="card-img-top rounded-top" 
            alt="Blog post 2 thumbnail" 
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">
            Warum Flache Solar-Module Perfekt für Moderne Gebäude Sind
            </h5>
            <p className="card-text text-muted">
            Flache Solar-Module bieten eine moderne Lösung für Gebäude mit begrenztem Dachraum oder wenn ästhetische Überlegungen wichtig sind....
            </p>
            <Link href="/artikel/warum-flache-solar-module-perfekt-fur-moderne-gebaude-sind" className="btn outline-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="pt-5" style={{ backgroundColor: '#13487f' }}>
  <div className="container py-5">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8">
        <span className="badge bg-light text-primary px-4 py-2 fs-6 mb-4 d-inline-block">
          Jetzt Angebote Sichern
        </span>
        
        <h2 className="display-4 text-white fw-bold mb-4">
          Machen Sie Ihr Zuhause energieeffizient<br/>mit Solarpanelen
        </h2>
        
        <p className="lead text-white-50 mb-5">
          Schließen Sie sich den zahlreichen zufriedenen Kunden an, die von unserer professionellen Installation und Wartung von Solaranlagen profitieren.
        </p>
        
        <div className="d-flex flex-column align-items-center gap-4">
          <Link href="/quote">
          <button 
            className="btn  bg-light outline-primary btn-lg px-5 py-3 fw-bold shadow-sm"
            style={{ transition: 'all 0.3s ease' }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
            }}
          >
            Holen Sie sich Ihre kostenlose Beratung
          </button>
          </Link>
          
          <div className="text-white-50 small">
            <span className="me-3">✓ Keine Kreditkarte erforderlich</span>
            <span className="me-3">✓ Kostenlose Beratung</span>
            <span>✓ Expertenberatung</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<a
  href="#"
  className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top d-none d-md-flex"
>
  <i className="bi bi-arrow-up"></i>
</a>

</>

  )
}
