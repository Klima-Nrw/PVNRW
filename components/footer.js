"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-body footer  pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-4">Adresse</h5>
              <p className="mb-2">
  <i className="fa fa-map-marker-alt me-3" />
  Wischenstück 30, 46286 Dorsten, Germany
</p>
<p className="mb-2">
  <i className="fa fa-phone-alt me-3" />
  +4915901488768
</p>
<p className="mb-2">
  <i className="fa fa-envelope me-3" />
  info@pvnrw.de
</p>

             {/* <div className="d-flex pt-2">
                
                <Link href="#" className="btn btn-square btn-outline-light btn-social">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link href="#" className="btn btn-square btn-outline-light btn-social">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="#" className="btn btn-square btn-outline-light btn-social">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>*/}
            </div>
            <div className="col-lg-4 col-md-6">
  <h5 className="text-white mb-4">Schnellzugriffe</h5>
  <Link href="/about" className="btn btn-link">
    Über uns
  </Link>
  <Link href="/contact" className="btn btn-link">
    Kontakt
  </Link>
  <Link href="/service" className="btn btn-link">
    Unsere Services
  </Link>
  <Link href="/project" className="btn btn-link">
    Projekts
  </Link>

  <Link href="/" className="btn btn-link">
    Startseite
  </Link>
 
</div>

            <div className="col-12 d-md-none d-md-inline text-center text-md-end ">
              <Link href="/impressum" className="btn btn-link">
                Impressum
              </Link>
              <Link href="/geschaftsbedingungen" className="btn btn-link">
                Geschäftsbedingungen
              </Link>
              <Link href="/Datenschutzerklarung" className="btn btn-link">
                Datenschutzerklärung
              </Link>
            </div>

            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-4">Projekt Galerie</h5>
              <div className="row g-2">
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="/img/recentwork-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="/img/recentwork-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="/img/recentwork-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="/img/recentwork-4.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="/img/recentwork-9.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded"
                    src="/img/recentwork-5.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                © <Link href="/">PVNRW</Link>, Alle Rechte vorbehalten.
              </div>

              
              <div className="col-md-8 d-none d-md-inline text-center text-md-end ">
              <Link href="/impressum" className="text-decoration-none me-3">
                Impressum
              </Link>
              <Link href="/geschaftsbedingungen" className="text-decoration-none me-3">
                Geschäftsbedingungen
              </Link>
              <Link href="/Datenschutzerklarung" className="text-decoration-none me-3">
                Datenschutzerklärung
              </Link>
            </div>

            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}
