import mongoose, { mongo } from "mongoose";

const documentoSchema = new mongoose.Schema({
    nome: { type: string, required: true},
    texto: { type: string}
}, { versionKey: false });

const documento = mongoose.model("documentos", documentoSchema);

export default documento;