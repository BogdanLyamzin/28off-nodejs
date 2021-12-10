const {NotFound} = require("http-errors");

const {Product} = require("../../models");

const removeById = async(req, res)=> {
    const {id} = req.params;
    const result = await Product.findOneAndRemove({_id: id, owner: req.user._id});
    if(!result){
        throw new NotFound(`Not found`)
    }
    res.status(204).json();
}

module.exports = removeById