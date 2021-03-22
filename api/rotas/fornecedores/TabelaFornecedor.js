const Modelo = require('./ModeloTabelaFornecedor')
module.exports = {
    listar() {
        return Modelo.findAll()
    },
    async listarPorId(id) {
        const fornecedor = await Modelo.findOne(
            {where: {
                        id: id
                    }
            })
        console.log(fornecedor)
        if (!fornecedor) {
            throw new Error('Fornecedor não encontrado')
        }
        return fornecedor
    },
    inserir(fornecedor) {
        return Modelo.create(fornecedor)
    },
    atualizar(id, dados) {
        return Modelo.update(dados, {where: {id:id}})
    },
    deletar(id) {
        return Modelo.destroy({where: {id:id}})
    }
}
