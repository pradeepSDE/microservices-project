microservices_projec# Microservices-Based Order Processing System

## 📌 Overview

This project is a **microservices-based backend system** designed to demonstrate **event-driven architecture**, **service decoupling**, and **asynchronous workflows** using **Node.js and MongoDB**.

The system simulates a real-world order lifecycle involving **Order**, **Payment**, and **Notification** services, with a **mocked payment flow** to focus on architecture rather than real payment gateways.

A separate **client application** acts as the user-facing interface for placing and tracking orders.

## The documentation is undergoing changes, proper installation and setup steps will be added soon.For any clarifications or help contact the owner.

## 🧱 Architecture Components

### 1. Client App (Frontend)

- Built using React / Next.js (or any frontend framework)
- Allows users to place orders and check order status
- Communicates **only with Order Service**
- Never interacts directly with Payment or Notification services

### 2. Order Service

- Handles order creation and status management
- Stores order data in MongoDB
- Publishes events when an order is created or updated

### 3. Payment Service

- Listens for order-related events
- Simulates (mocks) payment processing
- Determines payment success or failure
- Publishes payment result events

### 4. Notification Service

- Listens for payment-related events
- Generates user notifications (email / logs / DB entries)

---

## 🗂️ Project Folder Structure

```
microservices-project/
│
├── client-app/                 # Frontend application
│
├── order-service/              # Order microservice
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── events/
│   │   ├── services/
│   │   └── index.js
│   ├── package.json
│   └── Dockerfile
│
├── payment-service/            # Payment microservice
│   ├── src/
│   │   ├── consumers/
│   │   ├── models/
│   │   ├── services/
│   │   └── index.js
│   ├── package.json
│   └── Dockerfile
│
├── notification-service/       # Notification microservice
│   ├── src/
│   │   ├── consumers/
│   │   ├── models/
│   │   └── index.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## 🔄 Event-Driven Flow

### Step 1: User Places Order

```
Client App → POST /orders → Order Service
```

- Order is saved with status `CREATED`
- Event emitted: `OrderCreated`

---

### Step 2: Payment Processing (Mocked)

```
OrderCreated → Payment Service
```

- Payment service simulates payment logic
- Example: random success/failure
- Events emitted:

  - `PaymentSuccessful`
  - OR `PaymentFailed`

---

### Step 3: Order Status Update

```
Payment Event → Order Service
```

- Order status updated to:

  - `PAID` (on success)
  - `CANCELLED` (on failure)

---

### Step 4: Notification Sent

```
Payment Event → Notification Service
```

- Notification generated for the user

---

## 💳 Why Payment Is Mocked

- Focus is on **microservices communication**, not payment SDKs
- Avoids complexity of real gateways
- Common practice for learning system design
- Still reflects real-world backend workflows

> The client never directly makes a payment. Payment is processed internally based on events.

---

## 🛠️ Tech Stack

- **Backend:** Node.js (Express)
- **Database:** MongoDB
- **Messaging:** Event-based (Kafka / RabbitMQ / custom event bus)
- **Frontend:** React / Next.js
- **Containerization:** Docker & Docker Compose

---

## 🚀 How to Run (High Level)

1. Clone the repository
2. Configure environment variables
3. Run services using Docker Compose
4. Start client app
5. Place orders and observe service communication

---

## 📎 Notes

- Payment service is **internal only**
- Only Order Service is exposed to the client
- Architecture is intentionally simplified but scalable

---

## 👥 Contributors
"# microservices-project" 
