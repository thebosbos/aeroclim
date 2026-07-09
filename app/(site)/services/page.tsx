import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/actions/services";
import StickyCta from "@/components/StickyCta";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services Aeroclim : Génie Climatique, Air Comprimé, Piscines et Sécurité Incendie. Solutions sur-mesure pour l'industrie.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Nos Services</h1>
          <p className="page-hero-subtitle">Solutions techniques d&apos;excellence pour l&apos;industrie</p>
        </div>
      </section>

      {services.map((service) => (
        <section className="service-page-section" id={service.slug} key={service._id}>
          <div className="container">
            <div className="service-page-content">
              <div className="service-page-text">
                <span className="service-badge">{service.badge}</span>
                <h2 className="service-page-title">{service.title}</h2>
                <div className="service-problem">
                  <h3>Votre problématique</h3>
                  <p>{service.problem}</p>
                </div>
                <div className="service-solution">
                  <h3>Notre solution technique</h3>
                  <p>{service.solutionIntro}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                {service.methodology.length > 0 && (
                  <div className="service-methodology">
                    <h3>Notre méthodologie</h3>
                    <div className="methodology-steps">
                      {service.methodology.map((step, i) => (
                        <div className="methodology-step" key={i}>
                          <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
                          <div className="step-content">
                            <h4>{step.title}</h4>
                            <p>{step.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {service.benefits.length > 0 && (
                  <div className="service-benefits">
                    <h3>Avantages mesurables</h3>
                    <div className="benefits-grid">
                      {service.benefits.map((benefit, i) => (
                        <div className="benefit-item" key={i}>
                          <strong>{benefit.highlight}</strong>
                          <span>{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <Link href="/contact" className="btn btn-primary btn-large">
                  {service.ctaText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Un projet spécifique ?</h2>
            <p className="cta-subtitle">
              Nos experts analysent votre besoin et vous proposent la solution optimale.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-large">
                Parler à un expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StickyCta href="/contact" label="Demander une étude" />
    </>
  );
}
