const {Unauthorized} = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {User} = require("../../models");

const {SECRET_KEY} = process.env;

const login = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user || !user.comparePassword(password)){
        throw new Unauthorized();
    }
    // if(!user){
    //     throw new Unauthorized();
    // }
    // const result = bcrypt.compareSync(password, user.password);
    // const result = user.comparePassword(password);
    // if(!result){
    //     throw new Unauthorized();
    // }
    const payload = {
        id: user._id
    };
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
    res.json({
        status: "success",
        code: 200,
        data: {
            token
        }
    })
}

module.exports = login;