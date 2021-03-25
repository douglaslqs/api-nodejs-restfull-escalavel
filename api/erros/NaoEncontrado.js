
class NaoEncontrado extends Error {
    constructor(){
        super('Fornecedor n�o foi encontrado!')
        this.name = 'N�oEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado
