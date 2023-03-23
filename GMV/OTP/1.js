const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
		user: "ravivarma25052@gmail.com",
		pass: "osmbordgxarlcjsc"
   }
});

const verificationCode = Math.floor(1234 + Math.random() * 9876);

transporter.sendMail({
	from: "ravivarma25052@gmail.com",
	to: "sastaguvvu25@gmail.com",
   subject: 'Email Verification Code',
   text: `Your verification code is ${verificationCode}`
}, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Verification code sent to ${info.accepted[0]}`);
    }
});
