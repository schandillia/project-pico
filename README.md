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

## 1. Overview

**Project Pico** is an advanced Twitter thread-creation platform designed to enhance efficiency and creativity. It features:

- Robust tools for drafting, managing, and enhancing Twitter threads.  
- Seamless Twitter API integration.  
- AI-powered enhancements (via OpenAI, Claude, or Gemini APIs).  
- Premium analytics and user-driven API key flexibility.

### **GitHub Repository**

## [project-pico](https://github.com/schandillia/project-pico)

## 2. Technical Stack

| Category               | Technology                     |
| :--------------------- | :----------------------------- |
| **Framework**          | Next.js 15 with App Router    |
| **Language**           | TypeScript                    |
| **Database**           | MongoDB (Mongoose ORM)        |
| **Styling**            | Tailwind CSS, Shadcn UI       |
| **Authentication**     | NextAuth.js (Twitter OAuth)   |
| **Payments**           | Stripe                        |
| **AI Integration**     | OpenAI, Claude, Gemini APIs   |
| **Containerization**   | Docker                        |
| **Orchestration**      | Kubernetes                    |
| **Server Proxy**       | Nginx (SSL handling)          |
| **Hosting**            | AWS (EC2, EKS, S3, Load Balancer) |
| **Version Control**    | Git                           |
| **CI/CD**              | GitHub Actions                |
| **Monitoring**         | Sentry                        |
| **Editor**             | VSCode                        |

---

## 3. Architecture

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

## 4. Implementation Plan

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

## 5. Roadmap and Timeline

| Task                            | Timeline |
| :------------------------------ | :------- |
| Core Setup & Authentication     | Week 1   |
| Thread Editor & Basic Features  | Week 2   |
| Subscription System & Premium   | Week 3   |
| Testing, Optimization & Deployment | Week 4   |

---

## 6. Feature Set

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

## 7. Database Design

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

## 8. API Endpoints

| Feature              | Method  | Endpoint                  | Description              |
| :------------------- | :------ | :------------------------ | :----------------------- |
| **Thread Management** | `POST`  | `/api/threads`            | Create a new thread      |
|                      | `GET`   | `/api/threads`            | Fetch user threads       |
|                      | `PUT`   | `/api/threads/:id`        | Update a thread          |
|                      | `DELETE`| `/api/threads/:id`        | Delete a thread          |
| **Subscription**     | `POST`  | `/api/subscription`       | Handle subscription flow |
| **AI Enhancements**  | `POST`  | `/api/ai/enhance`         | Enhance text content     |
| **Media Upload**     | `POST`  | `/api/twitter/media`      | Upload media to Twitter  |
| **Twitter Posting**  | `POST`  | `/api/twitter/post`       | Publish thread to Twitter|

---

*... Document continues with remaining sections ...*