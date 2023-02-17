import jwt from "jsonwebtoken";

import usuarios from "../models/Usuario.js";

class LoginController {

    static logar = async (req, res) => {

        let {usuario, senha} = req.body;
        
        const token = jwt.sign({
            user: usuario,
            password: senha
        }, "minhaChave");

        let user = await usuarios.findOne({ "username": usuario });
        if(user){
            res.status(200).send({ sucesso: true, token: token, usuarioLogado: (user.senha == senha ? user.username : null), id: user.id, nome: user.nome });
        }
        else{
            res.status(200).send({ sucesso: false, token: null, usuarioLogado: null, id: null, nome: null });
        }
    }
}

export default LoginController;