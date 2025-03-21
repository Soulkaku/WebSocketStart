import express from "express";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import http from "http";

import path from "path";

const app = express();
const HTTPserver = http.createServer(app);
    const io = new Server(HTTPserver);
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
    
    app.use(express.static(path.join(__dirname, '../Public')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../Public', 'index.html'));
    });

HTTPserver.listen(PORT, () => {
    console.log("Listen!");
});

io.on("connection", () => {
    console.log("Client connected")
});