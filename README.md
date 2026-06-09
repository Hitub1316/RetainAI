# RetainAI 🧠
### AI-Powered Customer Retention Platform

RetainAI is a full-stack SaaS platform that uses machine learning and multi-agent AI to predict customer churn, explain risk factors, and automatically generate retention strategies — across multiple industries including Telecom, Banking, and E-commerce.

---

## 🌍 Why RetainAI?

- Global churn costs businesses **$1.6 trillion/year** (Accenture)
- Acquiring a new customer costs **5–7x more** than retaining one
- A **5% improvement in retention** increases profits by **25–95%** (Harvard Business Review)
- RetainAI helps organizations identify at-risk customers **30–60 days early** and take automated, data-driven action

---

## ⚙️ Tech Stack

| Layer       | Technology                                              |
|-------------|---------------------------------------------------------|
| Frontend    | React.js, Axios, Recharts, React Dropzone               |
| Backend     | Spring Boot (Java), Spring Data JPA, Apache Commons CSV |
| ML / Agent  | Python, Flask, LangChain, LangGraph, Gemini, SHAP       |
| Database    | MySQL 8.0                                               |
| Integration | REST APIs                                               |
| DevOps      | Docker, Docker Compose                                  |

---

## 🏗️ Architecture

```
┌─────────────────┐     REST      ┌──────────────────┐     REST     ┌─────────────────────┐
│   React Frontend│ ────────────► │  Spring Boot API  │ ──────────► │  Python Agent (Flask)│
│   (Port 3000)   │               │   (Port 8080)     │             │   (Port 5000)        │
└─────────────────┘               └──────────────────┘             └─────────────────────┘
                                           │                                   │
                                           ▼                                   ▼
                                   ┌──────────────┐                 ┌──────────────────────┐
                                   │  MySQL 8.0   │                 │  Multi-Agent System  │
                                   │  (Port 3307) │                 │  - Prediction Agent  │
                                   └──────────────┘                 │  - Explanation Agent │
                                                                     │  - Recommendation    │
                                                                     │  - Monitoring Agent  │
                                                                     │  - Copilot Agent     │
                                                                     └──────────────────────┘
```

---

## 🔌 API Endpoints (Backend)

| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| POST   | `/customers/ml-predict`   | Predict churn for a single customer  |
| GET    | `/customers`              | Fetch all customers                  |
| GET    | `/customers/stats`        | Churn analytics and retention stats  |
| POST   | `/upload-csv`             | Bulk upload customers via CSV        |

## 🤖 Agent API Endpoints (Python)

| Method | Endpoint         | Description                                      |
|--------|------------------|--------------------------------------------------|
| POST   | `/analyze`       | Full analysis — prediction, explanation, recommendation |
| POST   | `/copilot`       | AI Copilot for natural language retention queries |

---

## 📊 Current Features

- ✅ Multi-agent AI system (prediction, explanation, recommendation, monitoring, copilot)
- ✅ Spring Boot REST API with MySQL integration
- ✅ CSV bulk upload with automatic customer parsing
- ✅ React dashboard with analytics charts (Recharts)
- ✅ AI Copilot chat interface
- ✅ AI Explanation cards with SHAP-based reasoning
- ✅ Customer form for manual entry + predictions
- ✅ File upload with drag-and-drop (React Dropzone)
- ✅ Stats cards — total customers, high risk, churn rate, retention rate
- ✅ Customer table with risk badges
- ✅ Fully Dockerized — one command to run everything
- ✅ Public/protected route split with dual navbar layout
- 🚧 Industry selector — Telecom, Banking, E-commerce (in progress)
- 🚧 Automated retention email campaigns (in progress)
- 🚧 Customer segment view — Critical / At Risk / Stable (planned)
- 🚧 Authentication & role-based access (planned)

---

## 🤖 Multi-Agent System

The Python agent layer uses LangChain + LangGraph and consists of 5 specialized agents:

| Agent                  | Role                                                          |
|------------------------|---------------------------------------------------------------|
| **Prediction Agent**   | ML model inference — churn probability + binary prediction    |
| **Explanation Agent**  | SHAP-based feature importance — explains *why* a customer churns |
| **Recommendation Agent** | Generates personalized retention strategies per customer   |
| **Monitoring Agent**   | Tracks model performance and detects data drift               |
| **Copilot Agent**      | Natural language interface for retention queries              |

---

## 🚀 Running with Docker (Recommended)

### Prerequisites
- Docker Desktop installed and running

### One command to start everything:
```bash
docker-compose up --build
```

This starts 4 services:
| Service  | URL                        |
|----------|----------------------------|
| Frontend | http://localhost:3000       |
| Backend  | http://localhost:8080       |
| Agent    | http://localhost:5000       |
| MySQL    | localhost:3307              |

### To stop:
```bash
docker-compose down
```

### To rebuild a specific service:
```bash
docker-compose build --no-cache frontend
docker-compose up
```

---

## 🛠️ Manual Setup (Without Docker)

### 1. MySQL
```sql
mysql -u root -p
CREATE DATABASE churn_db;
```

### 2. Backend
```bash
cd backend/backend
./mvnw spring-boot:run
```

### 3. Agent
```bash
cd agent
pip install -r requirements.txt
python agent_api.py
```

### 4. Frontend
```bash
cd Frontend/my-app
npm install
npm start
```

---

## 📁 Project Structure

```
RetainAI/
├── Frontend/
│   └── my-app/
│       ├── src/
│       │   ├── components/       # AICopilot, AnalyticsCharts, CustomerForm,
│       │   │                     # CustomerTable, FileUpload, AIInsights,
│       │   │                     # AIExplanationCard, Navbar, Navbar2, Layout
│       │   ├── pages/            # LandingPage, Login, Signup, Dashboard,
│       │   │                     # Home, Report, Features, Pricing,
│       │   │                     # Resources, Working
│       │   └── styles/           # CSS per page/component
│       └── public/
├── backend/
│   └── backend/
│       └── src/main/java/com/churn/backend/
│           ├── controller/       # CustomerController, FileUploadController
│           ├── model/            # Customer.java
│           ├── repository/       # CustomerRepository.java
│           └── service/          # CustomerService.java
├── agent/
│   ├── agents/                   # 5 specialized agents
│   ├── agent_api.py              # Flask entry point
│   └── requirements.txt
├── Dockerfile.agent
├── docker-compose.yaml
└── README.md
```

---

## 🌐 Industry Verticals (Roadmap)

| Industry        | Key Churn Signals                          | Business Impact                        |
|-----------------|--------------------------------------------|----------------------------------------|
| **Telecom**     | Contract type, charges, tenure             | 20–30% annual churn → ₹60L+/yr losses |
| **Banking**     | Credit score, products, account activity   | ₹15–40Cr acquisition cost to replace  |
| **E-commerce**  | Login frequency, cart abandonment, plan    | 7% monthly churn → ₹70L/month lost    |

---

## 👥 Contributors

| Name | Role |
|------|------|
| randomlyclueless | Multi-agent system, Dashboard, Full-stack integration |
| Rutuja | Backend APIs, Docker setup, Frontend pages |

---

## 📄 License

MIT License
