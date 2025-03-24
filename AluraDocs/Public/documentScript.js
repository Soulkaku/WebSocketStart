import { selectDocument, emitTextToClient } from "./socketDocument_Front.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const campoTexto = document.getElementById("editor-texto");
const tituloTexto = document.getElementById("titulo-documento");

tituloTexto.textContent = nomeDocumento || "Documento sem título";

selectDocument(nomeDocumento);

campoTexto.addEventListener("keyup", () => {
    emitTextToClient({
        texto: campoTexto.value, 
        nomeDocumento
    });
});

function updateText(texto) {
    campoTexto.value = texto;
    
};

export { updateText };