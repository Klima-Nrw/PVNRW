import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
<meta charSet="utf-8" />

  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap"
    rel="stylesheet"
  />
  {/* Icon Font Stylesheet */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  
  {/* Customized Bootstrap Stylesheet */}
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
</head>

      <body suppressHydrationWarning>
        {children}

        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <Link
  href="/quote"
  className="btn btn-primary rounded-circle d-md-none back-to-top"
  style={{
    
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  }}
>
  <span className="text-white text-center" style={{ fontSize: '10px' }}>
    Kostenloses Angebot einholen
  </span>
</Link>





      </body>
    </html>
  );
}
