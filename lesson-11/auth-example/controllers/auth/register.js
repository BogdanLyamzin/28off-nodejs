const {Conflict} = require("http-errors");
const {nanoid} = require("nanoid");

const {sendMail} = require("../../helpers");
const {User} = require("../../models");

const register = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw new Conflict("Already exist")
    }
    const verificationToken = nanoid();
    const newUser = new User({email, verificationToken});

    newUser.setPassword(password);

    newUser.save();

    const mail = {
        to: email,
        subject: "Подтверждение email",
        html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}">Нажмите для подтверждения</a>`
    };

    await sendMail(mail);

    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            user: {
                email,
                verificationToken
            }
        }
    })
}

module.exports = register;