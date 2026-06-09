import React from "react";
import Navbar2 from "../components/Navbar2";

export default function Report() {
  return (
      <>
        <Navbar2 />

        <div style={styles.container}>
          <h1 style={styles.heading}>Reports 📊</h1>
          <p style={styles.subtext}>
            View your churn predictions and insights here.
          </p>

          {/* Placeholder */}
          <div style={styles.card}>
            <h3>No Reports Available</h3>
            <p>
              Run a model on your dataset to generate detailed reports and insights.
            </p>
          </div>

          {/* Sample Stats */}
          <div style={styles.grid}>
            <div style={styles.smallCard}>
              <h4>Churn Rate</h4>
              <p style={styles.stat}>--%</p>
            </div>

            <div style={styles.smallCard}>
              <h4>At-Risk Users</h4>
              <p style={styles.stat}>--</p>
            </div>

            <div style={styles.smallCard}>
              <h4>Model Accuracy</h4>
              <p style={styles.stat}>--%</p>
            </div>
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
  },

  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    textAlign: "center",
    marginBottom: "30px",
  },

  grid: {
    display: "flex",
    gap: "20px",
  },

  smallCard: {
    background: "#fff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    flex: 1,
    textAlign: "center",
  },

  stat: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#4f46e5",
    marginTop: "8px",
  },
};