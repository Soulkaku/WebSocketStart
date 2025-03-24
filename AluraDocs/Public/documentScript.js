import { emitTextToClient } from "./socketDocument_Front.js";

const socket = io();

const campoTexto = document.getElementById("editor-texto");

campoTexto.addEventListener("keyup", () => { //indentificar ao soltar uma tecla durante a digitação;
    emitTextToClient(campoTexto.value); //começar um evento
});

function updateText(texto) {
    campoTexto.value = texto;
}

export { updateText };