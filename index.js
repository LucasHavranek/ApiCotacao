const express = require ('express')
const app = express()
const porta = 3000
const fetch = require ('cross-fetch')
const conexao = require ('./banco/conexao')

app.get('/', (requisicao, resposta) => {
    resposta.send('Você esta realizando um GET')
})

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
    .then(function(respostaDoServidor) { return respostaDoServidor.json()})
    .then(function(respostaConvertida) { console.log(respostaConvertida.USDBRL.bid)})

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("Conectado ao banco de dados")
    }
})

app.listen(porta, () => {
    console.log("API em execução na porta 3000")
})


