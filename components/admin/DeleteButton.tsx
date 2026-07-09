"use client";

export default function DeleteButton({
  action,
  id,
  confirmMessage = "Confirmer la suppression ?",
}: {
  action: (formData: FormData) => void;
  id: string;
  confirmMessage?: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(confirmMessage)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="admin-btn admin-btn-danger">
        Supprimer
      </button>
    </form>
  );
}
