import React from "react";
import Card from "./Card";
import Chart from "./Chart";

const Dashboard = () => {
  const mockData = [
    { title: "Users", value: 250 },
    { title: "Sales", value: "$1,200" },
    { title: "Orders", value: 85 },
    { title: "Profit", value: "$5,400" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {mockData.map((item, index) => (
          <Card key={index} title={item.title} value={item.value} />
        ))}
      </div>
      <div style={{ height: "300px", marginTop: "20px" }}>
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
