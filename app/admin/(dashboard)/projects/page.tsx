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

      {projects.length === 0 ? (
        <div className="admin-card">
          <p className="admin-empty">Aucun projet pour le moment.</p>
        </div>
      ) : (
        <div className="admin-project-grid">
          {projects.map((project) => (
            <div className="admin-project-card" key={project._id}>
              <div className="admin-project-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} />
              </div>
              <div className="admin-project-card-body">
                <span className="admin-project-card-category">{project.category}</span>
                <div className="admin-project-card-title">{project.title}</div>
                <span className="admin-project-card-order">Ordre : {project.order}</span>
                <div className="admin-project-card-actions">
                  <Link href={`/admin/projects/${project._id}`} className="admin-btn admin-btn-secondary">
                    Modifier
                  </Link>
                  <DeleteButton
                    action={deleteProject}
                    id={project._id}
                    confirmMessage={`Supprimer le projet "${project.title}" ?`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
