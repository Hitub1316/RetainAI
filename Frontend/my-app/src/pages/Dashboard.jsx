import React from "react";
import Navbar2 from "../components/Navbar2";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
      <>
        <Navbar2 />

        <div style={styles.container}>
          <h1 style={styles.heading}>Dashboard 👋</h1>
          <p style={styles.subtext}>
            Manage your datasets and start analyzing customer retention.
          </p>

          {/* Actions */}
          <div style={styles.actions}>
            <button
                style={styles.primaryBtn}
                onClick={() => alert("Dataset upload feature coming soon!")}
            >
              Upload Dataset
            </button>

            <button
                style={styles.secondaryBtn}
                onClick={() => navigate("/report")}
            >
              View Reports
            </button>
          </div>

          {/* Stats Cards */}
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>Total Datasets</h3>
              <p style={styles.statValue}>0</p>
            </div>

            <div style={styles.card}>
              <h3>Models Trained</h3>
              <p style={styles.statValue}>0</p>
            </div>

            <div style={styles.card}>
              <h3>Churn Predictions</h3>
              <p style={styles.statValue}>0</p>
            </div>
          </div>

          {/* Empty State */}
          <div style={styles.empty}>
            <h3>No Activity Yet</h3>
            <p>
              Upload your first dataset to start generating predictions and insights.
            </p>
          </div>
        </div>
      </>
  );
}

const styles = {
  container: {
    padding: "40px",
    minHeight: "calc(100vh - 85px)",
    background: "#f9fafb",
  },

  heading: {
    fontSize: "32px",
    marginBottom: "12px",
    color: "#111827",
    fontWeight: "700",
  },

  subtext: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#6b7280",
    maxWidth: "600px",
  },

  actions: {
    display: "flex",
    gap: "15px",
    marginBottom: "40px",
  },

  primaryBtn: {
    padding: "14px 28px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  },

  secondaryBtn: {
    padding: "14px 28px",
    background: "#e5e7eb",
    color: "#111827",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
  },

  grid: {
    display: "flex",
    gap: "20px",
    marginBottom: "40px",
  },

  card: {
    background: "#fff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    flex: 1,
    textAlign: "center",
  },

  statValue: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#4f46e5",
    marginTop: "8px",
  },

  empty: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
};