const express = require("express");
const {nanoid} = require("nanoid");

const products = require("../../products");

const router = express.Router();

/*
1. Получить все товары
2. Получить один товар по id
3. Добавить товар
4. Обновить товар полностью по id
5. Удалить товар по id
*/

router.get("/", (req, res)=> {
    res.json(products);
});

router.get("/:id", (req, res)=> {
    const {id} = req.params;
    const result = products.find(item => item._id === id);
    if(!result){
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Product with id=${id} not found`
        });
        return;
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
})

router.post("/", (req, res)=> {
    const newProduct = {...req.body, id: nanoid()};
    products.push(newProduct);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result: newProduct
        }
    })
})

router.put("/:id", (req, res)=> {
    const {id} = req.params;
    const idx = products.findIndex(item => item._id === id);
    if(idx === -1){
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Product with id=${id} not found`
        })
        return;
    }
    products[idx] = {...req.body, id};
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products[idx]
        }
    })
});

router.delete("/:id", (req, res)=> {
    const {id} = req.params;
    const idx = products.findIndex(item => item._id === id);
    if(idx === -1){
        res.status(404).json({
            status: "error",
            code: 404,
            message: `Product with id=${id} not found`
        })
        return;
    }
    const [removeProduct] = products.splice(idx, 1);
    res.json({
        status: "success",
        code: 200,
        data: {
            result: removeProduct
        }
    })
})


module.exports = router;