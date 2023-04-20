//arquivo com as configurações do banco de dados
//1ª: trazer o moongose para dentro do projeto

const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() { 
    //palavra reservada async: se refere ao js assíncrono
    try { 
        console.log('Conexão com o banco de dados iniciou')
    
        await mongoose.connect(process.env.MONGO_URL)
        //await: não deixa o node parar as outras funções
        console.log('Conexão com o banco de dados feita com sucesso!')
        
    } catch(erro) {
        console.log(erro)
    }
    //toda vez que nosso código se conecta com um serviço externo, as chances de erro aumentam. Algumas palavras reservadas ajudam a reduzir o risco. Neste caso, usa-se try e catch

}

module.exports = conectaBancoDeDados