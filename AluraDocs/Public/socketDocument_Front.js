import { updateText } from "./documentScript.js";

const socket = io();

function selectDocument(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        updateText(texto);
    });
}

function emitTextToClient(dados) {
    socket.emit("campo_texto", dados);
}

//socket.on("texto_documento", (texto) => {
    //console.log(texto);
    //updateText(texto);
//});

socket.on("campo_texto", (texto) => {
    updateText(texto);
});

socket.on("disconnect", (motivo) => {
    console.log(`desconectado do servidor,
        motivo: ${ motivo }`);
});

export {emitTextToClient, selectDocument };