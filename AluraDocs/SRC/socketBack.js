import io from "./server.js";

const documentos = [
    {
        nome: "JavaScript",
         texto: "Texto de javascript: "
    },
    {
        nome: "Node",
         texto: "Texto de Node"
    },
    {
        nome: "Socket.io",
         texto: "Texto de socket.io"
    }
];

io.on("connection", (socket) => {
    socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
        console.log(`O cliente (${socket.id}) se conectou em ${nomeDocumento}`);
        socket.join(nomeDocumento);

        const documento = encontrarDocumento(nomeDocumento);

        if(documento) {
            devolverTexto(documento.texto);
        }
    });

    socket.on("campo_texto", ({ texto, nomeDocumento }) => {
        const documento = encontrarDocumento(nomeDocumento);

        if(documento) {
            documento.texto = texto;

            socket.to(nomeDocumento).emit("campo_texto", texto);
        }
    });
});

function encontrarDocumento(nome) {
    const documento = documentos.find((documento) => {
        return documento.nome === nome;
    });
    return documento;
}
