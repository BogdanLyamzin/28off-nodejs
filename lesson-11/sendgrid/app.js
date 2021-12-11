const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_KEY} = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const email = {
    to: "beceg61388@leanrights.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Новая заявка с сайта",
    html: "<p>Новая заявка с сайта</p>"
}

sgMail.send(email)
    .then(()=> console.log("Email success send"))
    .catch(error => console.log(error.message))