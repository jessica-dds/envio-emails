const usuario = {
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

    // fazer envio de e-mail

    return res.json({ mensagem: 'Login efetuado com sucesso!' })
}

module.exports = {
    login
}