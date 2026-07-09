import Link from "next/link";
import { getServices, deleteService } from "@/lib/actions/services";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function AdminServicesPage() {
  const services = await getServices();

  return (
    <div>
      <div className="admin-header">
        <h1>Services</h1>
        <Link href="/admin/services/new" className="admin-btn">
          Nouveau service
        </Link>
      </div>

      <div className="admin-card">
        {services.length === 0 ? (
          <p className="admin-empty">Aucun service pour le moment.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Identifiant</th>
                <th>Ordre</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id}>
                  <td>{service.title}</td>
                  <td>{service.slug}</td>
                  <td>{service.order}</td>
                  <td>
                    <div className="admin-table-actions">
                      <Link href={`/admin/services/${service._id}`} className="admin-btn admin-btn-secondary">
                        Modifier
                      </Link>
                      <DeleteButton
                        action={deleteService}
                        id={service._id}
                        confirmMessage={`Supprimer le service "${service.title}" ?`}
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
