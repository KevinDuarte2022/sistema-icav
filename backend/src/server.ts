import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then(() => {
        console.log("Banco conectado com sucesso");
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000')
        })
    })

    .catch((error) => {
        console.error(`Erro ao conectar com o banco:`, error)
    });