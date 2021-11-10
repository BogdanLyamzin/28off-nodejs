const productsOperations = require("./products");

const productsAction = async({action = "getAll", id, data})=> {
    switch(action){
        case "getAll":
            const products = await productsOperations.getAll();
            return products;
        case "getById":
            const product = await productsOperations.getById(id);
            if(!product) {
                throw new Error(`Not found product with id=${id}`);
            }
            return product;
        case "add":
            const newProduct = await productsOperations.add(data);
            return newProduct;
        case "updateById":
            const updateProduct = await productsOperations.updateById(id, data);
            if(!updateProduct) {
                throw new Error(`Not found product with id=${id}`);
            }
            return updateProduct;
        case "removeById":
            const removeProduct = await productsOperations.removeById(id);
            if(!removeProduct) {
                throw new Error(`Not found product with id=${id}`);
            }
            return removeProduct;        
    }
};

module.exports = productsAction;