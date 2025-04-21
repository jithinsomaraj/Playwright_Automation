/* eslint-disable no-console */
// runCucumberTests.ts

import { spawn } from 'child_process';

// Define the list of commands to run
const COMMANDS = ['npm run integration1', 'npm run integration2', 'npm run integration3'];

// Function to run commands sequentially
function runCommandsSequentially(commands: string[]) {
  if (commands.length === 0) {
    console.log('All commands executed successfully.');
    return;
  }

  const command = commands.shift();
  if (command) {
    console.log(`Running command: ${command}`);

    // Execute the command using child process
    const child = spawn(command, { shell: true });

    // Listen for output
    child.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    child.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    // Handle process exit
    child.on('close', (code) => {
      if (code === 0) {
        console.log('Command executed successfully.');
      } else {
        console.error(`Command failed with code ${code}.`);
      }

      // Run the next command recursively after a short delay
      setTimeout(() => runCommandsSequentially(commands), 1000);
    });
  }
}

// Run commands sequentially
runCommandsSequentially(COMMANDS);
