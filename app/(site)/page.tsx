import Link from "next/link";
import Image from "next/image";
import { getServices } from "@/lib/actions/services";
import { getStatsByGroup } from "@/lib/actions/stats";
import StickyCta from "@/components/StickyCta";

export const revalidate = 60;

export default async function HomePage() {
  const [services, stats] = await Promise.all([getServices(), getStatsByGroup("home")]);

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                L&apos;excellence technique
                <br />
                pour votre performance industrielle
              </h1>
              <p className="hero-subtitle">
                Solutions complètes en génie climatique, air comprimé, piscines et sécurité
                incendie. Expertise technique certifiée pour optimiser vos installations.
              </p>
              <div className="hero-tags">
                <span className="tag">Maîtrise</span>
                <span className="tag">Précision</span>
                <span className="tag">Sécurité</span>
                <span className="tag">Performance</span>
                <span className="tag">Durabilité</span>
              </div>
              <div className="hero-cta">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Demander une étude
                </Link>
                <Link href="/services" className="btn btn-secondary btn-large">
                  Découvrir nos services
                </Link>
              </div>
            </div>
            <div className="hero-media" aria-hidden="true">
              <Image src="/assets/hero-photo.svg" alt="" width={600} height={500} priority />
            </div>
          </div>
        </div>
      </section>

      {stats.length > 0 && (
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat._id}>
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos Expertises</h2>
            <p className="section-subtitle">
              Des solutions techniques sur-mesure pour répondre à tous vos besoins industriels
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service._id}>
                <h3>{service.title}</h3>
                <p>{service.solutionIntro}</p>
                <ul className="service-list">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link href={`/services#${service.slug}`} className="btn btn-outline">
                  En savoir plus
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pourquoi Aeroclim</h2>
            <p className="section-subtitle">
              Une expertise technique reconnue au service de votre performance
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3>Approche ingénierie complète</h3>
              <p>De l&apos;audit à la maintenance, une solution globale pour chaque projet.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3>Solutions sur-mesure</h3>
              <p>Chaque installation est conçue spécifiquement pour votre environnement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3>Équipes certifiées</h3>
              <p>Techniciens qualifiés et en formation continue pour garantir l&apos;excellence.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">04</div>
              <h3>Maintenance & suivi long terme</h3>
              <p>Accompagnement continu pour optimiser la performance de vos installations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à optimiser votre environnement industriel ?</h2>
            <p className="cta-subtitle">Planning limité. Réservez votre audit dès maintenant.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-large">
                Demander une étude gratuite
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StickyCta href="/contact" label="Demander une étude" />
    </>
  );
}
