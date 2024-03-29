const TabelaFornecedor = require('./TabelaFornecedor')
const CampoInvalido = require('./../../erros/CampoInvalido')
const DadosNaoFornecidos = require('./../../erros/DadosNaoFornecidos')

class Fornecedor {
    constructor({id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao}){
        this.id = id
        this.empresa = empresa
        this.email = email
        this.categoria = categoria
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

    async criar() {
        this.validar()
        const resultado = await TabelaFornecedor.inserir({
            empresa: this.empresa,
            email: this.email,
            categoria: this.categoria
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }

    async carregar() {
        const fornecedor = await TabelaFornecedor.listarPorId(this.id)
        this.empresa = fornecedor.empresa
        this.email = fornecedor.email
        this.categoria = fornecedor.categoria
        this.dataCriacao = fornecedor.dataCriacao
        this.dataAtualizacao = fornecedor.dataAtualizacao
        this.versao = fornecedor.versao
    }

    async atualizar() {
        const fornecedor = await TabelaFornecedor.listarPorId(this.id)
        const campos = ['empresa', 'email', 'categoria']
        const dadosUpdate = {}

        campos.forEach((campo) => {
            const valor = this[campo]
            if (typeof valor === 'string' && valor.length > 0) {
                dadosUpdate[campo] = valor
            }
        })

        if (Object.keys(dadosUpdate).length === 0) {
            throw new DadosNaoFornecidos()
        }

        await TabelaFornecedor.atualizar(this.id, dadosUpdate)
    }

    deletar() {
        return TabelaFornecedor.deletar(this.id)
    }

    validar() {
        const campos = ['empresa', 'email', 'categoria']

        campos.forEach(campo => {
            const valor = this[campo]
            if (typeof valor !== 'string' || valor.length === 0) {
                throw new CampoInvalido(campo)
            }
        })
    }
}

module.exports = Fornecedor
