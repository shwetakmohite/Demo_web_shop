import * as XLSX from 'xlsx';
import path from 'node:path';

export interface LoginData {
email: string;
password: string;
}

export function getExcelData(): LoginData[] {
const filePath = path.join(
process.cwd(),
'test-data',
'testData.xlsx'
);

const workbook = XLSX.readFile(filePath);
const worksheet = workbook.Sheets['Sheet1'];

if (!worksheet) {
throw new Error('Sheet1 not found in Excel file');
}

return XLSX.utils.sheet_to_json<LoginData>(worksheet, {
defval: ''
});
}