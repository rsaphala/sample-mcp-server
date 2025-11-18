import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import express from 'express';
import { z } from 'zod';
import { getOrderByEmailAndId, getOrdersByEmail, getUserRole, getUserStatus } from './userService';
import { Order } from './products';

// Create an MCP server
const server = new McpServer({
    name: 'demo-server',
    version: '1.0.0'
});

// Add an addition tool
server.registerTool(
    'getUserRole',
    {
        title: 'Get User Role',
        description: 'Get the role of a user',
        inputSchema: { email: z.string() },
        outputSchema: { role: z.string() }
    },
    async ({ email }) => {
        const output = { role: getUserRole(email) };
        return {
            content: [{ type: 'text', text: JSON.stringify(output) }],
            structuredContent: output
        };
    }
);

server.registerTool(
    'getUserStatus',
    {
        title: 'Get User Status',
        description: 'Get the status of a user',
        inputSchema: { email: z.string() },
        outputSchema: { status: z.string() }
    },
    async ({ email }) => {
        const output = { status: getUserStatus(email) };
        return {
            content: [{ type: 'text', text: JSON.stringify(output) }],
            structuredContent: output
        };
    }
);

server.registerTool(
    'getOrders',
    {
        title: 'Get Orders',
        description: 'Get the orders of a user',
        inputSchema: { email: z.string() }
    },
    async ({ email }) => {
        const output = { orders: getOrdersByEmail(email) };
        return {
            content: [{ type: 'text', text: JSON.stringify(output) }],
            structuredContent: output
        };
    }
);

server.registerTool(
    'getOrderByEmailAndId',
    {
        title: 'Get Order by Email and ID',
        description: 'Get an order by email and ID',
        inputSchema: { email: z.string(), orderId: z.string() },
        outputSchema: { order: z.object({ number: z.string(), name: z.string(), price: z.number() }) }
    },
    async ({ email, orderId }) => {
        const output = { order: getOrderByEmailAndId(email, orderId) };
        return {
            content: [{ type: 'text', text: JSON.stringify(output) }],
            structuredContent: output
        };
    }
);

// Add a dynamic greeting resource
server.registerResource(
    'greeting',
    new ResourceTemplate('greeting://{name}', { list: undefined }),
    {
        title: 'Greeting Resource', // Display name for UI
        description: 'Dynamic greeting generator'
    },
    async (uri, { name }) => ({
        contents: [
            {
                uri: uri.href,
                text: `Hello, ${name}!`
            }
        ]
    })
);

// Set up Express and HTTP transport
const app = express();
app.use(express.json());

app.post('/mcp', async (req, res) => {
    // Create a new transport for each request to prevent request ID collisions
    const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
        enableJsonResponse: true
    });

    res.on('close', () => {
        transport.close();
    });

    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
});

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
    console.log(`Demo MCP Server running on http://localhost:${port}/mcp`);
}).on('error', error => {
    console.error('Server error:', error);
    process.exit(1);
});
