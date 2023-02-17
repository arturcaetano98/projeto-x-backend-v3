import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        username: {type: String, required: true},
        senha: {type: String, required: true},
        id: {type: Number, required: true}
    },
    {
        versionKey: false
    }
)

const usuarios = mongoose.model("usuarios", usuarioSchema);

export default usuarios;