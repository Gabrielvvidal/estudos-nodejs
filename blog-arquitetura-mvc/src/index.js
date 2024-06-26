const express = require('express')
const path = require('node:path')
const router = require('./routes/routes')

const app = express()
const PORT = 3000

//Configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Configuração para receber os dados do formulário
app.use(express.urlencoded({extended: true}))

//Configuração da pasta de arquivos estáticos
app.use(express.static('public'))

//Configuração para usar as rotas
app.use(router)

app.listen(PORT, () => {
  console.log(`Servidor Iniciado!\nRodando em: http://localhost:${PORT}/`)
})