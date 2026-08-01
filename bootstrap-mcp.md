# Bootstrap MCP Script

The `bootstrap-mcp.js` script is a utility included in this repository to automate the initial setup of the Model Context Protocol (MCP) roadmap projects. 

Building 14 individual Node.js servers from scratch requires a lot of repetitive boilerplate. This script eliminates that by instantly scaffolding the architecture for every stage.

## What it does

When executed, the script loops through each project stage defined in the roadmap and performs the following actions:

1. **Directory Creation**: Creates the project folder (e.g., `06-GitHub`, `07-Weather`) if it doesn't already exist.
2. **`package.json` Generation**: Generates a standard Node.js `package.json` with predefined build and start scripts (`npm run build`, `npm start`).
3. **`tsconfig.json` Generation**: Generates a strict TypeScript configuration file targeting modern Node environments (`NodeNext`).
4. **Source Code Boilerplate**: Creates a `src/index.ts` file containing the foundational code required to initialize an MCP server and connect it to standard I/O (StdioServerTransport).
5. **Dependency Installation**: Runs `npm install` within every created directory to automatically download `@modelcontextprotocol/sdk`, `typescript`, and any project-specific libraries (like `axios` or `express`).

## Usage

You generally only need to run this script once when setting up the repository from scratch:

```bash
node bootstrap-mcp.js
```

> [!NOTE]
> Once all the project directories are generated and the dependencies are installed, this script is no longer required for the actual MCP servers to function. You can safely ignore or delete it.
