const conexao = require ('./conexao')

class Tabelas {
    init (conexao){
        this.conexao = conexao
        this.criarTabela()
    }
    criarTabela() {
        const sql = 'CREATE TABLE IF NOT EXISTS REGISTROS (id INT NOT NULL AUTO_INCREMENT, valor DECIMAL(5,2) NOT NULL, data DATETIME, tipo VARCHAR(15) NOT NULL, PRIMARY KEY(id))'
        this.conexao.query (sql, erro => {
            if (erro) {
                console.log(erro + "Não foi possível criar a tabela")
            } else {
                console.log("Tabela criada com sucesso")
            }
        })
    }
}

module.exports = new Tabelas
 