import { updateText } from "./documentScript.js";

const socket = io();

function emitTextToClient(texto) {
    socket.emit("campo_texto", texto);
}

socket.on("campo_textoClients", (texto) => {
    updateText(texto)
});

export {emitTextToClient };