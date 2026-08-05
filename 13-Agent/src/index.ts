import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  {
    name: "13-agent",
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

// TODO: Implement specific logic for 13-Agent

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("13-agent running on stdio");
}

run().catch(console.error);
