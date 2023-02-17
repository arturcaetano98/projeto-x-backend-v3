import express from "express";
import SeguradoController from "../controllers/seguradosController.js";
import MiddlewareToken from "../middleware/middlewareToken.js";

const router = express.Router();

router
    .get("/segurados", MiddlewareToken, SeguradoController.listarSegurados)
    .get("/segurados/:n_cotacao", MiddlewareToken, SeguradoController.listarSeguradoPorCotacao)
    .get("/segurados/cpf/:cpf_segurado", MiddlewareToken,SeguradoController.listarSeguradoPorCPF)
    .post("/segurados", MiddlewareToken, SeguradoController.cadastrarSegurado)
    .put("/segurados/:n_cotacao", MiddlewareToken, SeguradoController.alterarSegurado);

export default router;