// One-time (safe to re-run) seed script.
// Usage: npm run seed   (reads .env.local via `node --env-file`)
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("Missing MONGODB_URI. Fill it in .env.local first.");
  process.exit(1);
}

const projects = [
  {
    title: "Centre de données - Paris",
    category: "Génie Climatique",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    description:
      "Installation complète de système VRV haute performance pour contrôle climatique optimal. Réduction énergétique de 35%.",
    results: [
      { value: "35%", label: "Économie énergétique" },
      { value: "99,8%", label: "Disponibilité" },
    ],
    order: 1,
  },
  {
    title: "Usine de production - Lyon",
    category: "Air Comprimé",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    description:
      "Remplacement complet de centrale d'air comprimé avec réseau inox. Optimisation de la consommation de 28%.",
    results: [
      { value: "28%", label: "Réduction consommation" },
      { value: "ISO 8573", label: "Qualité certifiée" },
    ],
    order: 2,
  },
  {
    title: "Complexe aquatique - Marseille",
    category: "Piscines",
    image:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&auto=format&fit=crop&q=80",
    description:
      "Installation complète : filtration, chauffage PAC, traitement automatique. Gestion optimisée pour 3 bassins.",
    results: [
      { value: "60%", label: "Économie énergie" },
      { value: "24/7", label: "Automatisation" },
    ],
    order: 3,
  },
  {
    title: "Hôpital régional - Lille",
    category: "Sécurité Incendie",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop&q=80",
    description:
      "Mise en conformité complète SSI : RIA, colonnes sèches, désenfumage. Conformité ERP totale.",
    results: [
      { value: "100%", label: "Conformité ERP" },
      { value: "APSAD", label: "Certification" },
    ],
    order: 4,
  },
  {
    title: "Centre commercial - Bordeaux",
    category: "Génie Climatique",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
    description:
      "Installation CVC avec groupes d'eau glacée et GTB centralisée. Contrôle optimal pour 15 000 m².",
    results: [
      { value: "40%", label: "Optimisation énergétique" },
      { value: "GTB", label: "Gestion centralisée" },
    ],
    order: 5,
  },
  {
    title: "Site industriel - Toulouse",
    category: "Air Comprimé",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80",
    description:
      "Étude et installation réseau aluminium 10 bars sur 2 hectares. Maintenance préventive intégrée.",
    results: [
      { value: "30%", label: "Gain efficacité" },
      { value: "0", label: "Pannes critiques" },
    ],
    order: 6,
  },
];

const services = [
  {
    slug: "cvc",
    badge: "Expertise 01",
    title: "Génie Climatique & CVC",
    problem:
      "Maintenir un environnement optimal dans vos installations industrielles ou tertiaires demande des systèmes CVC performants, fiables et économes en énergie.",
    solutionIntro:
      "Installation et dépannage de systèmes professionnels pour un contrôle précis de la température et de l'hygrométrie :",
    features: [
      "Systèmes VRV / VRF haute performance",
      "Centrales de traitement d'air sur-mesure",
      "Groupes d'eau glacée et pompes à chaleur",
      "Contrôle température & hygrométrie intelligent",
      "Gestion technique du bâtiment (GTB)",
    ],
    methodology: [
      { title: "Audit & Étude", text: "Analyse complète de vos besoins et de votre environnement" },
      { title: "Installation", text: "Mise en œuvre par nos équipes certifiées" },
      { title: "Maintenance", text: "Suivi et optimisation continue de la performance" },
    ],
    benefits: [
      { highlight: "Jusqu'à 40%", text: "d'économie d'énergie" },
      { highlight: "+99%", text: "de disponibilité système" },
      { highlight: "Conformité", text: "normes RT2012, RE2020" },
    ],
    ctaText: "Demander une étude",
    order: 1,
  },
  {
    slug: "air",
    badge: "Expertise 02",
    title: "Air Comprimé & Réseaux Industriels",
    problem:
      "Votre production dépend d'un air comprimé de qualité, constant et fiable. Les pannes et la mauvaise qualité de l'air impactent directement votre productivité.",
    solutionIntro: "Étude et montage de centrales d'air comprimé complètes :",
    features: [
      "Centrales d'air comprimé sur-mesure",
      "Réseaux aluminium & inox haute pression",
      "Compresseurs, sécheurs, réservoirs",
      "Filtration et traitement de l'air",
      "Maintenance préventive 24/7",
    ],
    methodology: [
      { title: "Dimensionnement", text: "Calcul précis de vos besoins en débit et pression" },
      { title: "Installation", text: "Montage professionnel selon normes ISO" },
      { title: "Optimisation", text: "Réduction des coûts énergétiques jusqu'à 30%" },
    ],
    benefits: [
      { highlight: "Jusqu'à 30%", text: "d'économie énergétique" },
      { highlight: "Qualité ISO", text: "8573-1:2010" },
      { highlight: "Maintenance", text: "préventive intégrée" },
    ],
    ctaText: "Optimiser ma production",
    order: 2,
  },
  {
    slug: "piscine",
    badge: "Expertise 03",
    title: "Piscines & Traitement de l'Eau",
    problem:
      "Gérer efficacement une piscine privée ou collective nécessite un système complet de filtration, traitement et chauffage, avec un suivi optimal de la qualité de l'eau.",
    solutionIntro: "Solutions complètes pour piscines privées et collectives :",
    features: [
      "Piscines privées & collectives",
      "Filtration & pompage haute performance",
      "Chauffage par pompe à chaleur",
      "Traitement automatique de l'eau",
      "Régulation pH et désinfection automatique",
    ],
    methodology: [
      { title: "Conception", text: "Étude technique adaptée à votre projet" },
      { title: "Installation", text: "Mise en place par nos équipes spécialisées" },
      { title: "Formation", text: "Prise en main et maintenance préventive" },
    ],
    benefits: [
      { highlight: "Qualité", text: "eau optimale constante" },
      { highlight: "Économie", text: "jusqu'à 60% d'énergie" },
      { highlight: "Confort", text: "gestion automatisée" },
    ],
    ctaText: "Découvrir nos solutions",
    order: 3,
  },
  {
    slug: "ssi",
    badge: "Expertise 04",
    title: "Systèmes Sécurité Incendie (SSI)",
    problem:
      "La sécurité de vos installations et de vos équipes exige des systèmes de sécurité incendie conformes aux normes réglementaires, fiables et maintenus régulièrement.",
    solutionIntro: "Sécurisation complète de vos installations selon les normes en vigueur :",
    features: [
      "RIA (Robinet Incendie Armé) & colonnes sèches",
      "Réseaux sprinkleurs automatiques",
      "Systèmes de désenfumage",
      "Mise en conformité réglementaire",
      "Maintenance et contrôles réglementaires",
    ],
    methodology: [
      { title: "Audit Sécurité", text: "Analyse de conformité et identification des risques" },
      { title: "Installation", text: "Mise en conformité selon APS/APD réglementaires" },
      { title: "Maintenance", text: "Visites et contrôles réglementaires trimestriels" },
    ],
    benefits: [
      { highlight: "Conformité", text: "100% réglementaire" },
      { highlight: "Réactivité", text: "intervention 24/7" },
      { highlight: "Sécurité", text: "vies et biens protégés" },
    ],
    ctaText: "Sécuriser mon site",
    order: 4,
  },
];

