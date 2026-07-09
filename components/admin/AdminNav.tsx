"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Tableau de bord" },
  { href: "/admin/projects", label: "Projets" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/stats", label: "Statistiques" },
  { href: "/admin/leads", label: "Demandes" },
  { href: "/admin/users", label: "Administrateurs" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <ul className="admin-nav">
      {links.map((link) => {
        const active = link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);
        return (
          <li key={link.href}>
            <Link href={link.href} className={active ? "active" : ""}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
