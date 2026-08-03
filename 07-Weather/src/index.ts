import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  {
    name: "07-weather",
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

// TODO: Implement specific logic for 07-Weather

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("07-weather running on stdio");
}

run().catch(console.error);
