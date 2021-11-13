const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(cors());

// app.use(async(req, res, next)=> {
//     const {method, url} = req;
//     const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//     await fs.appendFile("server.log", `\n${method} ${url} ${date}`)
//     next();
// });

// app.use((req, res, next)=> {
//     console.log("First middleware");
//     next();
// });

// app.use((req, res, next)=> {
//     console.log("Second middleware");
//     next();
// });

app.get("/about-us", (req, res)=> {
    res.send("<h2>О нас</h2>");
});

app.get("/products", (req, res) => {
    res.json(products)
});

app.post("/products", (req, res) => {
    res.json({
        message: "Товар добавлен"
    })
});

app.get("/contacts", (req, res)=> {
    res.send("<h2>Наши контакты</h2>");
});

app.use((req, res)=> {
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    })
});

app.listen(3000);