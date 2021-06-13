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
          data: [15, 51, 18, 14, 13, 16, 11, 10, 16, 81, 5, 0]
        },
        {
          name: 'Disease 3',
          data: [8, 7, 4, 11, 5, 38, 62, 47, 12, 56, 45, 47]
        },
    
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
                  <div id="chart" className="bg-green-50 shadow-2xl border rounded-xl">
                  <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>
    
                
            </div>
        )
    }
}

export default LineChart

