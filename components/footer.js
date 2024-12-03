"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Adresse</h5>
              <p className="mb-2">
  <i className="fa fa-map-marker-alt me-3" />
  Musterstraße 123, Berlin, Deutschland
</p>
<p className="mb-2">
  <i className="fa fa-phone-alt me-3" />
  +49 123 4567890
</p>
<p className="mb-2">
  <i className="fa fa-envelope me-3" />
  info@pvnrw.de
</p>

              <div className="d-flex pt-2">
                
                <Link href="#" className="btn btn-square btn-outline-light btn-social">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link href="#" className="btn btn-square btn-outline-light btn-social">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="#" className="btn btn-square btn-outline-light btn-social">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
  <h5 className="text-white mb-4">Schnellzugriffe</h5>
  <Link href="/about" className="btn btn-link">
    Über uns
  </Link>
  <Link href="/contact" className="btn btn-link">
    Kontakt
  </Link>
  <Link href="/services" className="btn btn-link">
    Unsere Services
  </Link>
  <Link href="/project" className="btn btn-link">
    AGB
  </Link>

  <Link href="/" className="btn btn-link">
    Startseite
  </Link>
 
</div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Projekt Galerie</h5>
              <div className="row g-2">
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="img/gallery-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="img/gallery-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="img/gallery-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="img/gallery-4.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="img/gallery-5.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="img/gallery-6.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Erhalten Sie Rabattangebote</h5>
              <p>Abonnieren Sie, um exklusive Rabatte und Angebote zu erhalten.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Ihre E-Mail"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Abonnieren
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a href="#">PVNRW</a>, Alle Rechte vorbehalten.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}
