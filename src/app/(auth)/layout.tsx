"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* የላይኛው የማሰሻ (Navigation) ማውጫ */}
      <nav
        style={{
          display: "flex",
          gap: "15px",
          padding: "15px",
          borderBottom: "1px solid #ccc",
        }}
      >
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              href={link.href}
              key={link.name}
              style={{
                color: isActive ? "#0070f3" : "#333",
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              }}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* የገፁ ዋና ይዘት የሚታይበት ቦታ */}
      <main style={{ padding: "20px" }}>{children}</main>
    </>
  );
}
