import { logout } from "@/lib/actions/auth";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit" className="admin-logout-btn">
        Déconnexion
      </button>
    </form>
  );
}
