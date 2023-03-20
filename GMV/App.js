const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  '272479651342-mdvcdc95hfseu4uvfbdqj6smvt0b5vic.apps.googleusercontent.com',
  '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',
  'https://localhost/3000/'
);

const scopes = [
  'https://www.googleapis.com/auth/gmail.readonly'
];

function getAuthUrl() {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes.join(' ')
  });
}

function getAccessToken(code) {
  return new Promise((resolve, reject) => {
    oauth2Client.getToken(code, (err, tokens) => {
      if (err) {
        reject(err);
      } else {
        resolve(tokens);
      }
    });
  });
}

async function getUserProfile(tokens) {
  const oauth2Client = new OAuth2(
    '272479651342-mdvcdc95hfseu4uvfbdqj6smvt0b5vic.apps.googleusercontent.com',
    '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',
    'https://localhost/3000/'
  );
  oauth2Client.setCredentials(tokens);

  const gmail = google.gmail({version: 'v1', auth: oauth2Client});
  const res = await gmail.users.getProfile({
    userId: 'me'
  });
  return res.data;
}

const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  const authUrl = getAuthUrl();
  res.redirect(authUrl);
});

router.get('/callback', async (req, res) => {
  const code = req.query.code;
  const tokens = await getAccessToken(code);
  const profile = await getUserProfile(tokens);
  console.log(profile);
  res.send('Logged in!');
});

module.exports = router;

