const {Schema, model} = require("mongoose");
const Joi = require("joi");

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },
    location: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {versionKey: false, timestamps: true});


const joiSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().required(),
    active: Joi.bool()
});

const updateActiveSchema = Joi.object({
    active: Joi.bool().required()
});

const Product = model("product", productSchema);

module.exports = {
    Product,
    joiSchema,
    updateActiveSchema
}