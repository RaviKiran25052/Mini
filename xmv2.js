const XLSX = require('xlsx');

const workbook = XLSX.readFile('emails.xlsx');
const sheetName = 'Sheet1'; // Change this to the name of the sheet you want to read
const sheet = workbook.Sheets[sheetName];

// Get the range of cells in the first column
const range = XLSX.utils.decode_range(sheet['!ref']);
range.s.c = 0; // Set the starting column to 0
range.e.c = 2; // Set the ending column to 0

// Extract the data from the first column
const data = [];
for (let row = range.s.r+1; row <= range.e.r; row++) {
  const cellAddress = XLSX.utils.encode_cell({ r: row, c: range.s.c });
  const cellValue = sheet[cellAddress]?.v;
  if (cellValue !== undefined) {
    data.push(cellValue);
  }
}

console.log(data);
