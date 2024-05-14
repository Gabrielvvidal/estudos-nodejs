const os = require('node:os')
const fs = require('node:fs')
const path = require('node:path')

const plataformName = {
  'win32': 'Windows',
  'linux': 'Linux',
  'darwin': 'MacOs',
  'freebsd': 'FreeBSD'
}

function getSystemInfo() {
  const plataform = plataformName[os.platform()]
  const arch = os.arch()
  const cpu = os.cpus()[0].model
  const time = (os.uptime() / 3600).toFixed(0)

  //Cálculo para encontrar a porcentagem de uso da memória ram
  const totalRam = os.totalmem() / 1024 / 1024 / 1024
  const freeRam = os.freemem() / 1024 / 1024 / 1024
  const ramUsage = (totalRam - freeRam)
  const ramPercentage = Math.round((ramUsage / totalRam) * 100)

  return { plataform, arch, cpu, time, ramPercentage }
}

function printConsole({ plataform, arch, cpu, time, ramPercentage }) {
  console.clear()
  console.log('Detalhes do sistema')
  console.log(`Sistema Operacional: ${plataform}`)
  console.log(`Arquitetura: ${arch}`)
  console.log(`CPU: ${cpu}`)
  console.log(`Tempo de uso do computador (Horas): ${time} horas`)
  console.log(`Uso da memória ram: ${ramPercentage}%`)
}

function newLog({ plataform, arch, cpu, time, ramPercentage }) {
  if (fs.existsSync('./log/log.txt')) {
    return
  }

  const logContent = `DETALHES DO SISTEMA | SISTEMA OPERACIONAL: ${plataform} | ARQUITETURA: ${arch} | CPU: ${cpu} | TEMPO DE USO: ${time} HORAS | USO DA RAM: ${ramPercentage}`

  fs.appendFileSync('./log/log.txt', logContent, (err) => {
    if (err) {
      console.log('Erro ao criar o arquivo.')
    }
  })
}

function editLog({ plataform, arch, cpu, time, ramPercentage }) {
  const logContent = `DETALHES DO SISTEMA | SISTEMA OPERACIONAL: ${plataform} | ARQUITETURA: ${arch} | CPU: ${cpu} | TEMPO DE USO: ${time} HORAS | USO DA RAM: ${ramPercentage}`

  fs.appendFileSync('./log/log.txt', '\n'+logContent, (err) => {
    if (err) {
      console.log('Erro ao editar o arquivo.')
    }
  })
}

setInterval(() => {
  const infos = getSystemInfo()
  printConsole(infos)
  newLog(infos)
  editLog(infos)
}, 1000)
