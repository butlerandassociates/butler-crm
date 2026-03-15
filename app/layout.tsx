import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Butler CRM",
  description: "Internal CRM for Butler & Associates Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const linkStyle = {
    display: "block",
    color: "#f5f5f5",
    textDecoration: "none",
    marginBottom: "14px",
    fontSize: "18px",
  };

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f7f7f7" }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <aside
            style={{
              width: "260px",
              background: "#111",
              color: "#fff",
              padding: "28px 20px",
              boxSizing: "border-box",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "28px" }}>Butler CRM</h2>

            <nav>
              <Link href="/dashboard" style={linkStyle}>
                Dashboard
              </Link>
              <Link href="/leads" style={linkStyle}>
                Leads
              </Link>
              <Link href="/clients" style={linkStyle}>
                Clients
              </Link>
              <Link href="/projects" style={linkStyle}>
                Projects
              </Link>
              <Link href="/estimates" style={linkStyle}>
                Estimates
              </Link>
              <Link href="/tasks" style={linkStyle}>
                Tasks
              </Link>
              <Link href="/calendar" style={linkStyle}>
                Calendar
              </Link>
            </nav>
          </aside>
          <main
            style={{
              flex: 1,
              padding: "40px",
              boxSizing: "border-box",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
