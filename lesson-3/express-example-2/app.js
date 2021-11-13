const express = require("express");

const products = require("./products");

const app = express();

// app.set("json spaces", 8);

app.get("/products", (req, res)=> {
    // res.json(null);
    // res.send(null);
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    })
    // res.json(products);
    // res.send(products);
})


app.listen(3000);