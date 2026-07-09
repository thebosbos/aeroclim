import { notFound } from "next/navigation";
import { getStat, updateStat } from "@/lib/actions/stats";
import StatForm from "@/components/admin/StatForm";

export default async function EditStatPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const stat = await getStat(id);
  if (!stat) notFound();

  return (
    <div>
      <div className="admin-header">
        <h1>Modifier la statistique</h1>
      </div>
      <div className="admin-card">
        <StatForm action={updateStat} stat={stat} />
      </div>
    </div>
  );
}
