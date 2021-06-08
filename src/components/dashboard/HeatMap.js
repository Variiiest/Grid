import ReactApexChart from 'react-apexcharts'

import React, { Component } from 'react'

export class HeatMap extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
        
          series: [{
            name: 'Disease1',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          },
          {
            name: 'Disease2',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          },
          {
            name: 'Disease3',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          },
          {
            name: 'Disease4',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          },
          {
            name: 'Disease5',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          },
          {
            name: 'Disease6',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          },
          {
            name: 'Disease7',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          },
          {
            name: 'Disease8',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          },
          {
            name: 'Disease8',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          }
          ],
          options: {
            chart: {
              height: 350,
              type: 'heatmap',
            },
            stroke: {
              width: 0
            },
            plotOptions: {
              heatmap: {
                radius:0,
                enableShades: false,
                colorScale: {
                  ranges: [{
                      from: 0,
                      to: 20,
                      color: '#008FFB'
                    },
                    {
                      from: 41,
                      to: 100,
                      color: '#00E396'
                    },
                  ],
                },
            
              }
            },
            dataLabels: {
              enabled: true,
              style: {
                colors: ['#fff']
              }
            },
            xaxis: {
              type: 'category',
            },
            title: {
              text: 'Active Disease and Cases'
            },
          },
        
        
        };
      }
  
    
    render() {
        return (
            <div>
                  <div id="chart" className="bg-white shadow border rounded">
<ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={550} />
</div>

                
            </div>
        )
    }
}

export default HeatMap


