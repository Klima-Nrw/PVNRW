"use client";
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import Link from 'next/link';

import Headers from "../components/header"
import Footer from "../components/footer"

const NoSSR = dynamic(() => import('./mainpage'), { ssr: true })

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return isClient ? (

    <>

    <script
             type="application/ld+json"
             dangerouslySetInnerHTML={{
               __html: JSON.stringify({
                 "@context": "https://schema.org/",
                 "@type": "Product",
                 "name": "Photovoltaik Montage Dorsten",
                 "image": "https://www.pvnrw.de/img/about.png",
                 "description": "Professionelle Montage von Photovoltaik-Anlagen für private und gewerbliche Kunden. Nachhaltige und effiziente Installation für maximale Energieerträge.",
                 "sku": "PV-MONTAGE-001",
                 "brand": {
                   "@type": "Brand",
                   "name": "PVNRW"
                 },
                 "aggregateRating": {
                   "@type": "AggregateRating",
                   "ratingValue": "4.8",
                   "reviewCount": "227"
                 }
               })
             }}
           />

             <head>
             <title>PVNrw | Wir installieren Solaranlagen</title>
<meta
    name="description"
    content="PV NRW – Ihr Experte für Photovoltaik-Lösungen in Nordrhein-Westfalen. Wir bieten maßgeschneiderte Solaranlagen für Privat- und Gewerbekunden, um eine nachhaltige Energiezukunft zu schaffen."
  />
  <meta
    name="keywords"
    content="Photovoltaik, Solaranlagen, erneuerbare Energien, Solarstrom, Nordrhein-Westfalen, PV NRW"
  />
  <meta name="author" content="PV NRW" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
  <meta name="language" content="de" />

<meta property="og:title" content="PVNrw | Wir installieren Solaranlagen" />
        <meta
          property="og:description"
          content="PV NRW – Ihr Experte für Photovoltaik-Lösungen in Nordrhein-Westfalen. Wir bieten maßgeschneiderte Solaranlagen für Privat- und Gewerbekunden, um eine nachhaltige Energiezukunft zu schaffen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pvnrw.de" />
            <meta property="og:image" content="https://www.pvnrw.de/img/logo.png" />
      </head>
<Headers />


    <div>
      <NoSSR />
    </div>

   <Footer />

    </>
  ): null;
}
