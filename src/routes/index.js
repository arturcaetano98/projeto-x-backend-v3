import express from "express";

import usuario from "./usuarioRoutes.js";
import segurado from "./seguradoRoutes.js";
import login from "./loginRoutes.js";

const routes = (app) => {

    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "projeto-x"});
    })

    app.use(
        express.json(),
        usuario,
        segurado,
        login
    )

}

export default routes;