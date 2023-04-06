const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
// json nada mais é do que uma forma de enviar várias informações organizadas de uma vez, como um objeto
   response.json({
    nome: "Angela Davis",
    imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
    minibio: "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos",
    citação: "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar."
   })

}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)