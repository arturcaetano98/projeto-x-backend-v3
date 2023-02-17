// Arquivo que realiza a conexão com banco de dados
import mongoose from "mongoose"

// Define a string de conexão
// Definido para funcionar com meu IP
mongoose.connect("mongodb+srv://artur123:teste123@projeto-x-cluster.png4y8y.mongodb.net/projeto-x");

// Contém a conexão
let db = mongoose.connection;

// Exportando a conexão
export default db;