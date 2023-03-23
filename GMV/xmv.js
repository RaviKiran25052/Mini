const xlsx = require('xlsx');
const nodemailer = require('nodemailer');
const workbook = xlsx.readFile('stu.xlsx');
const worksheet = workbook.Sheets['Sheet1'];
const emailList = [];
const range = xlsx.utils.decode_range(worksheet['!ref']);
for (let i = range.s.r + 1; i <= range.e.r; i++) {
  const cell = worksheet[xlsx.utils.encode_cell({ r: i, c: 3 })];
  if (cell && cell.t === 's') {
    emailList.push(cell.v.trim());
  }
}
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  '975957019030-4mplnb39c37hivonfplc9pd91u1bgmbf.apps.googleusercontent.com',
  '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',
  'http://localhost/3000'
);

oauth2Client.setCredentials({
  access_token: 'ya29.a0AVvZVsqrnPHTUjs16LK_3RyNciAEKGNVJpWDTzqWedsRVOThF3c3gTUuIZauLp8f9sTUdPVSA_hfsYpCBKplop-f78Y6g908geFAF-0jDla5kCs-B1Y7L6XVrit6-eAm4iG2cUYR2GyhAfsR2XJfgO4VcSZwaCgYKASwSARASFQGbdwaI5tQ5RPkKsOgN1G1Q9AQzrA0163',
  refresh_token: '1//0gD5uVCjzYOdYCgYIARAAGBASNwF-L9IrMz-xsTC9dr8BKa4Mjx_FNFgYJ7E7j4Ke-iQmIK-JeruNs894sTCTZ2P40AmgKD77Q7Q',
});

const gmail = google.gmail({
  version: 'v1',
  auth: oauth2Client
});
async function searchForEmail(email) {
  const res = await gmail.users.messages.list({
    userId: 'me',
    q: `to:${email} OR cc:${email} OR bcc:${email}`
  });
  return (res.data.messages && res.data.messages.length > 0);
}

async function checkEmailExistence(email) {
  const res = await searchForEmail(email);
  console.log(email + "\t: " + res);
}
emailList.forEach(email => checkEmailExistence(email));
