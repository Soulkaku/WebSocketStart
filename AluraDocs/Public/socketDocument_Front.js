import { updateText } from "./documentScript.js";

const socket = io();

function emitTextToClient(texto) {
    socket.emit("campo_texto", texto);
}

socket.on("campo_texto", (texto) => {
    updateText(texto)
});

socket.on("disconnect", (motivo) => {
    console.log(`desconectado do servidor,
        motivo: ${ motivo }`);
});

export {emitTextToClient };