const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "ravivarma25052@gmail.com",
		pass: "osmbordgxarlcjsc"
	}
});

const mailOptions = {
	from: "ravivarma25052@gmail.com",
	to: "sastaguvvu25@gmail.com",
	subject: "Nodemailer test",
	text: "Fuckin Hell"
};

transport.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent to " + mailOptions.to);
	}
});