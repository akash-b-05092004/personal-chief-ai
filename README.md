# 🚀 Personal Chief AI — Agentic Assistant Foundation

A cloud-native **Personal Agentic AI Assistant project** designed as a “Chief of Staff” prototype.  
This repository contains the foundation for a **full-stack AI assistant platform** that connects with user productivity APIs (e.g., Gmail/Calendar) and evolves toward an agent with dynamic memory and action capabilities. :contentReference[oaicite:1]{index=1}

---

## 📌 Overview

This project aims to build an AI assistant that:

- Provides human-centric assistance via chat interfaces.
- Can connect to productivity platforms (Google OAuth).
- Reads & analyzes user data (email, calendar).
- Learns and retains user preferences (“dynamic memory”).
- Acts autonomously (e.g., draft replies, manage schedule).

⚠️ Gmail/Calendar integration is *scaffolded but not activated yet* — this repo currently demonstrates the infrastructure and core authentication setup.

---

## 🧠 What’s Implemented

### ✔️ Frontend
- React.js / Next.js application  
- Clean UI scaffold for user login and chat interface  
- Google OAuth sign-in implemented & validated

### ✔️ Backend
- Python (FastAPI) server  
- OAuth authentication system integrated with Google login (no Gmail/Calendar sync yet)

### 🛠 Infrastructure
- Separate Dockerfiles for frontend & backend  
- Local development with `docker-compose.yml`  
- Terraform configs for infrastructure provisioning  
- CI/CD with GitHub Actions for automated deployment

### 🧪 DevOps Validations
- Infrastructure validated using **LocalStack**  
- CI/CD workflows that deploy on every push

---

## 🗂 Project Structure

```text
├── backend/                  # FastAPI API server
├── frontend1/               # Next.js / React frontend
├── terraform/              # IaC configs (AWS / resources)
├── .github/workflows/       # CI/CD pipelines
├── docker-compose.yml        # Local stack orchestration
└── README.md                # This file
