import type { Stat } from "@/lib/types";

export default function StatForm({
  action,
  stat,
}: {
  action: (formData: FormData) => void;
  stat?: Stat;
}) {
  return (
    <form action={action} className="admin-form">
      {stat && <input type="hidden" name="id" value={stat._id} />}

      <div className="admin-field">
        <label htmlFor="group">Groupe</label>
        <select id="group" name="group" required defaultValue={stat?.group ?? "home"}>
          <option value="home">Accueil</option>
          <option value="projects">Page Projets</option>
          <option value="team">À propos (équipe)</option>
        </select>
      </div>

      <div className="admin-form-row">
        <div className="admin-field">
          <label htmlFor="value">Valeur</label>
          <input type="text" id="value" name="value" required defaultValue={stat?.value} placeholder="500+" />
        </div>
        <div className="admin-field">
          <label htmlFor="order">Ordre</label>
          <input type="number" id="order" name="order" defaultValue={stat?.order ?? 0} />
        </div>
      </div>

      <div className="admin-field">
        <label htmlFor="label">Libellé</label>
        <input type="text" id="label" name="label" required defaultValue={stat?.label} placeholder="Projets réalisés" />
      </div>

      <button type="submit" className="admin-btn">
        {stat ? "Enregistrer" : "Créer la statistique"}
      </button>
    </form>
  );
}
