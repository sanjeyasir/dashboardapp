import React from "react";
import ApexCharts from "react-apexcharts";

const Chart = () => {
  const chartData = {
    series: [
      {
        name: "Sales",
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 1000)),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 300,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      title: {
        text: "Monthly Sales",
        align: "center",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `$${val}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default Chart;

