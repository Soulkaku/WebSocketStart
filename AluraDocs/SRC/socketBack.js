import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Client connected from ID: ", socket.id);

    socket.on("campo_texto", (texto) => {
        console.log(texto);
        socket.broadcast.emit("campo_textoClients", texto); //send to all clients except you
    });
});