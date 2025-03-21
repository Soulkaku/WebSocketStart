import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Client connected from ID: ", socket.id);
})