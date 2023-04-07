const { google } = require('googleapis');
const keys = require('./key.json');

const spreadsheetId = '1EYRfu4z0mw_j6wW3Y1eoq2K0G99pvaX0P6axRAu2wlI';

async function main() {
  const client = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    credentials: keys,
  });

  const sheets = google.sheets({ version: 'v4', auth: client });

  const response = await sheets.spreadsheets.get({
    spreadsheetId,
    includeGridData: false,
  });

  const sheetNames = response.data.sheets.map(sheet => sheet.properties.title);

  const uniqueNames = new Set();

  for (const sheetName of sheetNames) {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A1:Z`,
      majorDimension: 'ROWS',
    });

    const rows = response.data.values;

    if (rows && rows.length > 0) {
      const headerRow = rows[0];
      const nameIndex = headerRow.indexOf('Email Address');

      if (nameIndex !== -1) {
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          const name = row[nameIndex];

          if (name !== undefined && name !== null) {
            const trimmedName = name.trim();
            if (trimmedName.length > 0) {
              uniqueNames.add(trimmedName);
            }
          }
        }
      }
    }
  }

  const uniqueNamesArray = Array.from(uniqueNames);
  uniqueNamesArray.sort((a, b) => a.localeCompare(b));
  console.log('Unique names:');
  console.log(uniqueNamesArray);
}

main().catch(console.error);