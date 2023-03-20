const {google} = require('googleapis');
const auth = new google.auth.GoogleAuth({
  keyFile: 'key.json',
  scopes: 'https://www.googleapis.com/auth/gmail.readonly'
});
const gmail = google.gmail({version: 'v1', auth});

async function verifyEmail(email) {
  const messages = await gmail.users.messages.list({
    userId: 'me',
    q: `to:${email}`
  });
  for (const message of messages.data.messages) {
    const messageData = await gmail.users.messages.get({
      userId: 'me',
      id: message.id
    });
    const messageTo = messageData.data.payload.headers.find(header => header.name === 'To').value;
    if (messageTo === email) {
      console.log(`Found email sent to ${email}`);
      return true;
    }
  }
  console.log(`No email found sent to ${email}`);
  return false;
}

verifyEmail('sampathsaicharan59@gmail.com');
