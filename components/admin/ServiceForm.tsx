import type { Service } from "@/lib/types";

function linesToRaw(lines: string[]) {
  return lines.join("\n");
}

function pairsToRaw(pairs: { title?: string; text: string; highlight?: string }[]) {
  return pairs.map((p) => `${p.title ?? p.highlight ?? ""} | ${p.text}`).join("\n");
}

export default function ServiceForm({
  action,
  service,
}: {
  action: (formData: FormData) => void;
  service?: Service;
}) {
  return (
    <form action={action} className="admin-form">
      {service && <input type="hidden" name="id" value={service._id} />}

      <div className="admin-form-row">
        <div className="admin-field">
          <label htmlFor="slug">Identifiant (ancre URL)</label>
          <input type="text" id="slug" name="slug" required defaultValue={service?.slug} placeholder="cvc" />
        </div>
        <div className="admin-field">
          <label htmlFor="order">Ordre d&apos;affichage</label>
          <input type="number" id="order" name="order" defaultValue={service?.order ?? 0} />
        </div>
      </div>

      <div className="admin-form-row">
        <div className="admin-field">
          <label htmlFor="badge">Badge</label>
          <input type="text" id="badge" name="badge" required defaultValue={service?.badge} placeholder="Expertise 01" />
        </div>
        <div className="admin-field">
          <label htmlFor="title">Titre</label>
          <input type="text" id="title" name="title" required defaultValue={service?.title} />
        </div>
      </div>

      <div className="admin-field">
        <label htmlFor="problem">Problématique</label>
        <textarea id="problem" name="problem" required defaultValue={service?.problem} />
      </div>

      <div className="admin-field">
        <label htmlFor="solutionIntro">Introduction de la solution</label>
        <textarea id="solutionIntro" name="solutionIntro" required defaultValue={service?.solutionIntro} />
      </div>

      <div className="admin-field">
        <label htmlFor="featuresRaw">Points forts (une ligne chacun)</label>
        <textarea
          id="featuresRaw"
          name="featuresRaw"
          required
          placeholder={"Systèmes VRV / VRF haute performance\nCentrales de traitement d'air sur-mesure"}
          defaultValue={service ? linesToRaw(service.features) : ""}
        />
      </div>

      <div className="admin-field">
        <label htmlFor="methodologyRaw">Méthodologie (max 3 lignes)</label>
        <textarea
          id="methodologyRaw"
          name="methodologyRaw"
          placeholder={"Audit & Étude | Analyse complète de vos besoins\nInstallation | Mise en œuvre par nos équipes"}
          defaultValue={service ? pairsToRaw(service.methodology) : ""}
        />
        <span className="admin-hint">Format : titre | description</span>
      </div>

      <div className="admin-field">
        <label htmlFor="benefitsRaw">Avantages mesurables (max 3 lignes)</label>
        <textarea
          id="benefitsRaw"
          name="benefitsRaw"
          placeholder={"Jusqu'à 40% | d'économie d'énergie\n+99% | de disponibilité système"}
          defaultValue={service ? pairsToRaw(service.benefits) : ""}
        />
        <span className="admin-hint">Format : mise en avant | description</span>
      </div>

      <div className="admin-field">
        <label htmlFor="ctaText">Texte du bouton d&apos;appel à l&apos;action</label>
        <input type="text" id="ctaText" name="ctaText" required defaultValue={service?.ctaText} />
      </div>

      <button type="submit" className="admin-btn">
        {service ? "Enregistrer" : "Créer le service"}
      </button>
    </form>
  );
}
