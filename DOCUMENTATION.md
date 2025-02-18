# Project Pico Documentation

## Table of Contents

1. [Overview](#overview)  
2. [Technical Stack](#technical-stack)  
3. [Architecture](#architecture)  
4. [Implementation Plan](#implementation-plan)  
5. [Roadmap and Timeline](#roadmap-and-timeline)  
6. [Feature Set](#feature-set)  
7. [Database Design](#database-design)  
8. [API Endpoints](#api-endpoints)  
9. [Security Considerations](#security-considerations)  
10. [Testing Strategy](#testing-strategy)  
11. [Deployment Plan](#deployment-plan)  
12. [AI Integration](#ai-integration)  
13. [Media Uploads](#media-uploads)  
14. [Naming Conventions](#naming-conventions)  
15. [AWS Infrastructure](#aws-infrastructure)  
16. [Environment Variables](#environment-variables)  
17. [Codebase Standards](#codebase-standards)  
18. [Version Control](#version-control)  
19. [Contacts and Access](#contacts-and-access)

---

## 1\. Overview

**Project Pico** is an advanced Twitter thread-creation platform designed to enhance efficiency and creativity. It features:

- Robust tools for drafting, managing, and enhancing Twitter threads.  
- Seamless Twitter API integration.  
- AI-powered enhancements (via OpenAI, Claude, or Gemini APIs).  
- Premium analytics and user-driven API key flexibility.

### **GitHub Repository**

## [project-pico](https://github.com/schandillia/project-pico)

## 2\. Technical Stack

| Category | Technology |
| :---- | :---- |
| **Framework** | Next.js 15 with App Router |
| **Language** | TypeScript |
| **Database** | MongoDB (Mongoose ORM) |
| **Styling** | Tailwind CSS, Shadcn UI |
| **Authentication** | NextAuth.js (Twitter OAuth) |
| **Payments** | Stripe |
| **AI Integration** | OpenAI, Claude, Gemini APIs |
| **Containerization** | Docker |
| **Orchestration** | Kubernetes |
| **Server Proxy** | Nginx (SSL handling) |
| **Hosting** | AWS (EC2, EKS, S3, Load Balancer) |
| **Version Control** | Git |
| **CI/CD** | GitHub Actions |
| **Monitoring** | Sentry |
| **Editor** | VSCode |

---

## 3\. Architecture

The application follows a **microservice-oriented architecture** with a clear separation of concerns.

1. **Frontend:** Next.js 15 with React and TypeScript.  
2. **Backend:** API routes in Next.js for server-side logic.  
3. **Database:** MongoDB for scalable and flexible data storage.  
4. **Authentication:** Managed through NextAuth.js with Twitter OAuth.  
5. **Payments:** Stripe for subscription management.  
6. **AI Services:** User-supplied API keys for OpenAI, Claude, or Gemini.  
7. **Deployment:** Kubernetes orchestrating Docker containers hosted on AWS.  
8. **Proxy:** Nginx reverse proxy with SSL termination.  
9. **Monitoring:** Sentry for error tracking, AWS CloudWatch for logs.

---

## 4\. Implementation Plan

### Week 1: Core Setup and Authentication

- **Setup:** Next.js project, TypeScript, folder structure.  
- **Database:** MongoDB connection, error handling, user schema.  
- **Authentication:** NextAuth.js with Twitter OAuth.  
- **Styling:** Tailwind CSS and Shadcn UI.  
- **Infrastructure:** Dockerize, Kubernetes manifests.  
- **Proxy:** Nginx configuration.  
- **Version Control:** Git setup with branch strategies.

### Week 2: Thread Editor and Basic Features

- **Editor:** Markdown support, character counter, preview.  
- **Features:** Image upload (optimization), auto-save, drag-and-drop tweet ordering.  
- **Preferences:** Local storage-based user settings.  
- **Security:** SSL via Let's Encrypt.

### Week 3: Subscription System and Premium Features

- **Free Tier:** Basic formatting, 25-tweet limit, 5 drafts.  
- **Premium Tier:** Analytics, templates, scheduling, advanced formatting.  
- **Payments:** Stripe integration with webhook support.  
- **Backend:** Middleware for role-based access.

### Week 4: Testing, Optimization, and Deployment

- **Testing:** Unit (Jest), Integration (Supertest), E2E (Cypress/Playwright).  
- **Optimization:** Editor performance and image handling.  
- **CI/CD:** GitHub Actions pipeline.  
- **Monitoring:** Sentry and AWS CloudWatch.  
- **Deployment:** Kubernetes on AWS EC2/EKS.

---

## 5\. Roadmap and Timeline

| Task | Timeline |
| :---- | :---- |
| Core Setup & Authentication | Week 1 |
| Thread Editor & Basic Features | Week 2 |
| Subscription System & Premium | Week 3 |
| Testing, Optimization & Deployment | Week 4 |

---

## 6\. Feature Set

### **Core Features**

1. **Thread Editor**  
   - Markdown support  
   - Character counter  
   - Drag-and-drop reordering  
   - Image upload optimization  
   - Auto-save system  
2. **Subscription Management**  
   - Free and Premium tiers  
   - Stripe integration for payments  
3. **AI Enhancements**  
   - Text enhancements via user-supplied API keys.  
4. **Analytics Dashboard** *(Premium)*  
   - Performance metrics  
   - Engagement tracking  
5. **Scheduling** *(Premium)*  
   - Custom post scheduling  
6. **User Preferences**  
   - Draft management  
   - UI preferences

---

## 7\. Database Design

### **Schemas**

#### User

`{`  
  `"id": "string",`  
  `"email": "string",`  
  `"name": "string",`  
  `"twitterId": "string",`  
  `"subscription": "object",`  
  `"preferences": "object",`  
  `"createdAt": "date"`  
`}`

#### Thread

`{`  
  `"id": "string",`  
  `"userId": "string",`  
  `"title": "string",`  
  `"tweets": ["string"],`  
  `"status": "string",`  
  `"analytics": "object",`  
  `"createdAt": "date",`  
  `"updatedAt": "date"`  
`}`

#### Subscription

`{`  
  `"id": "string",`  
  `"userId": "string",`  
  `"plan": "string",`  
  `"status": "string",`  
  `"startDate": "date",`  
  `"endDate": "date"`  
`}`

---

## 8\. API Endpoints

| Feature | Method | Endpoint | Description |
| :---- | :---- | :---- | :---- |
| **Thread Management** | `POST` | `/api/threads` | Create a new thread |
|  | `GET` | `/api/threads` | Fetch user threads |
|  | `PUT` | `/api/threads/:id` | Update a thread |
|  | `DELETE` | `/api/threads/:id` | Delete a thread |
| **Subscription** | `POST` | `/api/subscription` | Handle subscription flow |
| **AI Enhancements** | `POST` | `/api/ai/enhance` | Enhance text content |
| **Media Upload** | `POST` | `/api/twitter/media` | Upload media to Twitter |
| **Twitter Posting** | `POST` | `/api/twitter/post` | Publish thread to Twitter |

---

## 9\. Security Considerations

- **Input Validation:** Zod or Joi.  
- **Authentication:** NextAuth.js with Twitter OAuth.  
- **Rate Limiting:** express-rate-limit.  
- **Role-Based Access Control:** Middleware enforcement.  
- **Secrets Management:** AWS Secrets Manager.

---

## 10\. Testing Strategy

| Type | Tool |
| :---- | :---- |
| **Unit Tests** | Jest |
| **Integration Tests** | Supertest |
| **E2E Tests** | Playwright/Cypress |
| **Performance Tests** | Lighthouse |

---

## 11\. Deployment Plan

- **Hosting:** AWS EC2 and EKS (Free Tier).  
- **CI/CD:** GitHub Actions for automated builds.  
- **SSL:** Managed via Nginx \+ Let's Encrypt.  
- **Monitoring:** Sentry and AWS CloudWatch.  
- **Backups:** MongoDB Atlas scheduled backups.

### AWS Resources

- **EC2 Instance:** `pico-dev-01`  
- **IAM User:** `pico-dev-admin`  
- **IAM Role:** `pico-dev-ec2-role`  
- **Account ID:** `257394482134`  
- **Root Email:** `lucky-plovers-4d@icloud.com`

---

## 12\. AI Integration

- **APIs Supported:** OpenAI, Claude, Gemini  
- **Key Management:** User-supplied API keys via environment variables.  
- **Security:** Validate and secure keys server-side.

---

## 13\. Naming Conventions

### AWS Assets

* **S3 Buckets:** `pico-{environment}-{purpose}` (e.g., `pico-prod-media`)  
* **EC2 Instances:** `pico-{environment}-{service}-{index}` (e.g., `pico-prod-app-01`)  
* **EKS Clusters:** `pico-{environment}-cluster` (e.g., `pico-prod-cluster`)  
* **IAM Users:** `pico-{environment}-{service}-role` (e.g., `pico-dev-app-admin`)  
* **IAM Roles:** `pico-{environment}-{service}-role` (e.g., `pico-dev-ec2-role`)  
* **Secrets Manager Keys:** `pico/{environment}/{service}/{key}`  
* **CloudWatch Log Groups:** `pico/{environment}/{service}/logs` (e.g., `pico/prod/app/logs`)

### Database Assets

* **Database Names:** `pico_{environment}_{purpose}` (e.g., `pico_prod_main`)  
* **Collections:** `{feature}_{data}` (e.g., `threads_metadata`)  
* **Indexes:** `{collection}_{field}_idx` (e.g., `threads_userId_idx`)

### Git Assets

* #### Branches:

  * Main branch: `main`  
  * Feature branches: `feature/{feature-name}`  
  * Bugfix branches: `bugfix/{issue-name}`  
  * Hotfix branches: `hotfix/{issue-name}`  
  * Release branches: `release/{version}`

* #### Tags:

  * Format: `v{major}.{minor}.{patch}` (e.g., `v1.0.0`)

### Key-Value Pairs and Variables

* #### Environment Variables:

  * General format: `PICO_{ENV}_{SERVICE}_{VARIABLE}` (e.g., `PICO_PROD_DB_URI`)

* #### AI API Keys:

  * Format: `PICO_{ENV}_AI_{PROVIDER}_KEY` (e.g., `PICO_PROD_AI_OPENAI_KEY`)

* #### Cache Keys:

  * Format: `pico:{environment}:{feature}:{data}` (e.g., `pico:prod:thread:12345`)

* #### Application Constants:

  * General format: `PICO_{FEATURE}_{CONSTANT_NAME}` (e.g., `PICO_AUTH_TOKEN_EXPIRY`)

### Variables and Codebase

* #### React Components:

  * Format: `PascalCase` (e.g., `TweetEditor`)

* #### Functions:

  * Format: `camelCase` (e.g., `fetchThreadData`)

* #### CSS Classes:

  * Format: `kebab-case` (e.g., `tweet-container`)

* #### API Routes:

  * Format: `/api/{feature}/{action}` (e.g., `/api/thread/create`)

* #### Test Names:

  * Format: `should {action} when {condition}` (e.g., `should save thread when user is authenticated`)

---

## 14\. AWS Infrastructure

- **EC2 Instance:** `pico-dev-01`  
- **IAM User:** `pico-dev-admin`  
- **IAM Role:** `pico-dev-ec2-role`  
- **Account ID:** `257394482134`  
- **Root Email:** `lucky-plovers-4d@icloud.com`  
- **S3 Bucket:** `pico-dev-media`  
- **Load Balancer:** `pico-dev-alb`  
- **CloudWatch Logs:** `pico-dev-log-group`  
- **KMS Keys:** `pico-dev-kms-key`

---

## 15\. Environment Variables

| Variable | Example |
| :---- | :---- |
| `PICO_DEV_DB_URI` | `mongodb://user:pass@host:port/db` |
| `PICO_DEV_STRIPE_KEY` | `sk_test_51L...` |
| `PICO_DEV_TWITTER_API_KEY` | `TWT_API_12345` |
| `PICO_DEV_AI_OPENAI_KEY` | `openai-12345` |
| `PICO_DEV_IMAGE_BUCKET` | `pico-dev-media` |
| `PICO_DEV_CLOUDWATCH_GROUP` | `pico-dev-log-group` |
| `PICO_DEV_SSH_KEY` | `pico-dev-ssh-key.pem` |
| `PICO_DEV_ADMIN_KEYS_FILE` | `pico-dev-admin_accessKeys.csv` |

---

## 16\. Codebase Standards

- **Linting:** ESLint \+ Prettier  
- **Folder Structure:** Clean separation of concerns  
- **Commit Messages:** Conventional Commits (`feat`, `fix`, `chore`)  
- **Code Formatting:** Prettier enforced on CI  
- **Environment Separation:** `.env.local`, `.env.prod`, `.env.pico.dev`

---

## 17\. Version Control

- **Repository:** [project-pico](https://github.com/schandillia/project-pico)  
- **Branches:**  
  - `main`: Stable production  
  - `develop`: Development  
  - `feature/*`: New features  
  - `fix/*`: Bug fixes  
  - `chore/*`: Maintenance tasks  
- **CI/CD:** GitHub Actions

---

## 19\. Contacts and Access

- **Project Lead:** Amit Schandillia  
- **GitHub Username:** schandillia  
- **AWS Access:** Root Email \- `lucky-plovers-4d@icloud.com`  
- **EC2 SSH Key:** `pico-dev-ssh-key.pem`  
- **Admin IAM Keys:** `pico-dev-admin_accessKeys.csv`

---