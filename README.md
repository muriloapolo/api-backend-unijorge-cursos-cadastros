##
Este modelo de README foi adaptado para atender as solicitações da materia DESENVOLVIMENTO BACKEND 1 - Inspirado em diversos README lidos para exemplo.

# API Type Express Node Definitiva

Este projeto é uma API criada com Express, TypeScript e Node.js.

## Pré-requisitos

- Node.js (v18+ recomendado)
- npm

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/muriloapolo/api-type-express-node-definitiva.git
   cd api-type-express-node-definitiva
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

## Scripts

- **Desenvolvimento:**  
  Inicia o servidor com reload do nodemon que atualiza a cada modificação:


  ```sh
  npm run dev
  ```

- **Produção:**  
  Compila o TypeScript e inicia o servidor:
    Não indico pois não aprendi isso aqui ainda.

  ```sh
  npm run build
  npm start
  ```

## Endpoints

- `GET /`  
  Retorna a lista de cursos.

- `GET /cadastros`  
  Retorna os cadastros realizados.

- `POST /dados`  
  Cadastra um novo usuário.  
  **Body JSON:**  
  ```json
  {
    "nome": "Seu Nome",
    "email": "seu@email.com",
    "curso": "Nome do Curso"
  }
  ```

## CORS

Este complemento aqui, abençoado me deu muita dor de cabeça, mas depois de ler inúmeros artigos ele já está configurado para aceitar requisições de outros domínios (CORS).

## Variáveis de Ambiente

Temos um arquivo `.env` na raiz do projeto para definir variáveis como a porta, não sei exatamente como funciona, mas a maioria dos cursos recomendava criar.

```
PORT=3000
```

## Observações

- Não faça commit da pasta `node_modules`.
- Não consegui fazer essa api ficar online por conta dessa pasta aí do node. 
- Para dúvidas ou sugestões, abra uma issue.

---