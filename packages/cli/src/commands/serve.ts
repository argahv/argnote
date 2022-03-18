import path from "path";
import { Command } from "commander";
import { serve } from "@argnote/local-api";

/**
 *
 * [] ----> optional value
 * < > ----> required value
 *
 */

// process.env.NODE_ENV will be removed to 'production' during publish resulting in 'production'==='production' which will always be true

const isProduction = process.env.NODE_ENV === "production";

export const serveCommand = new Command()
  // [filename] optional value will be provided
  .command("serve [filename]")
  .description("Open a file for editing")
  .option("-p,--port <number>", "port to run server on", "4005")
  .action(async (filename = "notebook.js", options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));

      await serve(+options.port, path.basename(filename), dir, !isProduction);

      console.log(`Opened ${filename}. Navigate to http://localhost:${options.port} to edit the file.
      `);
    } catch (error: any) {
      // TODO: know all the errors
      if (error.code === "EADDRINUSE") {
        console.error("Port in use. Try running on a different port.");
      } else {
        console.log("Here's the problem", error.message);
      }
      process.exit(1);
    }
  });