const stats = [
  { group: "home", value: "500+", label: "Projets réalisés", order: 1 },
  { group: "home", value: "ISO 9001", label: "Certifié qualité", order: 2 },
  { group: "home", value: "15+", label: "Années d'expertise", order: 3 },
  { group: "home", value: "24/7", label: "Support technique", order: 4 },

  { group: "projects", value: "500+", label: "Projets réalisés", order: 1 },
  { group: "projects", value: "98%", label: "Clients satisfaits", order: 2 },
  { group: "projects", value: "35%", label: "Économie moyenne", order: 3 },
  { group: "projects", value: "24/7", label: "Support technique", order: 4 },

  { group: "team", value: "50+", label: "Experts techniques", order: 1 },
  { group: "team", value: "15+", label: "Années d'expérience moyenne", order: 2 },
  { group: "team", value: "100%", label: "Certifiés & qualifiés", order: 3 },
];

const features = [
  {
    title: "Approche ingénierie complète",
    text: "De l'audit à la maintenance, une solution globale pour chaque projet.",
    order: 1,
  },
  {
    title: "Solutions sur-mesure",
    text: "Chaque installation est conçue spécifiquement pour votre environnement.",
    order: 2,
  },
  {
    title: "Équipes certifiées",
    text: "Techniciens qualifiés et en formation continue pour garantir l'excellence.",
    order: 3,
  },
  {
    title: "Maintenance & suivi long terme",
    text: "Accompagnement continu pour optimiser la performance de vos installations.",
    order: 4,
  },
];

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  const projectsCol = db.collection("projects");
  const servicesCol = db.collection("services");
  const statsCol = db.collection("stats");
  const featuresCol = db.collection("features");
  const usersCol = db.collection("users");

  if ((await projectsCol.countDocuments()) === 0) {
    const now = new Date();
    await projectsCol.insertMany(projects.map((p) => ({ ...p, createdAt: now, updatedAt: now })));
    console.log(`Inserted ${projects.length} projects.`);
  } else {
    console.log("Projects collection already has data, skipping.");
  }

  if ((await servicesCol.countDocuments()) === 0) {
    await servicesCol.insertMany(services);
    console.log(`Inserted ${services.length} services.`);
  } else {
    console.log("Services collection already has data, skipping.");
  }

  if ((await statsCol.countDocuments()) === 0) {
    await statsCol.insertMany(stats);
    console.log(`Inserted ${stats.length} stats.`);
  } else {
    console.log("Stats collection already has data, skipping.");
  }

  if ((await featuresCol.countDocuments()) === 0) {
    await featuresCol.insertMany(features);
    console.log(`Inserted ${features.length} features.`);
  } else {
    console.log("Features collection already has data, skipping.");
  }

  const adminEmail = (process.env.SEED_ADMIN_EMAIL || "").toLowerCase();
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;
  const adminName = process.env.SEED_ADMIN_NAME || "Admin";

  if (adminEmail && adminPassword) {
    const existing = await usersCol.findOne({ email: adminEmail });
    if (!existing) {
      const passwordHash = await bcrypt.hash(adminPassword, 10);
      await usersCol.insertOne({
        name: adminName,
        email: adminEmail,
        passwordHash,
        createdAt: new Date(),
      });
      console.log(`Created admin user ${adminEmail}.`);
    } else {
      console.log(`Admin user ${adminEmail} already exists, skipping.`);
    }
  } else {
    console.log("SEED_ADMIN_EMAIL/SEED_ADMIN_PASSWORD not set, skipping admin creation.");
  }

  await client.close();
  console.log("Seed complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
