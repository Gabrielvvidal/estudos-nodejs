const fileManipulation = require('./fileManipulation')

const createFile = fileManipulation.createFile
const editFile = fileManipulation.editFile
const readFile = fileManipulation.readFile
const deleteFile = fileManipulation.deleteFile

async function start() {
  await createFile('Hello World!')
  await readFile()
  await editFile('Olá Mundo!')
  await readFile()
  await deleteFile() 
}

start()