const express = require("express") //aqui inicia o express
const router = express.Router() //aqui é a config. da 1ª parte da rota
const cors = require('cors') //traz o pct cors, que permite consumir essa API no front-end
const conectaBancoDeDados = require('./bancoDeDados') //conecta ao arquivo bancoDeDados
conectaBancoDeDados() //chama a função que conecta o banco de dados
const Mulher = require('./mulherModel')

const app = express() //inicia o app
app.use(express.json()) //a partir de agora, os dados tb estão no formato json
app.use(cors()) //libera a API para ser usada a partir do front-end

const porta = 3333 //cria a porta

//GET > é o único verbo possível testar no navegador
async function mostraMulheres(request, response) {
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulheresVindasDoBancoDeDados) 

    } catch(erro) {
        console.log(erro)
    }
}

//POST > só é possível testar a partir de simulação ou a partir do front
async function criaMulher(request, response) {
    const novaMulher = new Mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao,
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada) //.status() mostra que a resposta foi criada com sucesso
    } catch (erro) {
        console.log(erro)
    }

}

//PATCH > permite correção de informações de dados
async function corrigeMulher(request, response) { //função atrelada ao verbo do HTTP, recebe *sempre* os parâmetros request,response
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
    
        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)

    } catch (erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({messagem: 'Mulher deletada com sucesso!'})

    }catch(erro){
        console.log(erro)
    }
} 

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

//configurações do app
app.use(router.get("/mulheres", mostraMulheres)) // configuração da rota GET /mulheres
app.use(router.post ('/mulheres', criaMulher)) //config rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //config rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //config rota DELETE /mulheres/:id

app.listen(porta, mostraPorta) //servidor ouvindo a porta