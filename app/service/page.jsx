
import Footer from "@/components/footer";
import Headers from "../../components/header"
import Link from "next/link";


  export default function About() {
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
          <li className="breadcrumb-item text-white active" aria-current="page">
          Dienstleistungen
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
  <div className="container">
    <div
      className="text-center mx-auto mb-5 wow"
      data-wow-delay="0.1s"
      style={{ maxWidth: 600 }}
    >
      <h6 className="text-primary">Unsere Dienstleistungen</h6>
      <h1 className="mb-4">
        Umfassende Lösungen für nachhaltige Energie
      </h1>
    </div>
    <div className="container-fluid">
  <div className="row">
    <div className="col-12 mb-4">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2 mb-3 mb-md-0">
          <img
            className="img-fluid"
            src="img/roof-installation.jpg"
            alt="Dach-Solarmodule"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <div className="p-4">
            <h4 className="mb-3">Dach-Solarmodule</h4>
            <p>
              Wir bieten hochwertige Dach-Solarmodule, die eine maximale
              Energieeffizienz gewährleisten. Diese Module werden auf dem Dach
              Ihres Gebäudes installiert und nutzen die Kraft der Sonne, um
              saubere und nachhaltige Elektrizität zu erzeugen. Durch unsere
              fachgerechte Installation stellen wir sicher, dass die Module eine
              optimale Leistung erbringen und eine lange Lebensdauer haben. Dies
              hilft Ihnen, Energiekosten zu sparen und gleichzeitig Ihren
              CO2-Fußabdruck zu reduzieren. Unsere Solarmodule sind nicht nur
              umweltfreundlich, sondern auch eine wertvolle Investition in die
              Zukunft.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 mb-4">
      <div className="row align-items-center">
        <div className="col-md-6 mb-3 mb-md-0">
          <img
            className="img-fluid"
            src="img/surface-installation.jpg"
            alt="Flache Solarmodule"
          />
        </div>
        <div className="col-md-6">
          <div className="p-4">
            <h4 className="mb-3">Flache Solarmodule</h4>
            <p>
              Unsere flachen Solarmodule sind ideal für Gebäude, bei denen der
              Dachraum begrenzt ist oder ästhetische Überlegungen eine Rolle
              spielen. Wir bieten moderne und elegante Designs, die sich nahtlos
              in die Architektur Ihres Gebäudes integrieren. Diese Solarmodule
              sind äußerst effizient und bieten eine zuverlässige, saubere
              Energiequelle mit minimalem Wartungsaufwand. Dank ihrer flachen
              Bauweise passen sie sich perfekt verschiedenen architektonischen
              Stilen an, ohne die Optik Ihres Gebäudes zu beeinträchtigen.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2 mb-3 mb-md-0">
          <img
            className="img-fluid"
            src="img/mantainance.jpg"
            alt="Wartungsservice für Solarmodule"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <div className="p-4">
            <h4 className="mb-3">Wartungsservice für Solarmodule</h4>
            <p>
              Wir bieten umfassende Wartungsdienstleistungen für alle Arten von
              Solarmodulen an. Regelmäßige Wartung ist entscheidend, um
              sicherzustellen, dass Ihre Solarmodule weiterhin optimal
              funktionieren und maximale Energie produzieren. Unsere erfahrenen
              Techniker bieten Reinigungs-, Inspektions- und Reparaturdienste
              an, um die Lebensdauer und Effizienz Ihres Solarsystems zu
              verlängern. Mit unserer Wartung können Sie sicherstellen, dass
              Ihre Solarmodule jederzeit die beste Leistung erbringen, um Ihnen
              langfristig zu helfen, Ihre Energiekosten zu senken.
            </p>
          </div>
        </div>
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
  
 <Footer />
  {/* Footer End */}


      </>
      
    );
  }
  