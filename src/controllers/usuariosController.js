import usuarios from "../models/Usuario.js";


class UsuarioController {

    static listarUsuarios = (req, res) => {
        usuarios.find((err, usuarios) => {
            res.status(200).json(usuarios);
    });
    }

    static listarUsuarioPorUsername = (req, res) => {

        // const username = req.params.username;
        // console.log(req.decoded);
        const username = req.decoded.user;

        usuarios.find({"username": username}, {}, (err, usuarios) => {
            if(err){
                res.status(400).send({message: `${err.message} - Falha ao encontrar usuario`})
            } 
            else{
                res.status(200).send(usuarios);
            }
        });
    }
}

export default UsuarioController;