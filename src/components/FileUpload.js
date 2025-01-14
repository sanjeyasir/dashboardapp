import React from "react";
import * as XLSX from "xlsx";

const FileUpload = ({ setGridData }) => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const data = reader.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet);
      
            // Add a unique id to each row
            const dataWithId = jsonData.map((row, index) => ({
              ...row,
              id: index, // You can use any unique identifier here, such as `index`
            }));
      
            setGridData(dataWithId);
          };
          reader.readAsBinaryString(file);
        }
    };
      

  return <input type="file" onChange={handleFileUpload} />;
};

export default FileUpload;

