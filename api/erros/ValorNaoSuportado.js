class ValorNaoSuportado extends Error{
    constructor(contentType){
        super(`O tipo de conteúdo '${contentType}' não suportado`)
    }
}

module.exports = ValorNaoSuportado
