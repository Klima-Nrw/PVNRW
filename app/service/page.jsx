import Footer from "@/components/footer";
import Headers from "../../components/header";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <title>Dienstleistungen | PVNRW </title>
      <meta
        name="description"
        content="Entdecken Sie die umfassenden Dienstleistungen von PV NRW für Solarsysteme in Nordrhein-Westfalen. Von der Beratung bis zur Installation – wir sind für Sie da."
      />
      <meta
        name="keywords"
        content="Solarenergie-Dienstleistungen, Photovoltaik-Service NRW, Solaranlagen-Installation, erneuerbare Energielösungen"
      />
      <Headers />

      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Dienstleistungen
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="text-white" href="/">
                  Startseite
                </Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Dienstleistungen
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Services Start */}
     {/* Services Start */}
     <div className="container py-5">
  {/* Section Header */}
  <div className="text-center mx-auto mb-5" style={{ maxWidth: 800 }}>
    <h6 className="text-primary fw-bold">Unsere Dienstleistungen</h6>
    <h1 className="mb-4">Individuelle Lösungen für Ihre Energiezukunft</h1>
    <p className="lead">
      Wir bieten ein umfassendes Angebot an Dienstleistungen für Solarsysteme, 
      um eine nachhaltige und effiziente Energieversorgung zu gewährleisten. 
      Vertrauen Sie auf unsere Expertise und Leidenschaft für erneuerbare Energien.
    </p>
  </div>

  {/* Section Content */}
  {[
    {
      title: "Photovoltaik-Montage und Installation",
      description: `Unsere Dienstleistungen umfassen die komplette Planung und Installation Ihrer Photovoltaikanlage. Wir setzen auf modernste Technologien und garantieren höchste Effizienz.`,
      imgSrc: "img/service-1.webp",
      imgAlt: "Photovoltaik-Montage",
      points: [
        "Fachgerechte Montage von Solarmodulen, inklusive Dachkonstruktionen",
        "Installation von Wechselrichtern und Überwachungssystemen",
        "Verkabelung und Integration in Ihr Stromnetz",
        "Überspannungsschutz und Sicherheitsprüfung",
      ],
    },
    {
      title: "Energie-Management und Speicherlösungen",
      description: `Maximieren Sie Ihre Energieunabhängigkeit mit unseren innovativen Speicherlösungen.`,
      imgSrc: "img/service-2.webp",
      imgAlt: "Energiespeicher",
      points: [
        "Analyse Ihres Energieverbrauchs und Dimensionierung der Speichergröße",
        "Installation von AC- und DC-gekoppelten Speichersystemen",
        "Integration in bestehende Solaranlagen",
        "Regelmäßige Wartung und Monitoring der Speicherleistung",
      ],
      reverse: true,
    },
    {
      title: "Balkonkraftwerke",
      description: `Mit unseren Balkonkraftwerken bieten wir kompakte und flexible Lösungen für umweltbewusste Haushalte.`,
      imgSrc: "img/service-3.webp",
      imgAlt: "Balkonkraftwerke",
      points: [
        "Einfache Montage an Balkonen oder Terrassen",
        "Ideal für Mieter und Wohnungseigentümer",
        "Kostenersparnis durch direkten Eigenverbrauch",
        "Plug-and-Play-Lösungen für schnellen Start",
      ],
    },
    {
      title: "Elektromobilität",
      description: `Machen Sie den nächsten Schritt in eine grüne Zukunft mit unseren Lösungen für Elektromobilität.`,
      imgSrc: "img/service-4.webp",
      imgAlt: "Elektromobilität",
      points: [
        "Installation von Ladestationen für Elektrofahrzeuge",
        "Integration von Ladestationen mit Ihrer PV-Anlage",
        "Beratung zu staatlichen Förderungen und Zuschüssen",
        "Regelmäßige Wartung und Optimierung Ihrer Ladesysteme",
      ],
      reverse: true,
    },
  ].map((service, index) => (
    <div
      className={`row align-items-center mb-5 ${
        service.reverse ? "flex-md-row-reverse" : ""
      }`}
      key={index}
    >
      <div className="col-md-6">
        <img
          className="img-fluid rounded shadow-sm"
          width={500}
          height={80}
          src={service.imgSrc}
          alt={service.imgAlt}
        />
      </div>
      <div className="col-md-6">
        <h4 className="mb-3">{service.title}</h4>
        <p>{service.description}</p>
        <ul className="list-unstyled mb-3">
          {service.points.map((point, idx) => (
            <li key={idx} className="d-flex align-items-start mb-2">
              <i className="bi bi-check-circle text-primary me-2"></i>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p>Kontaktieren Sie uns für mehr Informationen zu diesem Service.</p>
      </div>
    </div>
  ))}

</div>

      <div className="bg-light py-5 px-5 mt-5 text-center">
          <h2 className="mb-4">Interessiert an unseren Dienstleistungen?</h2>
          <p className="lead mb-4">
            Kontaktieren Sie uns noch heute für eine unverbindliche Beratung. 
            Unser Expertenteam steht bereit, um Ihre Fragen zu beantworten und 
            die perfekte Lösung für Ihre Energiebedürfnisse zu finden.
          </p>
          <Link href="/contact">
            <p className="btn btn-primary btn-lg">Jetzt Kontakt aufnehmen</p>
          </Link>
        </div>
      {/* Services End */}
      {/* Services End */}




  {/* Service End */}
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
  
 <Footer />
  {/* Footer End */}


      </>
      
    );
  }
  