const { google } = require('googleapis');
const fs = require('fs');

const auth = new google.auth.GoogleAuth({
	keyFile: 'key.json',
	scopes: [
		'https://www.googleapis.com/auth/spreadsheets',
		'https://www.googleapis.com/auth/drive.readonly',
		'https://www.googleapis.com/auth/drive',
 	],
});

const sheets = google.sheets({ version: 'v4', auth });

async function getSheetData() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: '18dzo64uXFX9jxsqKcE2xgYw6LpHmeUmfYLLOHQYptEk',
    range: 'Sheet1!A:D',
  });

  const rows = response.data.values;

  const headers = rows[0];
  const data = rows.slice(1);

  const result = data.map((row) =>
  row.reduce(
	(obj, value, i) => ({
	  ...obj,
	  [headers[i]]: value,
	}),
	{}
 )
  );

  const jsonData = JSON.stringify(result, null, 2);

  fs.writeFileSync('output.json', jsonData);

  console.log(`Data written to file.`);
  console.log(jsonData);
}

getSheetData().catch((err) => console.error(err));
