import cors from "cors";
import errorHandler from "errorhandler";
import express from "express";
import * as http from "http";

import { handleError } from "./middlewares/error.middleware";
import routes from "./routes";

export class Server {
  public express: express.Express;
  readonly port: string;
  httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use("/api", routes);
    this.express.use(handleError);

    if (process.env.NODE_ENV === "development") {
      this.express.use(errorHandler());
    }
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(
          `  Server is running at http://localhost:${
            this.port
          } in ${this.express.get("env")} mode`
        );
        console.log("  Press CTRL-C to stop\n");
        resolve();
      });
    });
  }

  getHTTPServer(): http.Server | undefined {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
      return resolve();
    });
  }
}
