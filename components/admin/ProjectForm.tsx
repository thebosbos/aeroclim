import type { Project } from "@/lib/types";

function resultsToRaw(results: Project["results"]) {
  return results.map((r) => `${r.value} | ${r.label}`).join("\n");
}

export default function ProjectForm({
  action,
  project,
}: {
  action: (formData: FormData) => void;
  project?: Project;
}) {
  return (
    <form action={action} className="admin-form">
      {project && <input type="hidden" name="id" value={project._id} />}

      <div className="admin-field">
        <label htmlFor="title">Titre</label>
        <input type="text" id="title" name="title" required defaultValue={project?.title} />
      </div>

      <div className="admin-form-row">
        <div className="admin-field">
          <label htmlFor="category">Catégorie</label>
          <input type="text" id="category" name="category" required defaultValue={project?.category} />
        </div>
        <div className="admin-field">
          <label htmlFor="order">Ordre d&apos;affichage</label>
          <input type="number" id="order" name="order" defaultValue={project?.order ?? 0} />
        </div>
      </div>

      <div className="admin-field">
        <label htmlFor="image">URL de l&apos;image</label>
        <input type="url" id="image" name="image" required defaultValue={project?.image} />
      </div>

      <div className="admin-field">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" required defaultValue={project?.description} />
      </div>

      <div className="admin-field">
        <label htmlFor="resultsRaw">Résultats (une ligne par résultat)</label>
        <textarea
          id="resultsRaw"
          name="resultsRaw"
          placeholder={"35% | Économie énergétique\n99,8% | Disponibilité"}
          defaultValue={project ? resultsToRaw(project.results) : ""}
        />
        <span className="admin-hint">Format : valeur | libellé — max 4 lignes.</span>
      </div>

      <button type="submit" className="admin-btn">
        {project ? "Enregistrer" : "Créer le projet"}
      </button>
    </form>
  );
}
