# Model Context Protocol (MCP) Roadmap

Welcome to the **MCP Roadmap**! This repository is a comprehensive, hands-on guide to mastering the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) by building a series of increasingly complex servers. 

Rather than just reading documentation, this roadmap takes a practical approach: you will learn by **building everything yourself**.

## 🚀 The Curriculum

This repository is split into 14 progressive stages. Each stage is a self-contained Node.js/TypeScript project designed to teach you a specific aspect of the MCP ecosystem.

| Stage | Topic | Description |
|---|---|---|
| **01** | [Basic Server](./01-Basic-Server) | Understand the architecture, JSON-RPC, and basic tool registration. |
| **02** | [Calculator](./02-Calculator) | Implement functional math tools, input schemas, and tool execution. |
| **03** | [Resources](./03-Resources) | Learn how to expose read-only files and data to the AI. |
| **04** | [Prompts](./04-Prompts) | Create reusable prompt templates that the AI can trigger. |
| **05** | [File System](./05-File-System) | Build an MCP server that interacts with the local file system (`readFile`, `writeFile`). |
| **06** | [GitHub](./06-GitHub) | Wrap the GitHub API into MCP tools (create issues, list branches, read repos). |
| **07** | [Weather](./07-Weather) | Consume a public REST API to provide weather forecasts to the AI. |
| **08** | [MongoDB](./08-MongoDB) | Create an AI database assistant connected to a NoSQL database. |
| **09** | [PostgreSQL](./09-PostgreSQL) | Create an AI SQL assistant connected to a relational database. |
| **10** | [REST API](./10-REST-API) | Learn how to wrap a standard Express/Fastify REST API into an MCP Server. |
| **11** | [Docker](./11-Docker) | Deploy and containerize your MCP servers using Docker. |
| **12** | [Multi-MCP](./12-Multi-MCP) | Run multiple servers simultaneously and let the AI orchestrate them. |
| **13** | [Agent](./13-Agent) | Build a multi-tool AI Agent MCP (Search, Summarize, Code Review). |
| **14** | [Production MCP](./14-Production-MCP) | The capstone: Build a full production-ready enterprise MCP system. |

## 🛠️ Technologies Used

As you progress through this roadmap, you will gain hands-on experience with:

- **Core**: TypeScript, Node.js, `@modelcontextprotocol/sdk`
- **APIs**: Express, Fastify, Axios
- **Storage**: PostgreSQL, MongoDB
- **DevOps**: Docker, GitHub Actions
- **Auth**: OAuth, API Keys

## 🎯 Getting Started

To get started, navigate to the first folder and read its `README.md`:

```bash
cd 01-Basic-Server
npm install
npm run build
npm start
```

Connect your AI client (such as Claude Desktop or Cursor) to the compiled `index.js` file to start testing your tools!

---

*This roadmap is designed to take you from an MCP beginner to building production-ready AI integrations.*
