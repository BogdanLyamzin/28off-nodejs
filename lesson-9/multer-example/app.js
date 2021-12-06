const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const {v4} = require("uuid");
const fs = require("fs/promises");

const app = express();

app.use(cors());
app.use(express.static("public"));

const tempDir = path.join(__dirname, "temp");
const productsDir = path.join(__dirname, "public/products");

const multerConfig = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, tempDir);
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname)
    },
    limits: {
        fileSize: 3072
    }
});

const uploadMiddleware = multer({
    storage: multerConfig
});

const products = [];

app.get("/api/products", async(req, res)=> {
    res.json(products)
})

app.post("/api/products", uploadMiddleware.single("image"), async (req, res)=>{
    const {path: tempPath, originalname} = req.file;
    const resultPath = path.join(productsDir, originalname);
    try {
        await fs.rename(tempPath, resultPath);
        const image = `products/${originalname}`
        const newProduct = {name: req.body.name, image, id: v4()};
        products.push(newProduct);
        res.status(201).json(newProduct);
    } catch (error) {
        await fs.unlink(tempPath);
    }

});

const {PORT = 3000} = process.env;

app.listen(PORT)