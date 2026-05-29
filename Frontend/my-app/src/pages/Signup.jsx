import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import signup_growthimg from "../assets/signup_growthimg.png";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    type: "",
    role: "",
    regId: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: Add actual signup logic later
  };

  return (
      <main className="main">
        <div className="layout">
          {/* Branding Side */}
          <div className="branding">
            <h1 className="branding__headline">
              Experience the future of{" "}
              <span className="branding__accent">customer retention</span>.
            </h1>
            <p className="branding__subtext">
              Join thousands of industry-leading companies using RetainAI to
              predict churn, automate engagement, and scale growth through
              intelligent insights.
            </p>
            <div className="branding__image-wrap">
              <img
                  className="branding__image"
                  src={signup_growthimg}
                  alt="growth illustration"
              />
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="form-container">
            <div className="form-card">
              <div className="form-card__header">
                <h2 className="form-card__title">Create your account</h2>
                <p className="form-card__subtitle">Start your 14-day free trial today.</p>
              </div>

              <form className="form" onSubmit={handleSubmit}>
                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label" htmlFor="name">Full Name</label>
                    <input
                        className="form__input"
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                    />
                  </div>

                  <div className="form__field">
                    <label className="form__label" htmlFor="email">Work Email</label>
                    <input
                        className="form__input"
                        id="email"
                        type="email"
                        placeholder="name@company.com"
                        value={form.email}
                        onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form__field">
                  <label className="form__label" htmlFor="password">Password</label>
                  <input
                      className="form__input"
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={form.password}
                      onChange={handleChange}
                  />
                </div>

                <div className="form__field">
                  <label className="form__label" htmlFor="company">Company Name</label>
                  <input
                      className="form__input"
                      id="company"
                      type="text"
                      placeholder="Acme Inc."
                      value={form.company}
                      onChange={handleChange}
                  />
                </div>

                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label" htmlFor="type">Company Type</label>
                    <select
                        className="form__input form__select"
                        id="type"
                        value={form.type}
                        onChange={handleChange}
                    >
                      <option value="" disabled>Select type</option>
                      <option>Enterprise</option>
                      <option>Mid-Market</option>
                      <option>SME</option>
                      <option>Startup</option>
                    </select>
                  </div>

                  <div className="form__field">
                    <label className="form__label" htmlFor="role">User Role</label>
                    <select
                        className="form__input form__select"
                        id="role"
                        value={form.role}
                        onChange={handleChange}
                    >
                      <option value="" disabled>Select role</option>
                      <option>Executive</option>
                      <option>Operations</option>
                      <option>Product</option>
                      <option>Success Manager</option>
                    </select>
                  </div>
                </div>

                <div className="form__field">
                  <label className="form__label" htmlFor="regId">Company Registration ID</label>
                  <input
                      className="form__input"
                      id="regId"
                      type="text"
                      placeholder="REG-123456789"
                      value={form.regId}
                      onChange={handleChange}
                  />
                </div>

                <button className="form__submit" type="submit">
                  Create Account
                </button>
              </form>

              {/* Login Link */}
              <p className="form-card__footer">
                Already have an account?{" "}
                <Link to="/login" className="form-card__login-link">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}