const socket = io();

const campoTexto = document.getElementById("editor-texto");

campoTexto.addEventListener("keyup", () => { //indentificar ao soltar uma tecla durante a digitação;
    socket.emit("campo_texto", campoTexto.value); //começar um evento
});
