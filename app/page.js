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
<Headers />


    <div>
      <NoSSR />
    </div>

   <Footer />

    </>
  ): null;
}
