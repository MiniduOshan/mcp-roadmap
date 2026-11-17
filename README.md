# Model Context Protocol (MCP) Roadmap

Welcome to the **MCP Roadmap**! 🚀

This repository is a comprehensive, hands-on guide to mastering the **Model Context Protocol (MCP)** by building a series of increasingly complex MCP servers.

Instead of only reading documentation and tutorials, this roadmap follows a **learn-by-building approach**. Each stage introduces a new MCP concept and turns it into a practical project.

By the end of this roadmap, you will have built MCP servers that work with **tools, resources, prompts, file systems, GitHub, external APIs, MongoDB, PostgreSQL, REST APIs, Docker, multiple MCP servers, and AI agents**.

---

## 📚 What is MCP?

**Model Context Protocol (MCP)** is an open protocol that allows AI applications to connect with external tools, data sources, and services in a standardized way.

Instead of building custom integrations for every AI application, MCP provides a common interface through which AI models can interact with external systems.

A simplified architecture looks like this:

```text
┌──────────────────────┐
│      AI Client       │
│ ChatGPT / Claude etc │
└──────────┬───────────┘
           │
           │ MCP
           ▼
┌──────────────────────┐
│      MCP Server      │
│                      │
│  Tools               │
│  Resources           │
│  Prompts             │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ External Systems     │
│                      │
│ APIs / DB / Files    │
│ GitHub / Services    │
└──────────────────────┘
```

MCP servers act as a bridge between AI applications and external capabilities.

---

# 🚀 Curriculum

This repository is divided into **14 progressive stages**.

Each stage is a self-contained **Node.js / TypeScript** project designed to teach a specific MCP concept.

| Stage  | Topic                                 | Description                                                                                                                                    |
| ------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **01** | [Basic Server](./01-Basic-Server)     | Understand the MCP architecture, JSON-RPC communication, server initialization, and basic tool registration.                                   |
| **02** | [Calculator](./02-Calculator)         | Implement functional math tools, input schemas, validation, and tool execution.                                                                |
| **03** | [Resources](./03-Resources)           | Learn how to expose read-only files and structured data to AI applications.                                                                    |
| **04** | [Prompts](./04-Prompts)               | Create reusable prompt templates that AI clients can discover and use.                                                                         |
| **05** | [File System](./05-File-System)       | Build an MCP server that interacts with the local file system using operations such as `readFile` and `writeFile`.                             |
| **06** | [GitHub](./06-GitHub)                 | Wrap the GitHub API into MCP tools for operations such as creating issues, listing branches, and reading repositories.                         |
| **07** | [Weather](./07-Weather)               | Consume a public REST API and expose weather information through MCP tools.                                                                    |
| **08** | [MongoDB](./08-MongoDB)               | Build an AI database assistant connected to a MongoDB database.                                                                                |
| **09** | [PostgreSQL](./09-PostgreSQL)         | Build an AI SQL assistant capable of interacting with a PostgreSQL database.                                                                   |
| **10** | [REST API](./10-REST-API)             | Learn how to integrate an existing Express/Fastify REST API with an MCP server.                                                                |
| **11** | [Docker](./11-Docker)                 | Containerise and deploy MCP servers using Docker and Docker Compose.                                                                           |
| **12** | [Multi-MCP](./12-Multi-MCP)           | Run multiple MCP servers simultaneously and allow an AI application to orchestrate different capabilities.                                     |
| **13** | [Agent](./13-Agent)                   | Build a multi-tool AI agent capable of search, summarisation, code review, and tool orchestration.                                             |
| **14** | [Production MCP](./14-Production-MCP) | Build the capstone project: a production-ready enterprise MCP system with security, observability, deployment, and scalability considerations. |

---

# 🗺️ Learning Path

The roadmap gradually moves from MCP fundamentals to production architecture.

