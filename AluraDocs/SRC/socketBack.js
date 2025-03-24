import io from "./server.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "texto de javascript..."
    },
    {
        nome: "Node",
        texto: "texto de node..."
    },
    {
        nome: "Socket.io",
        texto: "texto de socket.io..."
    }
];


io.on("connection", (socket) => {

    socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento);

        const documento = encontrarDocumento(nomeDocumento); 

       console.log(`Client ${socket.id} logged in ${nomeDocumento}`);
       
       if (documento) {
        devolverTexto(documento.texto);
    }
        socket.emit("texto_documento", documento.texto);

    });

    socket.on("campo_texto", ({ texto, nomeDocumento }) => {

            console.log(texto);
        const documento = encontrarDocumento(nomeDocumento);

        if (documento) {
            devolverTexto(documento.texto);
            documento.texto = texto;
            socket.to(nomeDocumento).emit("campo_texto", texto);
            //socket.broadcast.emit("campo_texto", texto); //send to all clients
        }    

    });

    socket.on("disconnect", (motivo) => {
        console.log(`O cliente ${socket.id} se desconectou, 
            motivo: ${ motivo }`);
    });


    function encontrarDocumento(nome) {
        const documento = documentos.find((documento) => {
            return documento.nome === nome;
        });
        return documento;
    }
});

