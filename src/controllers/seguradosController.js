import segurados from "../models/Segurado.js";

class SeguradoController {

    static listarSegurados = (req, res) => {

        segurados.find((err, segurados) => {
            res.status(200).json(segurados);
    })
    }

    static listarSeguradoPorCotacao = (req, res) => {

        const numero_cotacao = req.params.n_cotacao;

        segurados.find({"n_cotacao": numero_cotacao}, {}, (err, segurados) => {
            if(err){
                res.status(400).send({message: `${err.message} - Falha ao encontrar segurado`})
            } else{
                res.status(200).send(segurados);
            }
        });
    }

    static listarSeguradoPorCPF = (req, res) => {

        const CPF = req.params.cpf_segurado;

        segurados.find({"cpf_segurado": CPF}, {}, (err, segurados) => {
            if(err){
                res.status(400).send({message: `${err.message} - Falha ao encontrar segurado`})
            } else{
                res.status(200).send(segurados);
            }
        });
    }

    static cadastrarSegurado = (req, res) => {

        let segurado = new segurados(req.body);

        segurado.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar segurado`})
            }
            else{
                res.status(201).send(segurado.toJSON());
            }
        })
    }

    static alterarSegurado = (req, res) => {

        const numero_cotacao = req.params.n_cotacao;
        const body = req.body;

        segurados.findOneAndUpdate({"n_cotacao": numero_cotacao}, body, (err) => {
            if(!err){
                res.status(200).send({message: "Segurado atualizado com sucesso"});
            } else{
                res.status(500).send({menssage: err.message})
            }
        })
    }
}

export default SeguradoController;



