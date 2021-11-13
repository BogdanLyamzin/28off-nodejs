const {NotFound} = require("http-errors");

const productsOperations = require("../../models/products");

const removeById = async(req, res)=> {
    const {id} = req.params;
    const result = await productsOperations.removeById(id);
    if(!result){
        throw new NotFound(`Product with id=${id} not found`)
    }
    res.status(204).json();
}

module.exports = removeById