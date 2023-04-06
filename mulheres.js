const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Simara Conceição",
        imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
        minibio: "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos",
        citação: "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar."
    },

    {
        nome: "Iana Chan",
        imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
        minibio: "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos",
        citação: "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar."
    },

    {
        nome: "Nina da Hora",
        imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
        minibio: "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos",
        citação: "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar."    
    },

    { 
        nome: "Angela Davis",
        imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
        minibio: "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos",
        citação: "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar."
    
    },
]

function mostraMulheres(request, response) {
   response.json(mulheres)

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)