import ReactApexCharts from 'react-apexcharts'
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Metric1',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        },
        {
          name: 'Metric2',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        },
        {
          name: 'Metric3',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        },
        {
          name: 'Metric4',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        },
        {
          name: 'Metric5',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        },
        {
          name: 'Metric6',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        },
        {
          name: 'Metric7',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        },
        {
          name: 'Metric8',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        },
        {
          name: 'Metric8',
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
              radius: 30,
              enableShades: false,
              colorScale: {
                ranges: [{
                    from: 0,
                    to: 50,
                    color: '#008FFB'
                  },
                  {
                    from: 51,
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
            text: 'Rounded (Range without Shades)'
          },
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
</div>


      );
    }
  }
