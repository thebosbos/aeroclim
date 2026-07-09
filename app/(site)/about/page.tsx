import type { Metadata } from "next";
import Link from "next/link";
import { getStatsByGroup } from "@/lib/actions/stats";
import StickyCta from "@/components/StickyCta";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Aeroclim - L'excellence technique comme standard. Découvrez notre vision, nos valeurs et notre engagement pour la performance industrielle.",
};

export default async function AboutPage() {
  const teamStats = await getStatsByGroup("team");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">
            L&apos;excellence technique
            <br />
            comme standard.
          </h1>
          <p className="page-hero-subtitle">
            Maîtrise • Précision • Sécurité • Performance • Durabilité
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="section-header">
              <h2 className="section-title">Notre Vision</h2>
              <p className="section-subtitle">
                Aeroclim positionne l&apos;excellence technique au cœur de chaque projet. Nous ne
                vendons pas de services. Nous livrons des environnements contrôlés où la
                performance s&apos;épanouit.
              </p>
            </div>
            <div className="about-details">
              <div className="about-detail-item">
                <h3>Absolu contrôle</h3>
                <p>Maîtrise totale des systèmes climatiques et industriels pour une performance optimale.</p>
              </div>
              <div className="about-detail-item">
                <h3>Fiabilité totale</h3>
                <p>Zéro compromis sur la qualité et la disponibilité de vos installations critiques.</p>
              </div>
              <div className="about-detail-item">
                <h3>Zéro compromis</h3>
                <p>Standards d&apos;excellence dans chaque intervention, de la conception à la maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-subtitle">
              Les piliers fondamentaux qui guident chacune de nos actions
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">M</div>
              <h3>Maîtrise</h3>
              <p>Expertise approfondie dans chaque domaine technique pour une solution optimale.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">P</div>
              <h3>Précision</h3>
              <p>Rigueur dans l&apos;analyse, le dimensionnement et l&apos;exécution de chaque projet.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">S</div>
              <h3>Sécurité</h3>
              <p>Protection des personnes et des biens, conformité réglementaire absolue.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">P</div>
              <h3>Performance</h3>
              <p>Optimisation énergétique et opérationnelle pour maximiser votre productivité.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">D</div>
              <h3>Durabilité</h3>
              <p>Solutions durables et maintenables pour un retour sur investissement optimal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="section-header">
              <h2 className="section-title">Équipe & Expertise Terrain</h2>
              <p className="section-subtitle">
                Notre équipe rassemble des ingénieurs, techniciens et experts certifiés, animés
                par une passion commune pour l&apos;excellence technique. Chaque membre est formé
                en continu aux dernières normes et technologies.
              </p>
            </div>
            {teamStats.length > 0 && (
              <div className="team-stats">
                {teamStats.map((stat) => (
                  <div className="team-stat" key={stat._id}>
                    <div className="team-stat-number">{stat.value}</div>
                    <div className="team-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="about-section quality-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Engagement Qualité & Sécurité</h2>
            <p className="section-subtitle">
              Des certifications reconnues pour garantir l&apos;excellence de nos prestations
            </p>
          </div>
          <div className="quality-grid">
            <div className="quality-item">
              <h3>Certifications</h3>
              <ul className="quality-list">
                <li>ISO 9001 : Qualité</li>
                <li>ISO 14001 : Environnement</li>
                <li>Qualification Qualibat</li>
                <li>Certification APSAD</li>
              </ul>
            </div>
            <div className="quality-item">
              <h3>Normes & Réglementations</h3>
              <ul className="quality-list">
                <li>RT 2012 / RE 2020</li>
                <li>Normes CVC & SSI</li>
                <li>Réglementation ERP</li>
                <li>Directives européennes</li>
              </ul>
            </div>
            <div className="quality-item">
              <h3>Processus Qualité</h3>
              <ul className="quality-list">
                <li>Audit préalable systématique</li>
                <li>Contrôles qualité en continu</li>
                <li>Documentation complète</li>
                <li>Suivi post-installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Rejoignez nos clients satisfaits</h2>
            <p className="cta-subtitle">Découvrez comment Aeroclim peut transformer vos installations.</p>
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
