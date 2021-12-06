import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import categories from '../../utils/categories.js';
import '../../styles.css';

const TestChartApp = ( {series} ) => {

  // const [currentSeries, setCurrentSeries] = useState([])

  const chartSpecs = {
    series: series,
    options: {
      chart: {
        type: 'polarArea',
        height: 3000
      },
      height: 3000,
      stroke: {
        colors: ['#fff']
      },
      yaxis: {
        min: 0,
        max: 10
      },
      labels: categories.map((category) => {
        return category.title;
      }),
      colors: categories.map((category) => {
        return category.color;
      }),
      legend: {
        position: 'top',
        labels: {
          colors: ['#fff']
        }
      },
      fill: {
        opacity: 0.9,
        colors: categories.map((category) => {
          return category.color;
        })
      },
      responsive: [{
        breakpoint: 3000,
        options: {
          chart: {
            width: 600
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  };

  return (

    <div id="chart" className="childChart">
      <Chart options={chartSpecs.options} series={chartSpecs.series} type="polarArea" />
    </div>

  );
};

export default TestChartApp;