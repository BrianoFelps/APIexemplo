import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json());
// Cors permite fazer requisições do frontend a meu proprio server (localhost), evitando problemas.
app.use(cors());

// Definindo rotas para o servidor, aqui se cria a rota chamada "/users"
app.use("/users", userRoutes);

// portas da url
// process.env vai ser criado, para configurar o projeto com constantes "||" expressa que
// a porta seria 8080
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
