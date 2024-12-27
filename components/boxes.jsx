"use client";

import React from "react";
import Link from "next/link";

export default function ThreeBoxes() {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Investment Section */}
        <div className="col-md-4">
          <div className="card h-100 border-0 bg-light">
            <div className="card-body p-4">
              <div className="icon mb-4 text-primary">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#13487f"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3 className="h4 mb-3" style={{ color: "#13487f" }}>
                Ihre Investition in Nachhaltigkeit
              </h3>
              <p className="mb-4">
                Investieren Sie in eine zukunftssichere und umweltfreundliche
                Lösung: Mit einer <strong>Solaranlage inkl. Speicher</strong> 
                starten Sie bereits ab <strong>6000 €</strong>. Wir bieten
                Ihnen eine maßgeschneiderte Lösung, die perfekt zu Ihrem
                Energiebedarf passt.
              </p>
            </div>
          </div>
        </div>

        {/* Independence Section */}
        <div className="col-md-4">
          <div className="card h-100 border-0 bg-light">
            <div className="card-body p-4">
              <div className="icon mb-4 text-primary">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#13487f"
                  strokeWidth="2"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <h3 className="h4 mb-3" style={{ color: "#13487f" }}>
                Maximale Unabhängigkeit mit Solarenergie
              </h3>
              <p className="mb-4">
                Mit einer Solaranlage inkl. Speicher können Sie bis zu{" "}
                <strong>85 % Ihres Strombedarfs selbst decken</strong>. Werden
                Sie unabhängig von Stromversorgern und schützen Sie gleichzeitig
                die Umwelt – der einfache Weg zu mehr Freiheit.
              </p>
            </div>
          </div>
        </div>

        {/* Savings Section */}
        <div className="col-md-4">
          <div className="card h-100 border-0 bg-light">
            <div className="card-body p-4">
              <div className="icon mb-4 text-primary">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#13487f"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="h4 mb-3" style={{ color: "#13487f" }}>
                Ihre Ersparnisse durch Solarstrom
              </h3>
              <p className="mb-4">
                Mit Ihrer eigenen Solaranlage sparen Sie nicht nur Energie, sondern
                auch Geld. Profitieren Sie von einer jährlichen Ersparnis und produzieren Sie umweltfreundlichen
                Solarstrom ohne Zusatzkosten.
              </p>
              <Link href="/quote">
              <button className="btn btn-primary w-100">
                Jetzt Ihr individuelles Angebot anfordern
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
