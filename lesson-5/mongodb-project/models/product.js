const {Schema, model} = require("mongoose");

const productSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },
    status: {
        // "basic", "sale", "stock"
        type: String,
        enum: ["basic", "sale", "stock"],
        default: "basic"
    },
    code: {
        type: String,
        unique: true,
        required: true,
        match: /^[0-9]{8}$/
    }
}, {versionKey: false, timestamps: true});

const Product = model("product", productSchema);
// categories => catagory
// mice => mouse

module.exports = Product