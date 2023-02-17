// npm init -y
// npm install nodemon@2.0.15
// npm install npm install express@4.17.3
// npm install mongoose@6.2.6
// "dev": "nodemon server.js"
// "type": "module"
// gitignore

// Para rodar digite "npm run dev" no cmd
import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});