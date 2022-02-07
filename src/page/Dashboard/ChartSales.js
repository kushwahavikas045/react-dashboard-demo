import React, { useState } from 'react';
import Chart from 'react-apexcharts';
const ChartSales = () => {
  const [data, setData] = useState({
    options: {
        colors: ['#24d2b5', '#20aee3', '#7460ee']
      ,
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      legend:{
        show: false,
      }

    },
    series: [
      {
        name: "SITE-A",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 110]
      },
      {
        name: "SITE-B",
        data: [40, 70, 10, 30, 28, 60, 70, 91, 110]
      },
      {
        name: "SITE-C",
        data: [90, 40, 20, 18, 60, 80, 84, 91, 98]
      },
    ],



  })
  return (
    <Chart
      options={data.options}
      series={data.series}
      type="line"

    />
  );
};

export default ChartSales;
