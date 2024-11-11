import express, { Express, Request, Response } from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app: Express = express();
const PORT: number = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Application running on port: ${PORT}`);
});
