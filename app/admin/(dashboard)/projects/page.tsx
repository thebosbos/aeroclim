import Link from "next/link";
import { getProjects, deleteProject } from "@/lib/actions/projects";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <div className="admin-header">
        <h1>Projets</h1>
        <Link href="/admin/projects/new" className="admin-btn">
          Nouveau projet
        </Link>
      </div>

      <div className="admin-card">
        {projects.length === 0 ? (
          <p className="admin-empty">Aucun projet pour le moment.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Catégorie</th>
                <th>Ordre</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id}>
                  <td>{project.title}</td>
                  <td>{project.category}</td>
                  <td>{project.order}</td>
                  <td>
                    <div className="admin-table-actions">
                      <Link href={`/admin/projects/${project._id}`} className="admin-btn admin-btn-secondary">
                        Modifier
                      </Link>
                      <DeleteButton
                        action={deleteProject}
                        id={project._id}
                        confirmMessage={`Supprimer le projet "${project.title}" ?`}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
