const {NotFound} = require("http-errors");

const productsOperations = require("../../models/products");

const getById = async(req, res)=> {
    const {id} = req.params;
    const result = await productsOperations.getById(id);
    if(!result){
        throw new NotFound(`Product with id=${id} not found`)
        // const error = new Error(`Product with id=${id} not found`)
        // error.status = 404;
        // throw error;
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
}

module.exports = getById;