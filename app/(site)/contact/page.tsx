import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import OpenChatbotButton from "@/components/OpenChatbotButton";
import StickyCta from "@/components/StickyCta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Aeroclim pour votre projet. Formulaire intelligent, WhatsApp, téléphone. Zones d'intervention France entière.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Contactez-nous</h1>
          <p className="page-hero-subtitle">Un expert vous répond sous 24h. Planning limité.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form-wrapper">
              <h2 className="section-title">Demander une étude</h2>
              <p className="contact-intro">
                Décrivez votre projet et nos experts vous proposeront la solution optimale.
              </p>
              <ContactForm />
            </div>

            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h3>Contact direct</h3>
                <div className="contact-methods">
                  <a href="tel:+33123456789" className="contact-method">
                    <div className="contact-icon">📞</div>
                    <div className="contact-details">
                      <strong>Téléphone</strong>
                      <span>+33 1 23 45 67 89</span>
                    </div>
                  </a>
                  <a href="mailto:contact@aeroclim.fr" className="contact-method">
                    <div className="contact-icon">✉️</div>
                    <div className="contact-details">
                      <strong>Email</strong>
                      <span>contact@aeroclim.fr</span>
                    </div>
                  </a>
                  <a href="https://wa.me/33123456789" target="_blank" className="contact-method" rel="noreferrer">
                    <div className="contact-icon">💬</div>
                    <div className="contact-details">
                      <strong>WhatsApp</strong>
                      <span>Chat instantané</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Horaires</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Lundi - Vendredi</span>
                    <span>8h00 - 18h00</span>
                  </div>
                  <div className="hours-item">
                    <span>Urgences</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Zones d&apos;intervention</h3>
                <p className="zones-text">
                  France entière. Interventions prioritaires : Île-de-France, Rhône-Alpes, PACA,
                  Occitanie, Nouvelle-Aquitaine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-content">
            <h3>Nous intervenons partout en France</h3>
            <p>Zones d&apos;intervention couvrant tout le territoire</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Besoin d&apos;une réponse immédiate ?</h2>
            <p className="cta-subtitle">Appelez-nous ou utilisez le chatbot pour un pré-diagnostic.</p>
            <div className="cta-buttons">
              <a href="tel:+33123456789" className="btn btn-large">
                Appeler maintenant
              </a>
              <OpenChatbotButton className="btn btn-large">Ouvrir le chatbot</OpenChatbotButton>
            </div>
          </div>
        </div>
      </section>

      <StickyCta href="tel:+33123456789" label="Appeler" />
    </>
  );
}
