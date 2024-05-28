const transportador = require('../email')
const compiladorHtml = require('../utils/compiladorHtml')


const usuario = {
    nome: 'Jéssica',
    email: 'jessica.gleizer@hotmail.com',
    senha: '123abc',
}

const login = async (req, res) => {
    const { email, senha } = req.body

    if (usuario.email !== email) {
        return res.status(400).json({ mensagem: 'E-mail ou senha inválido.' })
    }

    if (usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'E-mail ou senha inválido.' })
    }


    // fazer envio de e-mail com nodemailer e sendGrid
    // transportador.sendMail({
    //     from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`, // remetente
    //     to: `${usuario.nome} <${usuario.email}>`, // destinatário
    //     subject: 'Verificação de integração', // assunto
    //     text: "Integração verificada com sucesso", // texto 
    // })


    const html = await compiladorHtml('./src/templates/login.html', {
        nomeusuario: usuario.nome,
    })

    // fazer envio com HTML
    transportador.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`, // remetente
        to: `${usuario.nome} <${usuario.email}>`, // destinatário
        subject: 'Tentativa de login', // assunto
        html, // código html
    })


    return res.json({ mensagem: 'Login efetuado com sucesso!' })
}

module.exports = {
    login
}