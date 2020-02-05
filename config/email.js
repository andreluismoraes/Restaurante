/**by https://nodemailer.com/about/ */

const nodemailer = require("nodemailer");

/**criando o transport */
const email = nodemailer.createTransport({
    host: "configure o smtp de seu email",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "seu email",
      pass: "sua senha"
    }
  });

module.exports = email