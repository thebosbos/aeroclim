import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3 className="footer-title">Aeroclim</h3>
            <p className="footer-tagline">L&apos;excellence technique comme standard.</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link href="/services#cvc">Génie Climatique & CVC</Link></li>
              <li><Link href="/services#air">Air Comprimé</Link></li>
              <li><Link href="/services#piscine">Piscines & Traitement Eau</Link></li>
              <li><Link href="/services#ssi">Sécurité Incendie</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Entreprise</h4>
            <ul className="footer-links">
              <li><Link href="/about">À propos</Link></li>
              <li><Link href="/projets">Projets</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href="tel:+33123456789">+33 1 23 45 67 89</a></li>
              <li><a href="mailto:contact@aeroclim.fr">contact@aeroclim.fr</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aeroclim. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
