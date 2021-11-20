const {NotFound} = require("http-errors");

const {Product} = require("../../models");

const updateActive = async(req, res)=> {
    const {id} = req.params;
    const {active} = req.body;
    const result = await Product.findByIdAndUpdate(id, {active}, {new: true});
    if(!result) {
        throw new NotFound(`Product with id=${id} not found`)
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
}

module.exports = updateActive;