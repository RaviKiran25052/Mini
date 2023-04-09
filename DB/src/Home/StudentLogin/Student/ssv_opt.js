const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
  keyFile: 'key.json',
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.readonly',
    'https://www.googleapis.com/auth/drive',
  ],
});

const sheets = google.sheets({ version: 'v4', auth });

const sheetNames = [
  "S1: Student Journal Pub",
  "S2: Student Conference Publication",
  "S3: Student Internships",
  "S4: Student Certifications",
  "S5: Student Workshops/Conf attended",
  "S6: Student NPTEL",
  "S7: Student Workshops Organized",
  "S8: Student Events Organized",
  "S9: Student Guest Lecutres Organized",
  "S10: Student Prof. Body",
  "S11: Student Awards",
  "S12: Student capabilities enhancement",
  "S13: Students Higher Edu.",
  "S14: Students Competitive Exams",
  "S15: Students Industry Visit",
  "S16: Students Social Service Programs",
  "S17: Students Leadership & Volunteering Activities",
  "S18: Student Co-curricular Activities & Extra curricular Activities Participation"
];

async function getSheetData(sheetName) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1EYRfu4z0mw_j6wW3Y1eoq2K0G99pvaX0P6axRAu2wlI',
      range: sheetName + '!A:Z',
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
    const col = "Roll Number";
    result.sort((a, b) => a[col] - b[col]);
    const regno = result.map(obj => obj[col]);
    return regno.length;
  } catch {
    return 0;
  }
}
let data;
async function call() {
  const promises = sheetNames.map(getSheetData);
  const results = await Promise.all(promises);
  const res = Object.fromEntries(sheetNames.map((sheetName, i) => [sheetName, results[i]]));
  const data = Object.fromEntries(Object.entries(res).sort());
  console.log(data);
}

call();