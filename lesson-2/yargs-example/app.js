const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const productsAction = require("./products");

const arr = hideBin(process.argv);
// console.log(arr);

const {argv} = yargs(arr);
// console.log(argv)
if(argv.action){
    switch(argv.action){
        case "getAll":
        productsAction({action: argv.action})
            .then(data => console.log(data))            
    }
}