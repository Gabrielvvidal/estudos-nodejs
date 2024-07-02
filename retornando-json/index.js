const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Servidor iniciado\nAcesse: http://localhost:3000')
})

app.get('/', (req, res) => {
  const pessoas = [
    {id: 1, nome: 'Gabriel', idade: 18},
    {id: 2, nome: 'Laissa', idade: 18}
  ]

  res.json(pessoas)
})