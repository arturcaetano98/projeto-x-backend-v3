import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const AI = AutoIncrement(mongoose);

const seguradoSchema = new mongoose.Schema(
    {
        id_usuario: {type: Number, required: true},
        nome_segurado: {type: String, required: true},
        cpf_segurado: {type: Number, required: true},
        inicio_vigencia: {type: String, required: true},
        termino_vigencia: {type: String, required: true},
        valor_risco: {type: Number, required: true},
        tipo_cobertura: {type: String, required: true},
        valor_seguro: {type: Number, required: true},
        proposta_efetivada: {type: Boolean, required: true}
    },
    {
        versionKey: false
    }
);

// Adiciona o "n_cotacao"
seguradoSchema.plugin(AI, {inc_field: "n_cotacao"});

const segurados = mongoose.model("segurados", seguradoSchema);

export default segurados;