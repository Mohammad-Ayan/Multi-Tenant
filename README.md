# 🧾 SalesDesk — Multi-Tenant Sales Dashboard

A **production-ready, frontend-only SaaS dashboard** demonstrating **multi-tenancy**, **role-based access control (RBAC)**, and **modular React architecture**.
Built as part of an assignment with emphasis on **structure, UX, scalability, and application behavior** rather than backend completeness.

---

## 🚀 Overview

**SalesDesk** is a mock SaaS platform used by multiple organizations (tenants) to manage:

* Sales Leads
* Call Logs

Each tenant has users with roles (**Admin** or **Agent**) and permissions are enforced **within the tenant scope**.

> 🔹 Backend is intentionally mocked using local data and service layers.

---

## ✨ Key Features

### 🏢 Multi-Tenancy

* Tenants supported:

  * Organization A
  * Organization B
* Active tenant is part of authenticated user state
* Switching tenant updates visible data instantly
* Admins can access all tenants
* Agents are restricted to a single tenant

---

### 👥 Role-Based Access Control (RBAC)

| Feature          | Admin | Agent |
| ---------------- | ----- | ----- |
| View Leads       | ✅     | ✅     |
| Filter Leads     | ✅     | ✅     |
| Edit Lead Status | ✅     | ❌     |
| View Call Logs   | ✅     | ✅     |
| Switch Tenant    | ✅     | ❌     |
| Access Settings  | ✅     | ❌     |

RBAC is enforced at:

* UI level (buttons, navigation)
* Route level (Settings page)
* Component level (edit actions)

---

### 📊 Leads Module

* Tenant-specific leads
* Fields:

  * Name
  * Phone
  * Status (Open, Contacted, Converted, Lost)
* Filter by status
* Admin-only status editing via modal
* Immutable state updates for instant UI refresh

---

### 📞 Call Logs Module

* Tenant-specific call history
* Fields:

  * Lead Name
  * Date & Time
  * Duration
  * Outcome
* Read-only (as per requirements)
* Consistent UI with Leads module

---

## 🧱 Tech Stack

* **React 18**
* **Vite** (fast dev & build)
* **Zustand** (lightweight state management)
* **React Router v6**
* **Tailwind CSS** (modern utility-first styling)
* **lucide-react** (icons)

---

## 📁 Project Structure

```text
src/
├─ components/
│  ├─ common/        # TenantSwitcher, RoleSwitcher, UI helpers
│  └─ layout/        # Sidebar, Topbar, Layout
│
├─ features/
│  ├─ leads/         # LeadsPage, LeadTable, Edit modal, hooks
│  ├─ calls/         # CallsPage, CallTable, hooks
│  └─ settings/      # Admin-only settings page
│
├─ stores/
│  └─ auth.store.js  # Auth, role & tenant state (single source of truth)
│
├─ mocks/            # Tenant-scoped mock data
├─ utils/            # Formatting helpers
├─ App.jsx
├─ main.jsx
```

This **feature-based structure** allows easy scaling and mirrors real-world SaaS frontends.

---

## 🔐 Authentication (Mocked)

* Authentication is simulated via local state
* Role switcher (Admin / Agent) provided for demo purposes
* Tenant access rules enforced based on role

> No backend or API required for this assignment

---

## 🎨 UX & UI Highlights

* Modern SaaS-style layout (Sidebar + Topbar)
* Brand identity with icon + wordmark
* Avatar-based user profile
* Clear tenant & role visibility
* Status pills with semantic colors
* Clean spacing and visual hierarchy

Inspired by modern dashboards like **Lumen**, **Linear**, and **Notion**.

---

## ⚡ Performance & Best Practices

* Single source of truth for tenant state
* Memoized selectors (`useMemo`) to avoid unnecessary re-renders
* Immutable state updates
* Modular components and hooks
* Ready for future optimizations (virtualization, React Query)

---

## ▶️ Getting Started

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

---

## 🧪 How to Demo (For Reviewers)

1. Login as **Admin**

   * Switch between Organization A & B
   * Edit lead statuses
   * Access Settings

2. Switch to **Agent**

   * Tenant locked
   * View-only access
   * No Settings or Edit actions

This clearly demonstrates **tenancy + RBAC** behavior.

---

## 🏁 Conclusion

This project focuses on **frontend architecture, UX quality, and application behavior** rather than backend complexity.

It demonstrates:

* Realistic SaaS patterns
* Clean React architecture
* Correct multi-tenant logic
* Production-level UI polish


---

**Author**: Mohammad Ayan
**Project**: SalesDesk — Multi-Tenant Sales Dashboard
