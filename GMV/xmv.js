const xlsx = require('xlsx');
const workbook = xlsx.readFile('emails.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const emailIds = xlsx.utils.sheet_to_json(worksheet).map((row) => row.email);

const nodemailer = require('nodemailer');

const verifyEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'ravivarma25052@gmail.com',
      pass: 'osmbordgxarlcjsc',
    },
  });

  const info = await transporter.verify();
  if(info) {
    console.log(`Server is ready to take our messages: ${info}`);
  } else {
    console.error(error);
  }

  const result = await transporter.verify();
  if (result) {
    console.log(email+' is a valid email ID');
  } else {
    console.log('${email} is an invalid email ID');
  }
};

emailIds.forEach((email) => {
  verifyEmail(email);
});
