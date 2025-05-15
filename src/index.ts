import { PORT } from "./config";
import { Server } from "./server";

async function main() {
  const server = new Server(PORT);
  try {
    await server.listen();
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}

main();
