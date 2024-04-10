// Define a config necessaria para a comunicação com o BD
import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: "localhost",
    // Porta padrão MySQL
    port: 3306,
    user: "root",
    password: 'admin',
    database: "db_exemplo" 
});

// Verificação de erro
db.connect((err) => {
    if(err){
        console.log(`Erro de conexão ao BD: ${err}`);
        return;
    }

    console.log(`Conexão bem-sucedida ao BD`)
});

