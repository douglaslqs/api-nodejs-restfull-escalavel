class CampoInvalido extends Error {
    constructor(campo){
        const mensagem = `O campo '${campo}' est� inv�lido`
        super(mensagem)
        this.name = 'CampoInvalido'
        this.idErro = 1;
    }
}

module.exports = CampoInvalido
