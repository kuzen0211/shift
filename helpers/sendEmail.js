const nodemailer = require('nodemailer');
const { GMAIL_PASSWORD, GMAIL_EMAIL } = process.env;

const nodemailerConfig = {
  service: 'hotmail',
  host: 'smtp-mail.outlook.com',
  secure: false,
  port: 587,
  auth: {
    user: 'no-reply-ua@hotmail.com',
    pass: 'Sabolina_11',
  },
  tls: {
    ciphers: 'SSLv3',
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async data => {
  const email = { ...data, from: 'no-reply-ua@hotmail.com' };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
