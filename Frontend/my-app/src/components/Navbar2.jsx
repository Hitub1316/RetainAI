import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar2({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
      <>
        <header style={styles.navbar}>
          <nav style={styles.inner}>

            {/* LEFT */}
            <div style={styles.left}>
            <span style={styles.logo} onClick={() => navigate("/dashboard")}>
              RetainAI
            </span>

              <div style={styles.links}>
              <span
                  style={location.pathname === "/dashboard" ? styles.activeLink : styles.link}
                  onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </span>

                <span
                    style={location.pathname === "/report" ? styles.activeLink : styles.link}
                    onClick={() => navigate("/report")}
                >
                Report
              </span>
              </div>
            </div>

            {/* RIGHT */}
            <div style={styles.right}>
              <div style={styles.profileWrap} onClick={() => navigate("/profile")}>
                <div style={styles.avatar}>U</div>
                <span style={styles.profileLabel}>My Profile</span>
              </div>
            </div>

          </nav>
        </header>

        <main>{children}</main>
      </>
  );
}

const styles = {
  navbar: {
    width: "100%",
    padding: "30px 40px",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#4f46e5",
    cursor: "pointer",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    fontSize: "14px",
    color: "#6b7280",
    cursor: "pointer",
  },
  activeLink: {
    fontSize: "14px",
    color: "#4f46e5",
    fontWeight: "500",
    borderBottom: "2px solid #4f46e5",
    paddingBottom: "2px",
    cursor: "pointer",
  },
  right: {
    display: "flex",
    gap: "12px",
  },
  profileWrap: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    background: "#ffffff",
    transition: "background 0.2s",
  },
  avatar: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "#4f46e5",
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileLabel: {
    fontSize: "14px",
    color: "#111827",
    fontWeight: "500",
  },
};