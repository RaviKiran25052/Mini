const { google } = require("googleapis");
const auth = new google.auth.GoogleAuth({
	keyFile: 'key.json',
	scopes: [
		'https://www.googleapis.com/auth/spreadsheets',
		'https://www.googleapis.com/auth/drive.readonly',
		'https://www.googleapis.com/auth/drive',
 	],
});
const sheets = google.sheets({ version: "v4", auth });

const spreadsheetId = '1EYRfu4z0mw_j6wW3Y1eoq2K0G99pvaX0P6axRAu2wlI';

async function getRows(sheetName, columnName, value) {
  const response = await sheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: spreadsheetId,
    range: `${sheetName}!A:Z`,
  });

  const headers = response.data.values[0];
  const data = response.data.values.slice(1);

  const matchingRows = data.filter((row) => row[headers.indexOf(columnName)] === value);

  if (matchingRows.length > 0) {
    return matchingRows.map((row) => {
      const obj = {};
      headers.forEach((header, i) => {
        obj[header] = row[i];
      });
      return obj;
    });
  } else {
    return [];
  }
}
async function getSheetData(columnName, value) {
  const sheetsResponse = await sheets.spreadsheets.get({
    auth: auth,
    spreadsheetId: spreadsheetId,
    includeGridData: false,
  });

  const sheetNames = sheetsResponse.data.sheets.map((sheet) => sheet.properties.title);

  const data = [];

  for (const sheetName of sheetNames) {
    const rows = await getRows(sheetName, columnName, value);

    if (rows.length > 0) {
      data.push({
        sheetName: sheetName,
        data: rows,
      });
    }
  }

  return data;
}
async function getTableData(sheetName, columnName, value) {

  const response = await sheets.spreadsheets.get({
    auth: auth,
    spreadsheetId: spreadsheetId,
    includeGridData: true,
  });

  const sheetData = response.data.sheets.find((sheet) => sheet.properties.title === sheetName);

  if (!sheetData) {
    return null;
  }

  const matchingRows = await getRows(sheetName, columnName, value);

  if (matchingRows.length === 0) {
    return null;
  }

  const headers = sheetData.data[0].rowData[0].values.map((value) => value.formattedValue);
  const rows = matchingRows.map((row) => {
    return headers.map((header) => row[header]);
  });

  let tableHtml = "<table><thead><tr>";
  headers.forEach((header) => {
    tableHtml += `<th>${header}</th>`;
  });
  tableHtml += "</tr></thead><tbody>";
  rows.forEach((row) => {
    tableHtml += "<tr>";
    row.forEach((value) => {
      tableHtml += `<td>${value}</td>`;
    });
    tableHtml += "</tr>";
  });
  tableHtml += "</tbody></table>";

  return {
    sheetName,
    rows,
    tableHtml,
  };
}

async function main() {
  const sheetData = await getSheetData('Roll Number','18331A0530');
  console.log(sheetData);
  // console.log(sheetData[0].rows);
}

main().catch(console.error);
