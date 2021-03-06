const {NotFound} = require("http-errors");

const {Product} = require("../../models");

const removeById = async(req, res)=> {
    const {id} = req.params;
    const result = await Product.findByIdAndRemove(id);
    if(!result){
        throw new NotFound(`Product with id=${id} not found`)
    }
    res.status(204).json();
}

module.exports = removeById