class ValorNaoSuportado extends Error{
    constructor(contentType){
        super(`O tipo de conte�do '${contentType}' n�o suportado`)
    }
}

module.exports = ValorNaoSuportado
