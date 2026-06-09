import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Pricing.css";

/* ── Data ─────────────────────────────────────── */
const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "Free",
    priceSuffix: null,
    desc: "Perfect for individuals and early testing.",
    features: [
      "Limited dataset uploads",
      "Basic churn prediction",
      "Standard insights",
      "Single user",
    ],
    cta: "Get Started Free",
    variant: "outline",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "$19",
    priceSuffix: "/mo",
    desc: "For growing teams and real business use.",
    features: [
      "Larger dataset support",
      "Full AI model training",
      "Advanced insights and analytics",
      "Multi-user support",
      "Faster processing",
    ],
    cta: "Start Free Trial",
    variant: "primary",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceSuffix: null,
    desc: "For large-scale organizations.",
    features: [
      "Unlimited datasets",
      "Custom AI models",
      "API access",
      "Dedicated support",
      "Enterprise-grade security",
    ],
    cta: "Contact Sales",
    variant: "outline",
    highlighted: false,
  },
];

const TRUST_ITEMS = [
  { icon: "verified_user", label: "No credit card required" },
  { icon: "cancel", label: "Cancel anytime" },
  { icon: "lock", label: "Secure data handling" },
];

const FAQS = [
  {
    q: "Do I need ML knowledge?",
    a: "Not at all. RetainAI is designed for business users and product managers.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time.",
  },
  {
    q: "Is my data secure?",
    a: "We use enterprise-grade encryption and are GDPR & SOC2 compliant.",
  },
  {
    q: "How does churn prediction work?",
    a: "Our platform analyzes historical customer behavior using advanced gradient boosting models.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
      <div className={`faq-item${open ? " faq-item--open" : ""}`}>
        <button
            className="faq-item__trigger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
        >
          <span className="faq-item__question">{q}</span>
          <span className="material-symbols-outlined faq-item__chevron">
          expand_more
        </span>
        </button>
        {open && <p className="faq-item__answer">{a}</p>}
      </div>
  );
}

export default function Pricing() {
  return (
      <main className="pricing-page">
        {/* Hero */}
        <section className="pricing-hero">
          <div className="pricing-hero__inner">
            <h1 className="pricing-hero__title">Simple, transparent pricing</h1>
            <p className="pricing-hero__sub">
              Start free. Scale as your business grows. No hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pricing-cards-section">
          <div className="pricing-cards__grid">
            {PLANS.map((plan) => (
                <div
                    key={plan.id}
                    className={`pricing-card${plan.highlighted ? " pricing-card--highlighted" : ""}`}
                >
                  {plan.badge && <div className="pricing-card__badge">{plan.badge}</div>}

                  <div className="pricing-card__header">
                    <h3 className="pricing-card__name">{plan.name}</h3>
                    <div className="pricing-card__price-row">
                      <span className="pricing-card__price">{plan.price}</span>
                      {plan.priceSuffix && <span className="pricing-card__suffix">{plan.priceSuffix}</span>}
                    </div>
                    <p className="pricing-card__desc">{plan.desc}</p>
                  </div>

                  <ul className="pricing-card__features">
                    {plan.features.map((f) => (
                        <li key={f} className="pricing-card__feature">
                    <span className="material-symbols-outlined pricing-card__check" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                          <span>{f}</span>
                        </li>
                    ))}
                  </ul>

                  <Link
                      to={plan.id === "starter" ? "/signup" : plan.id === "growth" ? "/signup" : "#"}
                      className={`pricing-card__cta pricing-card__cta--${plan.variant}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="pricing-trust">
            {TRUST_ITEMS.map((item, i) => (
                <React.Fragment key={item.label}>
              <span className="pricing-trust__item">
                <span className="material-symbols-outlined pricing-trust__icon">{item.icon}</span>
                {item.label}
              </span>
                  {i < TRUST_ITEMS.length - 1 && <span className="pricing-trust__dot">•</span>}
                </React.Fragment>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="pricing-faq">
          <div className="pricing-faq__inner">
            <h2 className="pricing-faq__title">Frequently Asked Questions</h2>
            <div className="pricing-faq__list">
              {FAQS.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pricing-cta-section">
          <div className="pricing-cta">
            <div className="pricing-cta__body">
              <div className="pricing-cta__text">
                <h2 className="pricing-cta__title">Start predicting churn today</h2>
                <p className="pricing-cta__sub">
                  Join over 500+ companies using RetainAI to grow their recurring revenue.
                </p>
              </div>
              <Link to="/signup" className="pricing-cta__btn">Get Started</Link>
            </div>
          </div>
        </section>
      </main>
  );
}