# MCP Node Server

A Model Context Protocol (MCP) server built with Node.js, Express, and TypeScript.

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Server

Start the server:

```bash
npx -y tsx main.ts
```


The server will start on `http://localhost:3000/mcp` by default. You can change the port by setting the `PORT` environment variable:

```bash
PORT=8080 npx tsx main.ts
```

## API Endpoint

- **POST** `/mcp` - MCP server endpoint