```text
MCP Fundamentals
       │
       ▼
┌─────────────────┐
│ 01 Basic Server │
└────────┬────────┘
         ▼
┌─────────────────┐
│ 02 Calculator   │
└────────┬────────┘
         ▼
┌─────────────────┐
│ 03 Resources    │
└────────┬────────┘
         ▼
┌─────────────────┐
│ 04 Prompts      │
└────────┬────────┘
         ▼
┌─────────────────┐
│ 05 File System  │
└────────┬────────┘
         ▼
   External APIs
         │
         ▼
┌─────────────────┐
│ 06 GitHub       │
│ 07 Weather      │
└────────┬────────┘
         ▼
      Databases
         │
         ▼
┌─────────────────┐
│ 08 MongoDB      │
│ 09 PostgreSQL   │
└────────┬────────┘
         ▼
    Integration
         │
         ▼
┌─────────────────┐
│ 10 REST API     │
│ 11 Docker       │
└────────┬────────┘
         ▼
    Orchestration
         │
         ▼
┌─────────────────┐
│ 12 Multi-MCP    │
│ 13 Agent        │
└────────┬────────┘
         ▼
   Production
         │
         ▼
┌────────────────────────┐
│ 14 Production MCP      │
└────────────────────────┘
```

---

# 🎯 Learning Objectives

By completing this roadmap, you will learn how to:

* Understand the architecture of MCP
* Work with MCP clients and servers
* Understand JSON-RPC communication
* Create and register MCP tools
* Define tool input schemas
* Validate tool inputs
* Expose resources to AI applications
* Create reusable MCP prompts
* Interact with local files through MCP
* Integrate third-party APIs
* Build GitHub-powered MCP tools
* Connect MCP servers to MongoDB
* Connect MCP servers to PostgreSQL
* Integrate existing REST APIs
* Containerize MCP servers with Docker
* Run multiple MCP servers
* Build AI agents using MCP tools
* Design production-ready MCP architectures
* Implement security and access control
* Add logging and observability
* Deploy MCP servers to production

---

# 🛠️ Technologies Used

The roadmap primarily uses:

* **Node.js**
* **TypeScript**
* **MCP SDK**
* **JSON-RPC**
* **Express.js / Fastify**
* **MongoDB**
* **PostgreSQL**
* **GitHub API**
* **REST APIs**
* **Docker**
* **Docker Compose**
* **AI / LLM APIs**

Additional technologies may be introduced as required by individual stages.

---

# 📁 Repository Structure

The repository follows a stage-based structure:

```text
MCP-Roadmap/
│
├── 01-Basic-Server/
│   ├── src/
│   ├── package.json
│   └── README.md
│
├── 02-Calculator/
│   ├── src/
│   ├── package.json
│   └── README.md
│
├── 03-Resources/
│   └── ...
│
├── 04-Prompts/
│   └── ...
│
├── 05-File-System/
│   └── ...
│
├── 06-GitHub/
│   └── ...
│
├── 07-Weather/
│   └── ...
│
├── 08-MongoDB/
│   └── ...
│
├── 09-PostgreSQL/
│   └── ...
│
├── 10-REST-API/
│   └── ...
│
├── 11-Docker/
│   └── ...
│
├── 12-Multi-MCP/
│   └── ...
│
├── 13-Agent/
│   └── ...
│
├── 14-Production-MCP/
│   └── ...
│
└── README.md
```

Each stage contains its own source code and documentation so that it can be studied and executed independently.

---

# ⚙️ Prerequisites

Before starting the roadmap, it is recommended to have a basic understanding of:

### Programming

* JavaScript
* TypeScript
* Node.js
* Async/await
* REST APIs
* JSON

### Backend Development

Basic knowledge of:

* HTTP
* APIs
* Authentication
* Databases
* Environment variables

### Development Tools

You should have the following installed:

```bash
node --version
npm --version
git --version
```

For later stages:

```bash
docker --version
docker compose version
```

---

# 🚀 Getting Started

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Navigate into the repository:

```bash
cd MCP-Roadmap
```

Start with Stage 01:

```bash
cd 01-Basic-Server
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

> Each stage may have different setup and execution instructions. Check the `README.md` inside the individual stage before running it.

---

# 🧩 MCP Concepts Covered

Throughout the roadmap, you will work with the major building blocks of MCP.

## 🔧 Tools

Tools allow AI applications to perform actions through an MCP server.

Examples:

```text
calculate()
create_github_issue()
get_weather()
query_database()
read_file()
```

---

## 📦 Resources

Resources provide AI applications with access to information.

Examples include:

```text
Files
Database records
Configuration
Documentation
Application data
```

---

## 💬 Prompts

Prompts provide reusable templates that help structure interactions with AI models.

For example:

```text
Code Review Prompt
Database Analysis Prompt
Documentation Prompt
Debugging Prompt
```

---

## 🤖 Agents

Later stages combine MCP tools with AI reasoning to create agents capable of:

```text
User Request
     │
     ▼
