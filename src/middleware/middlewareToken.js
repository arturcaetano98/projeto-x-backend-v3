import jwt from "jsonwebtoken";

const MiddlewareToken = (req, res, next) => {

    const token = req.headers["x-access-token"];

    if (token) {
        jwt.verify(token, "minhaChave", (err, decoded) => {
            if (err) {
                console.log(err);
                res.status(403).send({
                    success: false,
                    message: "Falha ao autenticar token"
                });
            } 
            else {
                req.decoded = decoded;
                next();
            }
        });
    } 
    else {
        res.status(403).send({
            success: false,
            message: 'Não'
        });
    }
};

export default MiddlewareToken;