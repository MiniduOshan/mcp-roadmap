import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  {
    name: "05-file-system",
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

// TODO: Implement specific logic for 05-File-System

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("05-file-system running on stdio");
}

run().catch(console.error);
