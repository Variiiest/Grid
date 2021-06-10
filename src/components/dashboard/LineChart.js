import ReactApexChart from 'react-apexcharts'

import React, { Component } from 'react'

export class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
          name: "Disease 1",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Disease 2",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: 'Disease 3',
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        },
        {
          name: "Disease 4",
          data: [15, 2, 8, 4, 3, 2, 2, 20, 6, 2, 13, 13]
        },
        {
          name: "Disease 5",
          data: [3, 43, 623, 423, 113, 118, 129, 137, 136, 1151, 132, 135]
        },
        {
          name: 'Disease 6',
          data: [870, 570, 740, 990, 705, 138, 162, 147, 182, 156, 145, 147]
        }
      ],
      options: {
        chart: {
          height: 550,
          type: 'line',
          zoom: {
            enabled: true
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'straight',
        },
        title: {
          text: 'Diseases',
          align: 'left'
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + "per day"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per day"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
      },
    
    
    };
  }


    
    render() {
        return (
            <div>
                  <div id="chart" className="bg-white shadow border rounded">
                  <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>
    
                
            </div>
        )
    }
}

export default LineChart

