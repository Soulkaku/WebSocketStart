import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
    app.use(express.static(path.join(__dirname, './AluraDocs', 'Public')));

app.listen(PORT, () => {
    console.log("Listen!");
});