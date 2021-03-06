const {Conflict} = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const {User} = require("../../models");

const register = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw new Conflict("Already exist")
    }
    const avatarURL = gravatar.url(email);
    const newUser = new User({email, avatarURL});
    /*
    newUser = {
        email
    }
    */
    newUser.setPassword(password);
        /*
    newUser = {
        email,
        password
    }
    */
    newUser.save();
    // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // const newUser = await User.create({email, password: hashPassword});

    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            user: {
                email,
                avatarURL
            }
        }
    })
}

module.exports = register;