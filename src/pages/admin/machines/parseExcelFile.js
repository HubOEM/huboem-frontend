import * as XLSX from 'xlsx';

export const parseExcelFile = (file, callback) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    // Assuming the first sheet contains the data
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    // Pass the parsed data to the callback function
    callback(jsonData);
  };
  reader.readAsArrayBuffer(file);
};
