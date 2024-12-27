"use client";

import { useState } from "react";
import Headers from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import Form from "../../components/form"

export default function quote() {
 
  return (
    <>
      <title>Kostenloses Angebot | PVNRW</title>
      <meta
    name="description"
    content="Fordern Sie ein individuelles Angebot für Ihr Solarsystem von PV NRW an. Schnell, einfach und auf Ihre Bedürfnisse zugeschnitten."
  />
  <meta
    name="keywords"
    content="Solarenergie-Angebot, individuelles Photovoltaik-Angebot, PV NRW Angebot anfordern"
  />
      <Headers />
      <div className="container-fluid page-header pt-5 mb-1">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Kostenloses Angebot
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="text-white" href="/">
                  Startseite
                </Link>
              </li>
             
              <li className="breadcrumb-item text-white active" aria-current="page">
                Kostenloses Angebot
              </li>
            </ol>
          </nav>
        </div>
      </div>
    <Form />
      <Footer />
    </>
  );
}
