const {program} = require("commander");

const productsAction = require("./productsAction");

program
    .option("-a, --action <type>", "action type")
    .option("-i, --id <type>", "action type")

program.parse(process.argv);

const options = program.opts();

