const { google } = require('googleapis');
const { OAuth2 } = google.auth;

// Set up the OAuth2 client
const oauth2Client = new OAuth2(
  '975957019030-4mplnb39c37hivonfplc9pd91u1bgmbf.apps.googleusercontent.com',
  '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',
  'http://localhost'
);

// Set the access token to use for API requests
oauth2Client.setCredentials({
  access_token: 'ya29.a0AVvZVsroKscKchmzTKgBKeA1Zwxk2kz-IOk3_SRmpjAWvuE2pkQ9A6MfbSSQ1LGwALwJsryhBS0nFRlgpB5FLdeO9MyeVAZy7fr45UHreKcLIoxFR-IH5Xv-KHPSR2Hh2_5odGQ9HQ5qVNQca6vs5ezXp2GvaCgYKAaoSARASFQGbdwaIpFMJVOBxa2iUqHydemXKbA0163',
  refresh_token: '1//06B8c4d7eEyfZCgYIARAAGAYSNwF-L9IrASVlw7IAnytgvDCu-cAKI76m8Nl2x2ZkGidRR7XlZTHctxStPOw68o0ZCsJyB3OzbHg'
});

// Set up the Gmail API client
const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

// Define the email address you want to verify
const unknownEmail = 'ravivarma25052@gmail.com';

// Make a request to the Gmail API to get the message metadata for the inbox of the user
gmail.users.messages.list({
  userId: 'me',
  q: `to:${unknownEmail}`
}, (err, res) => {
  if (err) return console.error(err);
  
  // If the request is successful and there are messages in the inbox with the given email address,
  // the API will return message metadata, including the email address of the sender.
  // You can compare this email address with the unknown email address to verify it.
  const messages = res.data.messages;
  if (messages.length > 0) {
    const message = messages[0];
    gmail.users.messages.get({
      userId: 'me',
      id: message.id
    }, (err, res) => {
      if (err) return console.error(err);
      
      const headers = res.data.payload.headers;
      const sender = headers.find(header => header.name === 'From').value;
      
      if (sender === unknownEmail) {
        console.log(`The email address ${unknownEmail} is verified!`);
      } else {
        console.log(`The email address ${unknownEmail} is not verified.`);
      }
    });
  } else {
    console.log(`There are no messages in the inbox with the email address ${unknownEmail}.`);
  }
});
