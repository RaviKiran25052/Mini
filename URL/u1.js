const nodemailer = require('nodemailer');

// create a nodemailer transporter with your email provider's SMTP configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
	user: "ravivarma25052@gmail.com",
	pass: "osmbordgxarlcjsc"
  }
});

// the URL to verify the email address, replace with your actual URL
const verificationUrl = 'https://yourwebsite.com/verify-email?token=1234567890';

// an array of email addresses to send the verification email to
const recipients = ["ravivarma25052@gmail.com", "sastaguvvu25@gmail.com"];

// send the email with the verification URL to each recipient
async function sendVerificationEmails() {
  for (let i = 0; i < recipients.length; i++) {
    const recipient = recipients[i];
    try {
      await transporter.sendMail({
        from: "ravivarma25052@gmail.com",
        to: recipient,
        subject: 'Verify your email address',
        html: `Click the button to <a href="${verificationUrl}"><button style="background-color: #0D6EFD;color: #fff;border: 0px;border-radius: 8px;height: 25px;">Verify</button></a>`
      });
      console.log(`Verification email sent to ${recipient}`);
    } catch (error) {
      console.error(`Error sending verification email to ${recipient}:`, error);
    }
  }
}

sendVerificationEmails();