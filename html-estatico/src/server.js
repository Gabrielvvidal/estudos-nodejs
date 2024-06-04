const express = require('express')

const app = express()
app.use(express.static('public'))

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/views/sobre.html')
})

app.listen(port, () => {
  console.log('Servidor iniciado!')
})