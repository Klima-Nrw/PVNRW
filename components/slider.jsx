"use client";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacySlider = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);

  const handleAccept = () => {
    console.log("User accepted privacy terms");
    setShowConfirmation(false);
    localStorage.setItem("PVNRWNewUser", "false");
  };

  const handleDecline = () => {
    console.log("User declined privacy terms");
    setShowConfirmation(false);
  };

  useEffect(() => {
    const isNewUser = localStorage.getItem("PVNRWNewUser") !== "false";
    setShowConfirmation(isNewUser);
  }, []);

  return showConfirmation ? (
    <div
      className="privacy-slider position-fixed bottom-0 start-0 w-100 bg-white p-3 border-top shadow-lg"
      style={{ zIndex: 999999 }}
    >
      <div className="container text-center">
        <p className="mb-4">
          Diese Website nutzt Cookies und vergleichbare Funktionen zur
          Verarbeitung von Endgeräteinformationen und personenbezogenen Daten.
          Die Verarbeitung dient der Einbindung von Inhalten, externen
          Diensten und Elementen Dritter, der statistischen Analyse/Messung,
          der personalisierten Werbung sowie der Einbindung sozialer Medien. 
          Ihre Einwilligung ist stets freiwillig und kann jederzeit auf unserer Seite abgelehnt oder widerrufen werden.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <button className="btn btn-primary px-4" onClick={handleAccept}>
            Akzeptieren
          </button>
          <button className="btn btn-outline-danger px-4" onClick={handleDecline}>
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default PrivacySlider;
