import Link from "next/link";
import { getAllStats, deleteStat } from "@/lib/actions/stats";
import DeleteButton from "@/components/admin/DeleteButton";

const groupLabels: Record<string, string> = {
  home: "Accueil",
  projects: "Page Projets",
  team: "À propos (équipe)",
};

export default async function AdminStatsPage() {
  const stats = await getAllStats();

  return (
    <div>
      <div className="admin-header">
        <h1>Statistiques</h1>
        <Link href="/admin/stats/new" className="admin-btn">
          Nouvelle statistique
        </Link>
      </div>

      <div className="admin-card">
        {stats.length === 0 ? (
          <p className="admin-empty">Aucune statistique pour le moment.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Groupe</th>
                <th>Valeur</th>
                <th>Libellé</th>
                <th>Ordre</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stats.map((stat) => (
                <tr key={stat._id}>
                  <td>{groupLabels[stat.group] ?? stat.group}</td>
                  <td>{stat.value}</td>
                  <td>{stat.label}</td>
                  <td>{stat.order}</td>
                  <td>
                    <div className="admin-table-actions">
                      <Link href={`/admin/stats/${stat._id}`} className="admin-btn admin-btn-secondary">
                        Modifier
                      </Link>
                      <DeleteButton
                        action={deleteStat}
                        id={stat._id}
                        confirmMessage={`Supprimer la statistique "${stat.label}" ?`}
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
