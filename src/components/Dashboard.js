import React, { useState } from "react";
import Card from "./Card";
import Chart from "./Chart";
import TemplateDownload from "./TemplateDownload";  // Import the download button
import FileUpload from "./FileUpload";  // Import the file upload component
import { DataGrid } from '@mui/x-data-grid';  // Import DataGrid from MUI

const Dashboard = () => {
  const mockData = [
    { title: "Users", value: 250 },
    { title: "Sales", value: "$1,200" },
    { title: "Orders", value: 85 },
    { title: "Profit", value: "$5,400" },
  ];

  const [gridData, setGridData] = useState([]);

  // Define the columns for the DataGrid
  const columns = [
    { field: "Name", headerName: "Name", width: 150 },
    { field: "Email", headerName: "Email", width: 250 },
    { field: "Age", headerName: "Age", width: 150 },
    { field: "Country", headerName: "Country", width: 180 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      {/* Displaying the mock data cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {mockData.map((item, index) => (
          <Card key={index} title={item.title} value={item.value} />
        ))}
      </div>

      {/* Displaying the chart */}
      <div style={{ height: "300px", marginTop: "20px" }}>
        <Chart />
      </div>
      
      {/* Template Download Button */}
      <TemplateDownload />

      {/* File upload to populate DataGrid */}
      <div style={{ marginTop: "20px" }}>
        <FileUpload setGridData={setGridData} />
      </div>

      {/* Displaying the DataGrid with uploaded data */}
      <div style={{ height: 400, marginTop: "20px" }}>
        <DataGrid 
          rows={gridData} 
          columns={columns} 
          pageSize={5} 
          rowsPerPageOptions={[5]} 
        />
      </div>
    </div>
  );
};

export default Dashboard;


