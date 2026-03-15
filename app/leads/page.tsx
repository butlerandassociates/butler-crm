"use client";

import { useState } from "react";

type Lead = {
  id: number;
  name: string;
  phone: string;
  email: string;
  projectType: string;
  status: string;
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 1,
      name: "Sarah Thompson",
      phone: "(256) 555-0141",
      email: "sarah@example.com",
      projectType: "Concrete Patio",
      status: "New",
    },
    {
      id: 2,
      name: "Michael Reed",
      phone: "(256) 555-0198",
      email: "michael@example.com",
      projectType: "Retaining Wall",
      status: "Estimate Sent",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    status: "New",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.projectType) {
      alert("Please fill out all fields.");
      return;
    }

    const newLead: Lead = {
      id: Date.now(),
      name: form.name,
      phone: form.phone,
      email: form.email,
      projectType: form.projectType,
      status: form.status,
    };

    setLeads([newLead, ...leads]);

    setForm({
      name: "",
      phone: "",
      email: "",
      projectType: "",
      status: "New",
    });
  }

  const cardStyle: React.CSSProperties = {
    background: "#ffffff",
    borderRadius: "14px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    marginBottom: "24px",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #d9d9d9",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "8px",
    fontWeight: 600,
    fontSize: "14px",
  };

  const buttonStyle: React.CSSProperties = {
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "12px 18px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div>
      <h1 style={{ marginTop: 0, fontSize: "32px" }}>Leads</h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Track incoming prospects and early-stage opportunities.
      </p>

      <div style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Add New Lead</h2>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                style={inputStyle}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label style={labelStyle}>Phone</label>
              <input
                style={inputStyle}
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                style={inputStyle}
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label style={labelStyle}>Project Type</label>
              <input
                style={inputStyle}
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                placeholder="Concrete Patio, Retaining Wall, etc."
              />
            </div>

            <div>
              <label style={labelStyle}>Status</label>
              <select
                style={inputStyle}
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option>New</option>
                <option>Contacted</option>
                <option>Consult Scheduled</option>
                <option>Estimate Sent</option>
                <option>Won</option>
                <option>Lost</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: "18px" }}>
            <button type="submit" style={buttonStyle}>
              Add Lead
            </button>
          </div>
        </form>
      </div>

      <div style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Lead Pipeline</h2>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "700px",
            }}
          >
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid #e5e5e5" }}>
                <th style={{ padding: "12px" }}>Name</th>
                <th style={{ padding: "12px" }}>Phone</th>
                <th style={{ padding: "12px" }}>Email</th>
                <th style={{ padding: "12px" }}>Project Type</th>
                <th style={{ padding: "12px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "12px" }}>{lead.name}</td>
                  <td style={{ padding: "12px" }}>{lead.phone}</td>
                  <td style={{ padding: "12px" }}>{lead.email}</td>
                  <td style={{ padding: "12px" }}>{lead.projectType}</td>
                  <td style={{ padding: "12px" }}>{lead.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}