AI Agent
     │
     ├── Search
     ├── Database
     ├── GitHub
     ├── File System
     └── Code Review
          │
          ▼
       Result
```

---

# 🔐 Security

Security becomes increasingly important as the roadmap progresses.

The production stage covers concepts such as:

* Authentication
* Authorization
* API key management
* Environment variables
* Input validation
* Permission control
* Rate limiting
* Secure database access
* Secrets management
* Tool access restrictions

Never commit secrets such as API keys, passwords, database credentials, or tokens.

Use environment variables:

```env
API_KEY=your_api_key
DATABASE_URL=your_database_url
GITHUB_TOKEN=your_github_token
```

And add your environment files to `.gitignore`:

```gitignore
.env
.env.*
node_modules/
dist/
```

---

# 🐳 Docker

Docker is introduced in Stage 11 to demonstrate how MCP servers can be packaged and deployed consistently.

A typical architecture may look like:

```text
              AI Client
                  │
                  ▼
             MCP Server
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
     MongoDB             PostgreSQL
```

With Docker Compose:

```text
┌──────────────────────────────┐
│       Docker Compose         │
│                              │
│  ┌────────────┐              │
│  │ MCP Server │              │
│  └─────┬──────┘              │
│        │                     │
│  ┌─────┴──────┐              │
│  │  Database  │              │
│  └────────────┘              │
└──────────────────────────────┘
```

---

# 📈 Roadmap Progress

Track your progress as you complete each stage:

* [ ] 01 — Basic Server
* [ ] 02 — Calculator
* [ ] 03 — Resources
* [ ] 04 — Prompts
* [ ] 05 — File System
* [ ] 06 — GitHub
* [ ] 07 — Weather
* [ ] 08 — MongoDB
* [ ] 09 — PostgreSQL
* [ ] 10 — REST API
* [ ] 11 — Docker
* [ ] 12 — Multi-MCP
* [ ] 13 — Agent
* [ ] 14 — Production MCP

---

# 🧠 Learning Philosophy

This roadmap follows three principles:

### 1. Learn by Building

Instead of only reading MCP documentation, every concept is implemented in code.

### 2. Increase Complexity Gradually

Each stage builds on knowledge from previous stages.

```text
Simple
  ↓
Tools
  ↓
Resources
  ↓
APIs
  ↓
Databases
  ↓
Docker
  ↓
Multiple Servers
  ↓
Agents
  ↓
Production
```

### 3. Understand the Architecture

The goal is not simply to copy MCP examples.

The goal is to understand **why MCP exists, how MCP communication works, how servers expose capabilities, and how MCP can be integrated into real-world systems.**

---

# 🏆 Final Goal

After completing all 14 stages, you should be able to design and build MCP-based systems rather than simply consume existing MCP servers.

The final project brings together the concepts learned throughout the roadmap:

```text
                    ┌─────────────────┐
                    │    AI Client    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   MCP Gateway   │
                    └────────┬────────┘
                             │
             ┌───────────────┼───────────────┐
             │               │               │
             ▼               ▼               ▼
      ┌────────────┐  ┌────────────┐  ┌────────────┐
      │ MCP Server │  │ MCP Server │  │ MCP Server │
      │  GitHub    │  │  Database  │  │  APIs      │
      └─────┬──────┘  └─────┬──────┘  └─────┬──────┘
            │               │               │
            ▼               ▼               ▼
         GitHub          Databases       Services
```

The objective is to move from:

> **"I know what MCP is."**

to:

> **"I can design, build, integrate, secure, containerise, and deploy MCP systems."**

---

# ⭐ Contributing

Contributions, improvements, and corrections are welcome.

If you find an issue:

1. Open an issue.
2. Explain the problem.
3. Provide reproduction steps when possible.
4. Submit a pull request if you have a fix.

Ideas for additional MCP examples are also welcome.

---

# 📜 License

This project is intended for **educational and learning purposes**.

Add your preferred open-source license here, for example:

```text
MIT License
```

---
