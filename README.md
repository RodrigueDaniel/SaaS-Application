# 🧠 LMS SaaS App

Create a full-fledged **Learning Management System (LMS)** SaaS app from scratch! This platform features user authentication, subscriptions, payments, and an AI voice tutor—empowering seamless and interactive learning sessions in real-time.

---

## 🚀 Introduction

This project allows you to:

- Authenticate users using Clerk (Google sign-in & more)
- Handle subscriptions and billing via Stripe
- Integrate **AI Voice Agents** with [Vapi](https://www.vapi.ai/)
- Store and manage data in **Supabase**
- Build reusable UI components using **Tailwind CSS** and **shadcn/ui**
- Monitor performance and bugs using **Sentry**

---

## ⚙️ Tech Stack

| Tech        | Description |
|-------------|-------------|
| **Next.js** | Full-stack React framework with SSR, API routes, and great performance |
| **Clerk**   | Authentication and billing solution with UI components and flexible APIs |
| **Supabase**| Open-source Firebase alternative for real-time DB, auth, and storage |
| **Vapi**    | Voice AI for real-time interactive tutoring experiences |
| **Sentry**  | Tracks and fixes bugs with real-time monitoring |
| **shadcn/ui** | Modern UI components built on Tailwind + Radix |
| **Tailwind CSS** | Utility-first CSS for fast and responsive design |
| **TypeScript** | Static type checking for better dev experience |
| **Zod** | Type-safe schema validation for forms and APIs |

---

## 🔋 Features

✅ **AI Voice Agents**: Learn from topic-specific AI tutors using Vapi voice technology  
✅ **Authentication**: Secure sign-up/sign-in with Clerk (Google, email, etc.)  
✅ **Subscription Billing**: Paid plans, upgrades, and payment management with Stripe  
✅ **Session History & Bookmarks**: Save and revisit tutoring sessions  
✅ **Create Tutors**: Customize and create AI tutors based on subject/topic  
✅ **Responsive UI**: Fully mobile-friendly and accessible layout  
✅ **Search & Filter**: Quickly find tutors using search functionality  
✅ **Reusable Code**: Modular codebase and reusable components for efficiency  
✅ **Supabase Integration**: Real-time data, authentication, and PostgreSQL database  

---

## 🏁 Quick Start

### ✅ Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

---

# 📦 Installation

```bash
# Clone the repository
git clone https://github.com/adrianhajdin/saas-app.git
cd saas-app
```

## Install dependencies
```bash
npm install
```

## 🔐 Environment Variables
Create a .env file in the root directory and add the following:
```bash
# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```
## 💻 Running the Project
```bash
npm run dev
```
