
import Headers from "../../components/header"
import Footer from "../../components/footer"

  
  export default function About() {
    return (
        <>
          <title>Recent Work | Solar Systems</title>
      <Headers />
      
      
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        Projects
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Pages
            </a>
          </li>
          <li className="breadcrumb-item text-white active" aria-current="page">
            Projects
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
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
        <img className="img-fluid" src="img/img-600x400-1.jpg" alt="Solaranlage Installation auf Dach" />
        <div className="portfolio-btn">
          <a
            className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
            href="img/img-600x400-1.jpg"
            data-lightbox="portfolio"
          >
            <i className="fa fa-eye" />
          </a>
        </div>
      </div>
      <div className="pt-3">
        <p className="text-primary mb-0">Solaranlage auf Dach</p>
        <hr className="text-primary w-25 my-2" />
        <h5 className="lh-base">
          Erfolgreich installierte Solarmodule auf dem Dach von XYZ Corporation, Reduzierung der Energiekosten um 40%
        </h5>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 portfolio-item second">
      <div className="portfolio-img rounded overflow-hidden">
        <img className="img-fluid" src="img/img-600x400-2.jpg" alt="Solaranlage auf Flachdach" />
        <div className="portfolio-btn">
          <a
            className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
            href="img/img-600x400-2.jpg"
            data-lightbox="portfolio"
          >
            <i className="fa fa-eye" />
          </a>
        </div>
      </div>
      <div className="pt-3">
        <p className="text-primary mb-0">Solaranlage auf Flachdach</p>
        <hr className="text-primary w-25 my-2" />
        <h5 className="lh-base">
          Installierte Flachdach-Solarmodule für GreenTech Industries, Verbesserung der Energieeffizienz um 35%
        </h5>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 portfolio-item third">
      <div className="portfolio-img rounded overflow-hidden">
        <img className="img-fluid" src="img/img-600x400-3.jpg" alt="Solarwartung auf Dach" />
        <div className="portfolio-btn">
          <a
            className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
            href="img/img-600x400-3.jpg"
            data-lightbox="portfolio"
          >
            <i className="fa fa-eye" />
          </a>
        </div>
      </div>
      <div className="pt-3">
        <p className="text-primary mb-0">Solarwartung</p>
        <hr className="text-primary w-25 my-2" />
        <h5 className="lh-base">
          Durchführung einer umfassenden Wartung eines Solarsystems für ein Wohnprojekt, maximale Effizienz wiederhergestellt
        </h5>
      </div>
    </div>
  </div>

  <div
    className="row g-4 portfolio-container wow fadeInUp"
    data-wow-delay="0.5s"
  >
    <div className="col-lg-4 col-md-6 portfolio-item first">
      <div className="portfolio-img rounded overflow-hidden">
        <img className="img-fluid" src="img/img-600x400-1.jpg" alt="Solaranlage Installation auf Dach" />
        <div className="portfolio-btn">
          <a
            className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
            href="img/img-600x400-1.jpg"
            data-lightbox="portfolio"
          >
            <i className="fa fa-eye" />
          </a>
        </div>
      </div>
      <div className="pt-3">
        <p className="text-primary mb-0">Solaranlage auf Dach</p>
        <hr className="text-primary w-25 my-2" />
        <h5 className="lh-base">
          Erfolgreich installierte Solarmodule auf dem Dach von XYZ Corporation, Reduzierung der Energiekosten um 40%
        </h5>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 portfolio-item second">
      <div className="portfolio-img rounded overflow-hidden">
        <img className="img-fluid" src="img/img-600x400-2.jpg" alt="Solaranlage auf Flachdach" />
        <div className="portfolio-btn">
          <a
            className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
            href="img/img-600x400-2.jpg"
            data-lightbox="portfolio"
          >
            <i className="fa fa-eye" />
          </a>
        </div>
      </div>
      <div className="pt-3">
        <p className="text-primary mb-0">Solaranlage auf Flachdach</p>
        <hr className="text-primary w-25 my-2" />
        <h5 className="lh-base">
          Installierte Flachdach-Solarmodule für GreenTech Industries, Verbesserung der Energieeffizienz um 35%
        </h5>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 portfolio-item third">
      <div className="portfolio-img rounded overflow-hidden">
        <img className="img-fluid" src="img/img-600x400-3.jpg" alt="Solarwartung auf Dach" />
        <div className="portfolio-btn">
          <a
            className="btn btn-lg-square btn-outline-light rounded-circle mx-1"
            href="img/img-600x400-3.jpg"
            data-lightbox="portfolio"
          >
            <i className="fa fa-eye" />
          </a>
        </div>
      </div>
      <div className="pt-3">
        <p className="text-primary mb-0">Solarwartung</p>
        <hr className="text-primary w-25 my-2" />
        <h5 className="lh-base">
          Durchführung einer umfassenden Wartung eines Solarsystems für ein Wohnprojekt, maximale Effizienz wiederhergestellt
        </h5>
      </div>
    </div>
  </div>
</div>

</div>
  {/* Projects End */}
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
              src="img/quote.jpg"
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
            <h6 className="text-primary">Free Quote</h6>
            <h1 className="mb-4">Get A Free Quote</h1>
            <p className="mb-4 pb-2">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
            </p>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Mobile"
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
    Select A Service
  </option>
  <option value={1}>Service 1</option>
  <option value={2}>Service 2</option>
  <option value={3}>Service 3</option>
</select>

                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0"
                    placeholder="Special Note"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary rounded-pill py-3 px-5"
                    type="submit"
                  >
                    Submit
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
  
  
  <Footer />
  {/* Footer End */}
</>

      
    );
  }
  