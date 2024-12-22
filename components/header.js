"use client";

import Link from "next/link";

export default function Headerspage() {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark p-0 sticky-top">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-map-marker-alt text-primary me-2" />
              <small>Wischenstück 30, 46286 Dorsten, Germany</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <small className="far fa-clock text-primary me-2" />
              <small>Mon - Fri: 9:00-17:00</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <span className="fa fa-phone-alt text-primary me-2" />
              <span>+4915901488768</span>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <span className="fa fa-envelope text-primary me-2" />
              <span>info@pvnrw.de</span>
            </div>
          </div>
        </div>
     
      {/* Topbar End */}
      
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
        >
          <img
            src="/img/logo.png"
            alt="PVNrw Logo"
            style={{ height: "60px", marginRight: "10px" }}
          />
          <h2 className="m-0 text-primary">PVNrw</h2>
        </Link>

        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link href="/" className="nav-item nav-link">
              Startseite
            </Link>
            <Link href="/about" className="nav-item nav-link">
              Über uns
            </Link>
            <Link href="/service" className="nav-item nav-link">
              Dienstleistungen
            </Link>
            <Link href="/project" className="nav-item nav-link">
              Projekte
            </Link>
            <Link href="/contact" className="nav-item nav-link">
              Kontakt
            </Link>
          </div>
          <Link
            href="/quote"
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Angebot anfordern
            <i className="fa fa-arrow-right ms-3" />
          </Link>
        </div>
      </nav>
      </div>
      {/* Navbar End */}
    </>
  );
}
