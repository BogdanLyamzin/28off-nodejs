const fs = require("fs");

fs.readFile("files/read.txt", "utf-8", (error, data)=>{
    if(error){
        return false;
    }
    console.log(data);
    // console.log(data)
    // const text = data.toString()
    // console.log(text)
})