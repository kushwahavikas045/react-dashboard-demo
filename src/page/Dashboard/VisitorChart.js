import React, { useState } from 'react';
import Chart from 'react-apexcharts';
const VisitorChart = () => {
  const [data, setData] = useState({
    series: [44, 55, 41],
            options: {
              colors: ['#24d2b5', '#20aee3', '#7460ee'],
              chart: {
                width: 380,
                type: 'donut',
              },
              legend:{
                show: false,
              },
              stroke: {
                width: 0,
              },
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      total: {
                        showAlways: true,
                        show: true
                      }
                    }
                  }
                }
              },
              labels: ["Desktop", "Mobile", "Tablet"],

            },

  })

  return (
    <Chart
      options={data.options}
      series={data.series}
      type="donut"

    />
  );
};

export default VisitorChart;
