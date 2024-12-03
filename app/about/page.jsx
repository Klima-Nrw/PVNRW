import Headers from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"

export default function About() {
  return (
    <>
      <title>Über uns | PVNRW</title>
      <Headers />
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Über uns
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white">
                  Startseite
                </Link>
              </li>             
              <li className="breadcrumb-item text-white active" aria-current="page">
                Über uns
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Feature Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-4">
                <div className="btn-lg-square bg-primary rounded-circle me-3">
                  <i className="fa fa-users text-white" />
                </div>
                <h1 className="mb-0" data-toggle="counter-up">
                  3453
                </h1>
              </div>
              <h5 className="mb-3">Zufriedene Kunden</h5>
              <span>
                Wir haben Tausenden von Kunden geholfen, ihre Energieziele zu erreichen und ihre Energiekosten zu senken.
              </span>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex align-items-center mb-4">
                <div className="btn-lg-square bg-primary rounded-circle me-3">
                  <i className="fa fa-check text-white" />
                </div>
                <h1 className="mb-0" data-toggle="counter-up">
                  4234
                </h1>
              </div>
              <h5 className="mb-3">Abgeschlossene Projekte</h5>
              <span>
                Unsere Erfahrung zeigt sich in der erfolgreichen Umsetzung von mehr als 4.000 Projekten im Bereich Solar- und erneuerbare Energien.
              </span>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex align-items-center mb-4">
                <div className="btn-lg-square bg-primary rounded-circle me-3">
                  <i className="fa fa-award text-white" />
                </div>
                <h1 className="mb-0" data-toggle="counter-up">
                  3123
                </h1>
              </div>
              <h5 className="mb-3">Gewonnene Auszeichnungen</h5>
              <span>
                Wir haben mehrere nationale und internationale Auszeichnungen für unsere herausragende Arbeit im Bereich erneuerbare Energien erhalten.
              </span>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="d-flex align-items-center mb-4">
                <div className="btn-lg-square bg-primary rounded-circle me-3">
                  <i className="fa fa-users-cog text-white" />
                </div>
                <h1 className="mb-0" data-toggle="counter-up">
                  1831
                </h1>
              </div>
              <h5 className="mb-3">Fachkundige Mitarbeiter</h5>
              <span>
                Unser Team besteht aus über 1.800 hochqualifizierten Experten, die stets an der Spitze der Branche stehen.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
      {/* About Start */}
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
                  className="position-absolute img-fluid w-100 h-100"
                  src="img/about.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Über uns Bild"
                />
              </div>
            </div>
            <div
              className="col-lg-6 about-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">Über uns</h6>
                <h1 className="mb-4">
                  Über 25 Jahre Erfahrung in der Solar- und erneuerbaren Energiewirtschaft
                </h1>
                <p>
                  Seit mehr als zwei Jahrzehnten setzen wir uns dafür ein, die Welt mit erneuerbaren Energien zu versorgen. Wir bieten innovative Lösungen, um Energieeffizienz zu steigern, die Umwelt zu schützen und den Energiebedarf unserer Kunden auf nachhaltige Weise zu decken.
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3" />
                  Langjährige Erfahrung in der Branche
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3" />
                  Innovative Lösungen für nachhaltige Energie
                </p>
                <p>
                  <i className="fa fa-check-circle text-primary me-3" />
                  Kundenorientierter Service und höchste Qualitätsstandards
                </p>
                <Link href="/contact" className="btn btn-primary rounded-pill py-3 px-5 mt-3">
                  Kontaktieren Sie uns
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      <Footer />
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </a>
    </>
  );
}
