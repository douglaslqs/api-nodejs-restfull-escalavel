const Modelo = require('./ModeloTabelaFornecedor')
const NaoEncontrado = require('./../../erros/NaoEncontrado')

module.exports = {
    listar() {
        return Modelo.findAll({raw: true})
    },
    async listarPorId(id) {
        const fornecedor = await Modelo.findOne(
            {where: {
                        id: id
                    }
            })
        if (!fornecedor) {
            throw new NaoEncontrado()
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
