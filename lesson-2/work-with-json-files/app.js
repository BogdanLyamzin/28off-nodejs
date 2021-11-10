const productsOperations = require("./products");
/*
1. Получить все товары - productsOperations.getAll()
2. Получить один товар по id - productsOperations.getById()
3. Добавить товар - productsOperations.add()
4. Обновить товар - productsOperations.updateById()
5. Удалить товар - productsOperations.removeById()
*/
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
const id = "767580d5-f509-4f45-98f9-28e74ec4af66";

// productsAction({action: "getAll"})
//     .then(data => console.log(data))

// productsAction({action: "getById", id})
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// const newData = {
//     name: "iPhone X",
//     price: 17000,
//     location: "Apple store"
// }

// productsAction({action: "add", data: newData})
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

const updateId = "f63b7831-514f-48df-80a5-7fa1b7d056cc"

// const updateData = {
//     name: "iPhone X",
//     price: 16000,
//     location: "Apple store"
// }

// productsAction({action: "updateById", id: updateId, data: updateData})
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// productsAction({action: "removeById", id: updateId})
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))


