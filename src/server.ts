import express, { request, response } from "express";


const app = express();

/** MÉTODOS 
 * GET = Buscas
 * POS = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica (exemplo apenas a senha do cad. usuário)
 */

app.get("/", (request, response) => {
    /**return response.send("Olá NLW 05"); */
    return response.json({
        message: "Olá NLW 05"
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso!"
    });
});

app.listen(3333, () => console.log("Server is running on port 3333"));