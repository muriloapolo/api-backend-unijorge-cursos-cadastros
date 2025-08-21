import { Router } from "express";
const routes = Router();

//Rota GET

routes.get("/", (req, res)=>{
       try {
        // Simula processamento (remova se não precisar)
        // await new Promise(resolve => setTimeout(resolve, 100)); 

        return res.send('Bem vindo à nossa rota Get');
    } catch (error) {
        return res.status(500).json({ error: "Erro ao processar a requisição." });
    }
})

//Rota POST

routes.post("/dados", (req, res)=>{
const { nome, email } = req.body;
if(!nome || !email){
    return res.status(400).json({error: "Nome e email são obrigatórios"})
}
// Verifica se o email é válido (regex simples)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Email inválido." });
    }

    // Se tudo ok, retorna sucesso
    return res.status(200).json({ message: "Dados recebidos com sucesso!", nome, email });

    
    
});


export default routes;