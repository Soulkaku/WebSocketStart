const socket = io();

const campoTexto = document.getElementById("editor-texto");

campoTexto.addEventListener("keyup", () => { //indentificar ao soltar uma tecla durante a digitação;
    socket.emit("campo_texto", campoTexto.value); //começar um evento
});

socket.on("campo_textoClients", (texto) => {
    //console.log(texto);
    campoTexto.value = texto;
});