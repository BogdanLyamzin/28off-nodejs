const dotenv = require("dotenv");
dotenv.config();
const {DB_HOST} = process.env;
console.log(DB_HOST)