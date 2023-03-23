const { google } = require('googleapis');
const readline = require('readline');
const fs = require('fs');

const credentials = JSON.parse(fs.readFileSync('credentials.json'));

const { client_secret, client_id, redirect_uris } = credentials.installed;
const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

const scopes = ['https://www.googleapis.com/auth/gmail.readonly'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes
});

console.log(`\nAuthorize this app by visiting this url:\n\n ${authUrl}`);

// Once you authorize the app, Google will redirect you to the specified redirect_uri with a code parameter in the query string.
// Use this code to get access and refresh tokens.

// const code = '4/0AWtgzh5GEj-sBNRJsjQIRuwrvtbEWKWkVNsISH1Mvx_bwgnZZRq0YjdaOJneUAUxaJCcjw';

async function getToken(code) {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\nAccess token:\n', tokens.access_token);
    console.log('\nRefresh token:\n', tokens.refresh_token);
    oauth2Client.setCredentials(tokens);
  } catch (error) {
    console.log('Error getting token:', error);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\nEnter the code from above url: ', (code) => {
  getToken(code);
  rl.close();
});

