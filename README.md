# TRAABCO Business Platform

## About TRAABCO

TRAABCO is a black-owned accounting and business consulting firm based in South Africa, dedicated to empowering small and medium enterprises (SMEs). The firm provides a range of professional services including:

- **Accounting** — Bookkeeping, financial statements, and reporting
- **Tax** — Tax planning, compliance, and SARS submissions
- **Auditing** — Independent audits and assurance services
- **Business Advisory** — Strategic guidance to help SMEs grow and operate efficiently

This platform was built to digitise and streamline how TRAABCO manages its client relationships, service bookings, consultant engagements, and payments — replacing manual processes with a structured, role-based system.

---

## How the Business Flow Works

1. A **Client** selects a service and submits a request
2. The request becomes a **Booking** assigned to a consultant
3. Once approved, the booking becomes an **Engagement** where the consultant performs the work
4. Upon completion, a **Payment** is processed and recorded

---

## Tech Stack

### Backend
| Technology | Purpose |

|HTML 5 & CSS 3|Designing and Developing our web pages|
| Spring Boot 3 | Application framework |
| JavaScript |  For interacvtive web pages|
| Spring Data JPA | Database access and ORM |
| MySQL | Relational database |


### Architecture
The backend follows a **layered, domain-driven package structure** — each business domain (user, client, booking, engagement, payment) is self-contained with its own entity, repository, service, controller, and DTOs.

---

## Project Structure

```
com.cput.traabcobusinessplatform
│
├── config/            # Security, JWT, CORS configuration
├── exception/         # Global exception handler and custom exceptions
├── common/            # Shared utilities e.g. ApiResponse wrapper
│
├── user/              # User accounts and authentication
├── client/            # SME client management
├── serviceoffering/   # Services TRAABCO offers
├── booking/           # Client service requests and approvals
├── engagement/        # Active consultant work records
└── payment/           # Payment tracking per engagement
```

---

## Roles

| Role | Access |
|------|--------|
| `ADMIN` | Full access — manages users, clients, bookings, engagements, payments |
| `CONSULTANT` | Can view clients and manage their assigned engagements |
| `VIEWER` | Read-only access |

---

## Team

This platform is being developed by a team of students from the **Cape Peninsula University of Technology (CPUT)** as part of a final year project.
