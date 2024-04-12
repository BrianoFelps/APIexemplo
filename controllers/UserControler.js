// As chaves servem a importar a constante do arquivo
import { db } from '../database/db.js';

// O underline é o endpoint, esperando informação, sem necessidade do corpo,
// aqui a requisição não precisa de processamento, por isso é omitida
export const getUsers = (_, res) => {
    const sql = "select * from usuario";

    db.query(sql, (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            // Status code, retorna uma coisa se der erro padronizando (tipo erro 404 do google)
            return res.status(500).json(err);
        } else {
            console.log(`Dados dos usuários obtidos adequadamente!`);
            return res.status(200).json(data);
            // 500 expressa erro, 200 sucesso.
        }
    });
}
// Recebe requisição, retorna resposta (req e res),
// na requisição, se processa o nome do usuário, por isso aqui é emitido
export const addUser = (req, res) => {
    const sql = "insert into usuario (nome) values (?)";

    const {nome} = req.body;

    // Nome a partir daqui vai ser transferido ao "?"
    db.query(sql, [nome], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            // Status code, retorna uma coisa se der erro padronizando (tipo erro 404 do google)
            return res.status(500).json(err);
        } else {
            console.log(`Usuário cadastrado adequadamente!`);
            return res.status(200).json(data);
            // 500 expressa erro, 200 sucesso.
        }
    });
}

export const updateUser = (req, res) => {
    const sql = "update usuario set nome = ? where id = ?";

    const {id, nome} = req.body;

    // Nome a partir daqui vai ser transferido ao "?"
    db.query(sql, [nome, id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            // Status code, retorna uma coisa se der erro padronizando (tipo erro 404 do google)
            return res.status(500).json(err);
        } else {
            console.log(`Usuário atualizado adequadamente!`);
            return res.status(200).json(data);
            // 500 expressa erro, 200 sucesso.
        }
    });
}

export const deleteUser = (req, res) => {
    const sql = "delete from usuario where id = ?";

    const {id} = req.body;

    // Nome a partir daqui vai ser transferido ao "?"
    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição!")
            // Status code, retorna uma coisa se der erro padronizando (tipo erro 404 do google)
            return res.status(500).json(err);
        } else {
            console.log(`Usuário removido adequadamente!`);
            return res.status(200).json(data);
            // 500 expressa erro, 200 sucesso.
        }
    });
}