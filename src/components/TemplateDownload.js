import React from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const downloadTemplate = () => {
  // Create a worksheet from JSON data
  const ws = XLSX.utils.json_to_sheet([
    { "Name": "", "Email": "", "Age": "", "Country": "" },
    { "Name": "", "Email": "", "Age": "", "Country": "" },
  ]);

  // Create a new workbook and append the worksheet
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Template");

  // Write the workbook and create a Blob of the file
  const file = XLSX.write(wb, { bookType: "xlsx", type: "array" });

  // Convert the array to a Blob for the download
  const blob = new Blob([file], { type: "application/octet-stream" });

  // Trigger the download with file-saver
  saveAs(blob, "template.xlsx");
};

const TemplateDownload = () => (
  <button onClick={downloadTemplate}>Download Excel Template</button>
);

export default TemplateDownload;

