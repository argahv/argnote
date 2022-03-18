import express, { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";

interface Cell {
  id: string;
  content: string;
  type: "text" | "code";
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router.get("/cells", async (req: Request, res: Response) => {
    try {
      // Read the file
      const result = await fs.readFile(fullPath, { encoding: "utf-8" });
      res.send(JSON.parse(result));
    } catch (error: any) {
      // inspect the error, see if it says file does'nt exist
      // error no entity

      if (error.code === "ENOENT") {
        // Add code to create a file and add default cells

        await fs.writeFile(fullPath, "[]", "utf-8");

        res.send([]);
      } else {
        throw error;
      }
    }

    // if read throws an error

    // Parse  alist of cells out of it
    // send list of cells back to browser
  });

  router.post("/cells", async (req: Request, res: Response) => {
    // take the list of cells from requst obj
    // serialize them
    const { cells }: { cells: Cell[] } = req.body;

    // Write the cells into the file
    await fs.writeFile(fullPath, JSON.stringify(cells), "utf-8");
    res.send({ status: "ok " });
  });

  return router;
};
