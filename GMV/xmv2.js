const xlsx = require('xlsx');
const nodemailer = require('nodemailer');
const workbook = xlsx.readFile('emails.xlsx');
const worksheet = workbook.Sheets['Sheet1'];
const emailList = [];
const range = xlsx.utils.decode_range(worksheet['!ref']);
for (let i = range.s.r + 1; i <= range.e.r; i++) {
  const cell = worksheet[xlsx.utils.encode_cell({ r: i, c: 0 })];
  if (cell && cell.t === 's') {
    emailList.push(cell.v.trim());
  }
}
async function verifyEmail(email) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'ravivarma25052@gmail.com',
      pass: 'osmbordgxarlcjsc'
    }
  });

  try {
    const info = await transporter.verify();
    console.log(`Server is ready to take our messages: ${info}`);
  } catch (error) {
    console.error(error);
  }

  const result = await transporter.verify();
  if (result) {
    console.log(`Email ${email} is verified`, result);
  } else {
    console.log(`Email ${email} is not verified`, error);
  }
}
emailList.forEach(email => verifyEmail(email));
