import { Router, type Request, type Response } from "express";
import cursos from "../data/cursos.ts";
import type { Cadastro } from "../types/InterFaceCadastro.ts";
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

    //Verificando informações via interface
    const { nome, email, curso }: Cadastro = req.body; //Cadastro é a interface que parece uma classe sem sal
    if (!nome || !email || !curso) {
       return res.status(400).json({ error: "Nome, email e curso são obrigatórios" });
    }
    // Verifica se o email é válido (regex simples)
    //Simples pq eu copiei da internet, não sei quem entende isso
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
          return res.status(400).json({ error: "Email inválido." });
    }

    // Se tudo ok, retorna sucesso
    cadastros.push({nome, email, curso}); 
    console.log(cadastros)   
   return res.status(201).json({ message: "Cadastro criado com sucesso!", nome, email, curso });
});

export default routes;
