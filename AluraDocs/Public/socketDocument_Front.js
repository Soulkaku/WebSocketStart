import { updateText } from "./documentScript.js";

const socket = io();

function selectDocument(nome) {
    socket.emit("selecionar_documento", nome);
}

function emitTextToClient(dados) {
    socket.emit("campo_texto", dados);
}

socket.on("campo_texto", (texto) => {
    console.log(`texto recebido: ${texto}`)
    updateText(texto);
});

socket.on("disconnect", (motivo) => {
    console.log(`desconectado do servidor,
        motivo: ${ motivo }`);
});

export {emitTextToClient, selectDocument };