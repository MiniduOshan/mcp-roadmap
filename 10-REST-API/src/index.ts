import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  {
    name: "10-rest-api",
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

// TODO: Implement specific logic for 10-REST-API

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("10-rest-api running on stdio");
}

run().catch(console.error);
