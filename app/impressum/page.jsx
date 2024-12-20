import Headers from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"

export default function About() {
  return (
    <>
      <title>Impressum | PVNRW</title>
      <meta
    name="description"
    content="Rechtliche Informationen zu PV NRW, Ihrem Partner für Solarenergie-Lösungen in Nordrhein-Westfalen. Sehen Sie unsere Firmendetails und Kontaktdaten."
  />
  <meta
    name="keywords"
    content="PV NRW rechtliche Informationen, Impressum, Firmendetails, Photovoltaik NRW"
  />
      <Headers />
      <div className="container mx-auto mt-3 py-3 bg-white text-start" style={{ minHeight: '1vh' }}>
  <h2 className="display-4 fw-bold mb-4">Impressum</h2>
  <br />

  {/* Filiale Dorsten */}
  <h3 className="h5 fw-semibold mb-2">Filiale Dorsten</h3>
  <address className="fst-normal mb-4">
    <p>Pvnrw</p>
    <p>By photovoltaik Zittel</p>
  </address>

  {/* Kontakt */}
  <h3 className="h5 fw-semibold mb-2">Kontakt</h3>
  <p>
    Telefon:{' '}
    <a href="tel:+4915901488768" className="text-primary">
      +4915901488768
    </a>
  </p>
  <p>
    E-Mail:{' '}
    <a href="mailto:info@pvnrw.de" className="text-primary">
      info@pvnrw.de
    </a>
  </p>
  <p>
    Web:{' '}
    <a
      href="https://www.pvnrw.de"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary"
    >
      www.pvnrw.de
    </a>
  </p>

  {/* USt.-IdNr. */}
  <h3 className="h5 fw-semibold mb-2 mt-4">USt.-IdNr.</h3>
  <p className="mb-4">Folgt</p>

  {/* Steuernummer */}
  <h3 className="h5 fw-semibold mb-2">Steuernummer</h3>
  <p className="mb-4">359/2734/1212</p>

  {/* Registereintrag */}
  <h3 className="h5 fw-semibold mb-2">Registereintrag</h3>
  <p className="mb-4">Amtsgericht Gelsenkirchen Registrierung im Handelsregister in Bearbeitung</p>

  {/* Zuständige Kammer */}
  <h3 className="h5 fw-semibold mb-2 mt-4">Zuständige Kammer</h3>
  <p className="mb-4">Handwerkskammer Münster</p>
  <p className="mb-4">Bismarckallee 1, 48151 Münster</p>
  <p className="mb-4">Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Alexander  Zittel ( wie oben )</p>


  {/* Alternative Streitbeilegung */}
  <h3 className="h5 fw-semibold mb-2">Alternative Streitbeilegung</h3>
  <p>
    Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung
    (OS-Plattform) bereit, aufrufbar unter{' '}
    <a
      href="https://ec.europa.eu/odr"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary"
    >
      https://ec.europa.eu/odr
    </a>.
  </p>
  <br />

  {/* Haftungshinweis */}
  <h3 className="h5 fw-semibold mb-2">Haftungshinweis</h3>
  <p>
    Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
    Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
  </p>
</div>

      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </a>

      <Footer />
    </>
  );
}
