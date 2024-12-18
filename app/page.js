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

<Headers />
  

    <div>
      <NoSSR />
    </div>

   <Footer />
   
    </>
  ): null;
}
