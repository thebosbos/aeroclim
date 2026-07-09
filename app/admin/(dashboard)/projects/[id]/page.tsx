import { notFound } from "next/navigation";
import { getProject, updateProject } from "@/lib/actions/projects";
import ProjectForm from "@/components/admin/ProjectForm";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  return (
    <div>
      <div className="admin-header">
        <h1>Modifier le projet</h1>
      </div>
      <div className="admin-card">
        <ProjectForm action={updateProject} project={project} />
      </div>
    </div>
  );
}
