const fs = require('node:fs')

module.exports = {
  createFile(texto) {
    return new Promise((resolve, reject) => {
      fs.appendFile('meuarquivo.txt', texto, (err) => {
        if (err) {
          reject('Erro ao criar o arquivo: ' + err.message)
        } else {
          console.log('Arquivo criado!\n\n')
          resolve()
        }
      })
    })
  },

  editFile(textoNovo) {
    return new Promise((resolve, reject) => {
      fs.writeFile('meuarquivo.txt', textoNovo, (err) => {
        if (err) {
          reject('Erro ao editar o arquivo: ' + err.message)
        } else {
          console.log('Arquivo editado!\n\n')
          resolve()
        }
      })
    })
  },

  readFile() {
    return new Promise((resolve, reject) => {
      fs.readFile('meuarquivo.txt', 'utf-8', (err, data) => {
        if(err) {
         reject('Erro ao ler o arquivo: ' + err.message)
        } else {
         console.log(data + '\n\n')
         resolve()
        }
     })
    })
    
  },

  deleteFile() {
    return new Promise((resolve, reject) => {
      fs.unlink('meuarquivo.txt', (err) => {
        if (err) {
          reject('Erro ao excluir o arquivo: ' + err.message)
        } else {
          console.log('Arquivo excluído!\n\n')
          resolve()
        }
      })
    })
  }
}