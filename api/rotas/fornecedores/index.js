const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')

roteador.get('/', async (req, res) => {
    const resultados = await TabelaFornecedor.listar()
    res.send(JSON.stringify(resultados))
})

roteador.post('/', async (req, res) => {
    try {
        const dadosRecebidos = req.body;
        const fornecedor = new Fornecedor(dadosRecebidos)
        await fornecedor.criar()
        res.send(JSON.stringify(fornecedor))
    } catch (erro) {
        res.send(JSON.stringify({messagem: erro.message}))
    }

})

roteador.get('/:id', async (req, res) => {
    try {
        const fornecedor = new Fornecedor({id:req.params.id})
        await fornecedor.carregar()
        res.send(JSON.stringify(fornecedor))
    } catch (erro) {
        res.send(JSON.stringify({messagem: erro.message}))
    }
})

roteador.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const dados = Object.assign({}, body, {id: id})

        const fornecedor = new Fornecedor(dados)
        await fornecedor.atualizar()
        res.end()
    } catch (erro) {
        res.send(JSON.stringify({message: erro.message}))
    }
})

roteador.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const fornecedor = new Fornecedor({id: id})
        await fornecedor.carregar()
        await fornecedor.deletar()
        res.end()
    } catch (erro) {
        res.send(JSON.stringify({message: erro.message}))
    }


})

module.exports = roteador