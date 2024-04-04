const nodemailer = require('nodemailer');
const { GMAIL_PASSWORD, GMAIL_EMAIL } = process.env;

const nodemailerConfig = {
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async data => {
  const email = { ...data, from: GMAIL_EMAIL };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
