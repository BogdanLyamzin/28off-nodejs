const express = require("express");

const app = express(); // app - веб-сервер

app.get("/", (request, response)=> {
    console.log(request.url);
    console.log(request.headers);
    response.send("<h2>Home page</h2>")
});

app.get("/products", (request, response)=> {
    response.send("<h2>Страница товаров</h2>")
})

app.get("/contacts", (request, response)=> {
    response.send("<h2>Страница контактов</h2>")
})

app.listen(3000, ()=> console.log("Server running"));