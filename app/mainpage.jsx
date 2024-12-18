"use client";
import dynamic from 'next/dynamic'
import Link from 'next/link';



export default function Page() {
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
        <h1 className="display-3 fw-bold">
       Verkauf, Montage, Reinigung {" "}
          <span className="text-primary">Alles aus einer Hand !</span>
        </h1>
        <p className="lead my-4">
          Reduzieren Sie Ihre Stromkosten und leisten Sie einen Beitrag zu einer sauberen, grüneren Zukunft mit unseren hochwertigen Solarpanel-Lösungen.
        </p>
        <Link className="btn btn-lg btn-primary" href="/service">
          Mehr erfahren
        </Link>
      </div>
      <div className="col-lg-6">
      <img
  alt="Solarpanele"
  className="img-fluid"
  src="img/hero-image.webp"
/>

      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
        <div className="mb-3">
        <svg
            className="bi bi-sun"
            fill="currentColor"
            height={48}
            viewBox="0 0 16 16"
            width={48}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.688-4.5h1.562a.5.5 0 0 1 0 1h-1.562a.5.5 0 0 1 0-1zm-9.376 0a.5.5 0 0 1 0 1H1.75a.5.5 0 0 1 0-1h1.562zM8 3.313a.5.5 0 0 1 1 0v1.562a.5.5 0 0 1-1 0V3.313zm0 9.376a.5.5 0 0 1 1 0v1.562a.5.5 0 0 1-1 0v-1.562zM11.597 5.025a.5.5 0 0 1 .707 0l1.104 1.104a.5.5 0 0 1-.707.707L11.597 5.732a.5.5 0 0 1 0-.707zm-7.194 7.194a.5.5 0 0 1 .707 0l1.104-1.104a.5.5 0 0 1-.707-.707L3.732 12.219a.5.5 0 0 1 0 .707zm7.194 1.104a.5.5 0 0 1-.707 0l-1.104-1.104a.5.5 0 0 1 .707-.707l1.104 1.104a.5.5 0 0 1 0 .707zm-7.194-7.194a.5.5 0 0 1-.707 0L2.195 4.732a.5.5 0 0 1 .707-.707L4.007 6.136a.5.5 0 0 1 0 .707z" />
          </svg>
        </div>
        <h4>Energiekosten sparen</h4>
        <p>Unsere Kunden sparen bis zu 80% bei ihren Stromrechnungen.</p>
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
        <p>Über ein Jahrzehnt Erfahrung in Solarenergie-Lösungen.</p>
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
        <p>Schließen Sie sich vielen glücklichen Solarhaushalten an.</p>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="mb-3">
        <svg
            className="bi bi-tree"
            fill="currentColor"
            height={48}
            viewBox="0 0 16 16"
            width={48}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.416.223a.5.5 0 0 1 .168.677l-5.5 9.5a.5.5 0 0 1-.874-.01L6.327 6.04H4.59a.5.5 0 0 1-.4-.796l3.5-5a.5.5 0 0 1 .726-.021zm-.833 10.473l-3.5-6a.5.5 0 1 0-.865.502l3.5 6a.5.5 0 0 0 .865-.502zm.833-10.473l5.5 9.5a.5.5 0 0 1-.874.01L9.673 6.04H11.41a.5.5 0 0 1 .4.796l-3.5 5a.5.5 0 0 1-.726.021zm.833 10.473l3.5-6a.5.5 0 1 0-.865-.502l-3.5 6a.5.5 0 0 0 .865.502z" />
          </svg>
        </div>
        <h4>Umweltfreundlich</h4>
        <p>Wir fördern nachhaltige Energie für eine bessere Zukunft.</p>
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
              className="img-fluid w-100 h-100"
              src="img/about.png"
              style={{ objectFit: "cover" }}
              alt=""
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
    Über 10 Jahre Erfahrung in Solar- & Erneuerbare-Energien-Lösungen
  </h1>
  <p>
    Wir sind ein führender Anbieter von Solarenergie-Lösungen mit über 25 Jahren
    Erfahrung in der Branche der erneuerbaren Energien. Unser Team widmet sich
    der Aufgabe, erschwingliche und nachhaltige Solarenergie für Haushalte und
    Unternehmen bereitzustellen.
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
      Wir sind Experten für Solarmodulinstallation und -wartung
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
          <Link className="small fw-medium" href="/about">
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
  {/* Feature Start */}
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
  <div className="container feature px-lg-0">
  <div className="row g-0 mx-lg-0">
  <div
    className="col-lg-6 feature-text py-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="p-lg-5 ps-lg-0">
      <h6 className="text-primary">Warum Uns Wählen!</h6>
      <h1 className="mb-4">
        Ihr Vertrauenspartner für Solarmodulinstallation & Wartung
      </h1>
      <p className="mb-4 pb-2">
        Wir sind spezialisiert auf Auf-Dach- und Flächeninstallationen von Solarmodulen und bieten maßgeschneiderte Lösungen für Gewerbe- und Wohngebäude. Unser Expertenteam sorgt mit professionellen Wartungsdiensten dafür, dass Ihr Solarsystem über Jahre hinweg optimal funktioniert.
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
      />
    </div>
  </div>
</div>

  </div>
</div>

  {/* Feature End */}
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
      Entdecken Sie unsere neuesten Installationen von Solaranlagen auf Dächern und Flachdächern
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
  <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
    <div className="container quote px-lg-0">
    <div className="row g-0 mx-lg-0">
  <div
    className="col-lg-6 ps-lg-0 wow fadeIn"
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
    <div className="p-lg-5 pe-lg-0">
      <h6 className="text-primary">Kostenloses Angebot</h6>
      <h1 className="mb-4">Holen Sie sich ein kostenloses Angebot</h1>
      <p className="mb-4 pb-2">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
        lorem sit clita duo justo erat amet.
      </p>
      <form>
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Ihr Name"
              style={{ height: 55 }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              type="email"
              className="form-control border-0"
              placeholder="Ihre E-Mail"
              style={{ height: 55 }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Ihre Telefonnummer"
              style={{ height: 55 }}
            />
          </div>
          <div className="col-12 col-sm-6">
          <select
  className="form-select border-0"
  style={{ height: 55 }}
  defaultValue="" // Sets the default selected option
>
  <option value="" disabled>
    Wählen Sie einen Service
  </option>
  <option value="roof-installation">Dachinstallation</option>
  <option value="flat-surface-installation">Flachflächeninstallation</option>
  <option value="maintenance">Wartung</option>
  <option value="other">Sonstiges</option>
</select>


                </div>
          <div className="col-12">
            <textarea
              className="form-control border-0"
              placeholder="Besondere Anmerkungen"
              defaultValue={""}
            />
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary rounded-pill py-3 px-5"
              type="submit"
            >
              Absenden
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  </div>
  {/* Quote End */}
  {/* Team Start 
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h6 className="text-primary">Team Member</h6>
        <h1 className="mb-4">Experienced Team Members</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item rounded overflow-hidden">
            <div className="d-flex">
              <img className="img-fluid w-75" src="img/team-1.jpg" alt="" />
              <div className="team-social w-25">
                <a
                  className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="p-4">
              <h5>Full Name</h5>
              <span>Designation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item rounded overflow-hidden">
            <div className="d-flex">
              <img className="img-fluid w-75" src="img/team-2.jpg" alt="" />
              <div className="team-social w-25">
                <a
                  className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="p-4">
              <h5>Full Name</h5>
              <span>Designation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item rounded overflow-hidden">
            <div className="d-flex">
              <img className="img-fluid w-75" src="img/team-3.jpg" alt="" />
              <div className="team-social w-25">
                <a
                  className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="p-4">
              <h5>Full Name</h5>
              <span>Designation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 */}



<a
  href="#"
  className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top d-none d-md-flex"
>
  <i className="bi bi-arrow-up"></i>
</a>

</>

  )
}
