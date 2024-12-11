"use client";

import { useState } from "react";
import Headers from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    note: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Set loading state to true
    setSuccessMessage("");  // Clear previous success message

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Anfrage erfolgreich gesendet!"); // Set success message
        setFormData({ name: "", email: "", phone: "", service: "", note: "" });
      } else {
        alert("Fehler beim Senden der Anfrage.");
      }
    } catch (error) {
      console.error(error);
      alert("Ein Fehler ist aufgetreten.");
    } finally {
      setIsLoading(false); // Set loading state to false after request completes
    }
  };

  return (
    <>
      <title>Kostenloses Angebot | Solarsysteme</title>
      <Headers />
      <div className="container-fluid page-header py-5 mb-5">
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
      <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: "6rem 0" }}>
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src="img/quote.jpg" style={{ objectFit: "cover" }} alt="" />
              </div>
            </div>
            <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">Kostenloses Angebot</h6>
                <h1 className="mb-4">Erhalten Sie ein kostenloses Angebot</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control border-0"
                        placeholder="Ihr Name"
                        style={{ height: 55 }}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control border-0"
                        placeholder="Ihre E-Mail"
                        style={{ height: 55 }}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        name="phone"
                        className="form-control border-0"
                        placeholder="Ihr Mobiltelefon"
                        style={{ height: 55 }}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        name="service"
                        className="form-select border-0"
                        style={{ height: 55 }}
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Wählen Sie einen Service
                        </option>
                        <option value="roof-installation">Dachinstallation</option>
                        <option value="flat-surface-installation">Flachflächeninstallation</option>
                        <option value="maintenance">Wartung</option>
                        <option value="other">Sonstiges</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        name="note"
                        className="form-control border-0"
                        placeholder="Besondere Anmerkung"
                        value={formData.note}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary rounded-pill py-3 px-5" type="submit" disabled={isLoading}>
                        {isLoading ? "Wird gesendet..." : "Absenden"}
                      </button>
                    </div>
                  </div>
                </form>
                {successMessage && (
                  <div className="alert alert-success mt-3">
                    {successMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
