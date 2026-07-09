import { createService } from "@/lib/actions/services";
import ServiceForm from "@/components/admin/ServiceForm";

export default function NewServicePage() {
  return (
    <div>
      <div className="admin-header">
        <h1>Nouveau service</h1>
      </div>
      <div className="admin-card">
        <ServiceForm action={createService} />
      </div>
    </div>
  );
}
