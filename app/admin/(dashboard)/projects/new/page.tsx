import { createProject } from "@/lib/actions/projects";
import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <div>
      <div className="admin-header">
        <h1>Nouveau projet</h1>
      </div>
      <div className="admin-card">
        <ProjectForm action={createProject} />
      </div>
    </div>
  );
}
