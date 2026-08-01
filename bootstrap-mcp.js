const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projects = [
  { dir: '02-Calculator', name: '02-calculator', desc: 'Calculator MCP', deps: ['@modelcontextprotocol/sdk'] },
  { dir: '03-Resources', name: '03-resources', desc: 'Resources MCP', deps: ['@modelcontextprotocol/sdk'] },
  { dir: '04-Prompts', name: '04-prompts', desc: 'Prompts MCP', deps: ['@modelcontextprotocol/sdk'] },
  { dir: '05-File-System', name: '05-file-system', desc: 'File System MCP', deps: ['@modelcontextprotocol/sdk'] },
  { dir: '06-GitHub', name: '06-github', desc: 'GitHub MCP', deps: ['@modelcontextprotocol/sdk', 'axios'] },
  { dir: '07-Weather', name: '07-weather', desc: 'Weather MCP', deps: ['@modelcontextprotocol/sdk', 'axios'] },
  { dir: '08-MongoDB', name: '08-mongodb', desc: 'MongoDB MCP', deps: ['@modelcontextprotocol/sdk'] },
  { dir: '09-PostgreSQL', name: '09-postgresql', desc: 'PostgreSQL MCP', deps: ['@modelcontextprotocol/sdk'] },
  { dir: '10-REST-API', name: '10-rest-api', desc: 'REST API MCP', deps: ['@modelcontextprotocol/sdk', 'express'] },
  { dir: '13-Agent', name: '13-agent', desc: 'Agent MCP', deps: ['@modelcontextprotocol/sdk'] },
  { dir: '14-Production-MCP', name: '14-production-mcp', desc: 'Production MCP', deps: ['@modelcontextprotocol/sdk'] }
];

const tsconfig = {
  "compilerOptions": {
    "target": "es2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"]
};

for (const proj of projects) {
  const targetDir = path.join(__dirname, proj.dir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // package.json
  const pkg = {
    name: proj.name,
    version: "1.0.0",
    description: proj.desc,
    type: "module",
    main: "dist/index.js",
    scripts: {
      "build": "tsc",
      "start": "node dist/index.js",
      "dev": "tsc && node dist/index.js"
    },
    dependencies: {},
    devDependencies: {
      "typescript": "^5.0.0",
      "@types/node": "^20.0.0"
    }
  };
  fs.writeFileSync(path.join(targetDir, 'package.json'), JSON.stringify(pkg, null, 2));

  // tsconfig.json
  fs.writeFileSync(path.join(targetDir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));

  // src/index.ts stub
  const srcDir = path.join(targetDir, 'src');
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
  }
  
  const indexTsContent = `import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server(
  {
    name: "${proj.name}",
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

// TODO: Implement specific logic for ${proj.dir}

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("${proj.name} running on stdio");
}

run().catch(console.error);
`;
  fs.writeFileSync(path.join(srcDir, 'index.ts'), indexTsContent);
  
  console.log(`Bootstrapped ${proj.dir}`);
}

console.log("Installing dependencies... This will take a while.");
for (const proj of projects) {
  const targetDir = path.join(__dirname, proj.dir);
  console.log(`Installing deps in ${proj.dir}...`);
  try {
    execSync(`npm install ${proj.deps.join(' ')}`, { cwd: targetDir, stdio: 'inherit' });
    execSync(`npm install`, { cwd: targetDir, stdio: 'inherit' });
  } catch(e) {
    console.error(`Failed to install deps for ${proj.dir}`);
  }
}
console.log("Bootstrap complete!");
