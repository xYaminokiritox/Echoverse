import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Starting Echoverse application...');

// Start the server
const server = spawn('node', ['src/server.js'], {
  stdio: 'inherit',
  shell: true
});

// Start the frontend
const frontend = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('Shutting down...');
  server.kill();
  frontend.kill();
  process.exit();
});

console.log('Both server and frontend are starting...'); 