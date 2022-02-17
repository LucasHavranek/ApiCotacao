const mysql2 = require ('mysql2')

const conexao = mysql2.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123Mudar',
    database: 'APICOTACAO',
})

module.exports = conexao