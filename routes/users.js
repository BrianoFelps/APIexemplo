// Definir rotas
import express from 'express';
import { getUsers } from '../controllers/UserControler.js';

const router = express.Router();

// Requisição feita ao tentar acessar a rota
// router.get("/", () => {console.log("Rota de usuários acionada.")});
router.get("/", getUsers);
// Rota dentro da /users
router.get("/teste", () => {
    console.log("teste adicionado")
})

export default router;

// o nodemon do terminal restarta o index para cada alteração do arquivo