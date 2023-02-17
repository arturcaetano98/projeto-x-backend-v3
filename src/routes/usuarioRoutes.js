import express from "express";
import UsuarioController from "../controllers/usuariosController.js";
import MiddlewareToken from "../middleware/middlewareToken.js";

const router = express.Router();

router
    .get("/usuarios", MiddlewareToken,  UsuarioController.listarUsuarios)
    .get("/usuario", MiddlewareToken, UsuarioController.listarUsuarioPorUsername);

export default router;