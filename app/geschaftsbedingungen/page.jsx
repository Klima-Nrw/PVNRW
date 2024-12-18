import Headers from "../../components/header"
import Footer from "../../components/footer"
import Link from "next/link"

export default function About() {
  return (
    <>
      <title>geschaftsbedingungen | PVNRW</title>
      <meta
    name="description"
    content="Sehen Sie sich die Geschäftsbedingungen von PV NRW für Solarenergie-Dienstleistungen in Nordrhein-Westfalen an. Klare und transparente Richtlinien für Ihr Vertrauen."
  />
  <meta
    name="keywords"
    content="PV NRW Geschäftsbedingungen, Richtlinien für Solardienstleistungen, Photovoltaik-Bedingungen NRW"
  />
      <Headers />
      <div className="container mx-auto mt-3 py-3 bg-white text-start" style={{ minHeight: '1vh' }}>
  <h2 className="display-4 fw-bold mb-4">Allgemeine Geschäftsbedingungen (AGB)</h2>
  <p className="mb-4">
    Willkommen auf <a href="https://www.pvnrw.de" className="text-primary">pvnrw.de</a>. Durch den Zugriff auf unsere Website oder deren Nutzung erklären Sie sich mit den folgenden allgemeinen Geschäftsbedingungen einverstanden. Bitte lesen Sie diese Bedingungen sorgfältig durch. Sollten Sie mit einem Teil dieser Bedingungen nicht einverstanden sein, dürfen Sie unsere Website nicht nutzen.
  </p>

  {/* Nutzung der Website */}
  <h3 className="h5 fw-semibold mb-2">1. Nutzung der Website</h3>
  <p className="mb-4">
    Die Inhalte auf dieser Website dienen ausschließlich Informationszwecken. Sie erklären sich damit einverstanden, die Website nur für rechtmäßige Zwecke zu nutzen und keine Rechte anderer zu verletzen oder deren Nutzung der Website zu behindern.
  </p>


  {/* Links zu Drittanbietern */}
  <h3 className="h5 fw-semibold mb-2">2. Links zu Drittanbietern</h3>
  <p className="mb-4">
    Diese Website kann Links zu Websites Dritter enthalten. Diese Links werden als Service bereitgestellt und bedeuten keine Billigung der verlinkten Websites. Wir haben keine Kontrolle über den Inhalt dieser Drittanbieter-Websites und übernehmen keine Verantwortung für deren Inhalte oder Praktiken.
  </p>

  {/* Haftungsausschluss */}
  <h3 className="h5 fw-semibold mb-2">3. Haftungsausschluss</h3>
  <p className="mb-4">
    Die Informationen auf dieser Website werden "wie besehen" ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt. Wir übernehmen keine Garantie für die Genauigkeit, Zuverlässigkeit oder Vollständigkeit der bereitgestellten Informationen. Die Nutzung der Website erfolgt auf eigene Gefahr.
  </p>

  {/* Haftungsbeschränkung */}
  <h3 className="h5 fw-semibold mb-2">4. Haftungsbeschränkung</h3>
  <p className="mb-4">
    Die Klimanrw GmbH haftet nicht für direkte, indirekte, zufällige oder Folgeschäden, die sich aus der Nutzung dieser Website oder aus dem Vertrauen auf deren Inhalte ergeben.
  </p>

  {/* Änderungen der Bedingungen */}
  <h3 className="h5 fw-semibold mb-2">5. Änderungen der Bedingungen</h3>
  <p className="mb-4">
    Wir behalten uns das Recht vor, diese allgemeinen Geschäftsbedingungen jederzeit ohne vorherige Ankündigung zu ändern. Die fortgesetzte Nutzung der Website nach Änderungen bedeutet Ihre Zustimmung zu den neuen Bedingungen.
  </p>

  {/* Kontaktinformationen */}
  <h3 className="h5 fw-semibold mb-2">6. Kontaktinformationen</h3>
  <p>
    Wenn Sie Fragen zu diesen allgemeinen Geschäftsbedingungen haben, kontaktieren Sie uns bitte unter:
  </p>
  <p>
    <strong>E-Mail:</strong> <a href="mailto:info@pvnrw.de" className="text-primary">info@pvnrw.de</a>
  </p>
  <p>
    <strong>Telefon:</strong> <a href="tel:+4915901488768" className="text-primary">+4915901488768</a>
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
