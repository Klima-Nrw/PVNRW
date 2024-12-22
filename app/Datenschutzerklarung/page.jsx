import Headers from "../../components/header";
import Footer from "../../components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <title>Datenschutzerklärung | PVNRW</title>
      <meta
        name="description"
        content="Erfahren Sie mehr über den Schutz Ihrer persönlichen Daten bei PV NRW. Unsere Datenschutzerklärung informiert Sie umfassend über Ihre Rechte und unsere Verpflichtungen."
      />
      <meta
        name="keywords"
        content="PV NRW Datenschutzerklärung, Datenschutz, persönliche Daten Schutz"
      />
      <Headers />
      <div className="container mx-auto mt-3 py-3 bg-white text-start" style={{ minHeight: '1vh' }}>
        <h2 className="display-4 fw-bold mb-4">Datenschutzerklärung</h2>
        
        <h3 className="h5 fw-semibold mb-2">Verantwortliche Stelle</h3>
        <p>
          <strong>PV NRW</strong>
          <br />
          Webseite: <a href="https://www.pvnrw.de" className="text-primary">www.pvnrw.de</a>
          <br />
          Kontakt: <a href="/contact" className="text-primary">Kontaktformular</a>
        </p>

        <h3 className="h5 fw-semibold mb-2">1. Allgemeines</h3>
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns strikt an die Regeln der Datenschutzgesetze. Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend „Daten“) innerhalb unseres Online-Angebots und der mit ihm verbundenen Webseiten, Funktionen und Inhalte auf.
        </p>

        <h3 className="h5 fw-semibold mb-2">2. Erhobene Daten</h3>
        <ul>
          <li><strong>Persönliche Daten:</strong> Name, E-Mail-Adresse, Telefonnummer (falls übermittelt).</li>
          <li><strong>Technische Daten:</strong> IP-Adresse, Browsertyp, Betriebssystem, Zugriffszeit.</li>
          <li><strong>Cookies:</strong> Informationen zur Nutzung unserer Webseite (siehe Abschnitt 5).</li>
        </ul>

        <h3 className="h5 fw-semibold mb-2">3. Zweck der Datenverarbeitung</h3>
        <ul>
          <li><strong>Vertragserfüllung:</strong> Zur Bearbeitung von Anfragen und Durchführung von Dienstleistungen.</li>
          <li><strong>Website-Analyse:</strong> Zur Verbesserung unserer Website und Dienstleistungen.</li>
          <li><strong>Werbliche Zwecke:</strong> Nur nach vorheriger Einwilligung.</li>
        </ul>

        <h3 className="h5 fw-semibold mb-2">4. Weitergabe der Daten</h3>
        <p>
          Ihre Daten werden nur an Dritte weitergegeben, wenn dies zur Vertragserfüllung erforderlich ist (z. B. Zahlungsdienstleister) oder wir gesetzlich dazu verpflichtet sind.
        </p>

        <h3 className="h5 fw-semibold mb-2">5. Cookies und Tracking</h3>
        <p>
          Unsere Website verwendet Cookies, um die Benutzererfahrung zu verbessern. Sie können Cookies in Ihrem Browser deaktivieren. Wir nutzen außerdem Tracking-Tools wie Google Analytics, um die Nutzung unserer Website zu analysieren.
        </p>
        <p>
          <em>Hinweis:</em> Sie können der Verarbeitung Ihrer Daten durch Google Analytics jederzeit widersprechen, z. B. durch die Installation eines Browser-Add-ons: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary">Browser-Add-on zur Deaktivierung von Google Analytics</a>.
        </p>

        <h3 className="h5 fw-semibold mb-2">6. Rechte der Nutzer</h3>
        <p>
          Sie haben das Recht auf:
        </p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
        </ul>
        <p>
          Bitte kontaktieren Sie uns unter <a href="mailto:kontakt@pvnrw.de" className="text-primary">kontakt@pvnrw.de</a>, um Ihre Rechte auszuübung.
        </p>

        <h3 className="h5 fw-semibold mb-2">7. Änderungen der Datenschutzerklärung</h3>
        <p>
          Wir behalten uns das Recht vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes oder der Datenverarbeitung anzupassen.
        </p>

        <h3 className="h5 fw-semibold mb-2">8. Kontakt</h3>
        <p>
          Bei Fragen oder Anliegen zum Datenschutz können Sie uns unter folgender Adresse kontaktieren:
        </p>
        <p>
          <strong>PV NRW</strong>
          <br />
          E-Mail: <a href="mailto:info@pvnrw.de" className="text-primary">info@pvnrw.de</a>
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
