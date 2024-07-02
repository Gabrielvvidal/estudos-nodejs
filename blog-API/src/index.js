const express = require('express')
const path = require('node:path')
const router = require('./routes/routes')

const app = express()
const PORT = 3000

//Configuração para usar as rotas
app.use(router)

app.listen(PORT, () => {
  console.log(`Servidor Iniciado!\nRodando em: http://localhost:${PORT}/`)
})