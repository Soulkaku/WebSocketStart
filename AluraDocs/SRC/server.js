import express from "express";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import http from "http";
import path from "path";
import "dotenv/config";
import connectToDataBase from "./config/dbconnect.js";

const app = express();
const HTTPserver = http.createServer(app);
    const io = new Server(HTTPserver);
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
    app.use(express.static(path.join(__dirname, '../Public')));



async function connectToServer() {
    connectToDataBase().then((connected) => {
        console.log("CONEXÃO COM O BANCO DE DADOS E SERVER FEITAS COM ÊXITO!");

        HTTPserver.listen(PORT, () => {
            console.log("Listen!", PORT);
        });
        }).catch((erro) => {
            console.error("ERRO AO CONECTAR AO BANCO DE DADOS: ", erro);
    });
}
connectToServer();

export default io;