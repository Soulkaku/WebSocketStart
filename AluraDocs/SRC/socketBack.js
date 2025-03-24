import io from "./server.js";

io.on("connection", (socket) => {
    socket.on("selecionar_documento", (nomeDocumento) => {
       socket.join(nomeDocumento);
       console.log(`Client ${socket.id} logged in ${nomeDocumento}`);
    });

    socket.on("campo_texto", ({ texto, nomeDocumento }) => {
        console.log(texto);
        //socket.broadcast.emit("campo_texto", texto); //send to all clients
        socket.to(nomeDocumento).emit("campo_texto", texto);
    });



    socket.on("disconnect", (motivo) => {
        console.log(`O cliente ${socket.id} se desconectou, 
            motivo: ${ motivo }`);
    });
});

