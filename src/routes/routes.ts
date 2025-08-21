import { Router, type Request, type Response } from "express";
import cursos from "../data/cursos.ts";
import cadastros from "../data/cadastros.ts";
const routes = Router();

// Rota GET
routes.get("/", async (req: Request, res: Response) => {
    try {
        return res.send(cursos);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao processar a requisição." });
    }
});

//Recuperar Cadastros
//Get Cadastros
routes.get("/cadastros", (req:Request, res:Response) => {    
    //res.json(JSON.stringify(cadastros));
    res.json(cadastros);
});


// Rota POST
routes.post("/dados", (req: Request, res: Response) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ error: "Nome e email são obrigatórios" });
    }
    // Verifica se o email é válido (regex simples)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Email inválido." });
    }

    // Se tudo ok, retorna sucesso
    cadastros.push(req.body); 
    console.log(cadastros)   
    return res.status(200).json({ message: "Dados recebidos com sucesso!", nome, email });
});

export default routes;