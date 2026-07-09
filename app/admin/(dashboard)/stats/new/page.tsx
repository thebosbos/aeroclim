import { createStat } from "@/lib/actions/stats";
import StatForm from "@/components/admin/StatForm";

export default function NewStatPage() {
  return (
    <div>
      <div className="admin-header">
        <h1>Nouvelle statistique</h1>
      </div>
      <div className="admin-card">
        <StatForm action={createStat} />
      </div>
    </div>
  );
}
