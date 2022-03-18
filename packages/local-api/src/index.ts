import express from "express";
import path from "path";
import { createProxyMiddleware } from "http-proxy-middleware";
import { createCellsRouter } from "./routes/cells";

export const serve = (
  port: number,
  filename: string,
  dir: string,
  useProxy: boolean
) => {
  const app = express();

  app.use(createCellsRouter(filename, dir));

  if (useProxy) {
    app.use(
      createProxyMiddleware({
        target: "http://localhost:3000",
        // enable websocket
        ws: true,
        logLevel: "silent",
      })
    );
  } else {
    const packagePath = require.resolve(
      "@argnote/local-client/build/index.html"
    );
    app.use(express.static(path.dirname(packagePath)));
  }

  // adding async await to the express server
  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on("error", reject);
  });
};
