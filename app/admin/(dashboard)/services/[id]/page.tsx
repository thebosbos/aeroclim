import { notFound } from "next/navigation";
import { getService, updateService } from "@/lib/actions/services";
import ServiceForm from "@/components/admin/ServiceForm";

export default async function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = await getService(id);
  if (!service) notFound();

  return (
    <div>
      <div className="admin-header">
        <h1>Modifier le service</h1>
      </div>
      <div className="admin-card">
        <ServiceForm action={updateService} service={service} />
      </div>
    </div>
  );
}
