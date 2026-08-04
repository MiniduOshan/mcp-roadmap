import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  {
    name: "09-postgresql",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
      resources: {},
      prompts: {}
    },
  }
);

// TODO: Implement specific logic for 09-PostgreSQL

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("09-postgresql running on stdio");
}

run().catch(console.error);
