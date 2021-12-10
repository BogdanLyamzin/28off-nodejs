const {Product} = require("../../models");

const getAll = async(req, res)=> {
    const {_id} = req.user;
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit;
    const result = await Product.find({owner: _id}, "", {skip, limit: +limit}).populate("owner", "email");
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
}

module.exports = getAll;