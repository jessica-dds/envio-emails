const fs = require('fs/promises')
const handlebars = require('handlebars')


// Função dinâmica para arquivo html = dados dinâmicos pelo contexto

const compiladorHtml = async (arquivo, contexto) => {
    const html = await fs.readFile(arquivo)
    const compilador = handlebars.compile(html.toString())
    const htmlString = compilador(contexto)
    return htmlString
}

module.exports = compiladorHtml