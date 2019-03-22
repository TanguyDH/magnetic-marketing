// import React, { Component } from 'react'
// import './Chart.css';
// import {Bar} from 'react-chartjs-2';



// const breakpoints = {
//     bigDesktop: 2000,
//     desktop: 1040,
//     tablet: 800,
//     miniTablet: 500,
//     mobile: 400,
//     minMobile: 400
// };
// var particleOpt = 30;


// if (window.innerWidth > breakpoints.bigDesktop) {
//     particleOpt = 25;
// }
// else if(window.innerWidth > breakpoints.desktop) {
//     particleOpt = 25;
// }
// else if (window.innerWidth > breakpoints.tablet) {
//     particleOpt = 25;
// }
// else if (window.innerWidth > breakpoints.miniTablet) {
//     particleOpt = 50;
// } else if (window.innerWidth > breakpoints.mobile) {
//     particleOpt = 70;
// } else  {
//     particleOpt = 110;
// }



// class Chart extends Component {
//     state = {
//          chartData:{
//         labels: ['Magnetic', 'Facebook ad', 'Classic agency'],
//         datasets:[
//           {
//             label:'Magnetic %',
//             data:[
//               16.2,
//               1.4,
//               5.3,
//             ],
//             backgroundColor:[
//               'rgba(255, 99, 132, 0.6)',
//               'rgba(54, 162, 235, 0.6)',
//               'rgba(255, 206, 86, 0.6)',
//               'rgba(255, 99, 132, 0.6)'
//             ]
//           }
//         ]
// }
//     }
//   render() {
//     return <div className="Chart">
//         <Bar
//       data={this.state.chartData}
//     id='chart'
//     width={50}
//     height={particleOpt}
//     options={{
//         maintainAspectRatio: true
//     }}

             
//       options={{
//           title:{
//               display: true, 
//               text: 'Engagement rate %',
//               fontSize: '30'
//           }
//        }}
       
//       />
//       </div>;
//   }
// }
// export default Chart;



// import React, { Component } from 'react'
// import './Chart.css';
// import {Bar} from 'react-chartjs-2';



// const breakpoints = {
//     bigDesktop: 2000,
//     desktop: 1040,
//     tablet: 800,
//     miniTablet: 500,
//     mobile: 400,
//     minMobile: 400
// };
// var particleOpt = 30;


// if (window.innerWidth > breakpoints.bigDesktop) {
//     particleOpt = 25;
// }
// else if(window.innerWidth > breakpoints.desktop) {
//     particleOpt = 25;
// }
// else if (window.innerWidth > breakpoints.tablet) {
//     particleOpt = 25;
// }
// else if (window.innerWidth > breakpoints.miniTablet) {
//     particleOpt = 50;
// } else if (window.innerWidth > breakpoints.mobile) {
//     particleOpt = 70;
// } else  {
//     particleOpt = 110;
// }

// import React, { Component } from 'react'
// import './Chart.css';
// import FusionCharts from "fusioncharts";
// import Charts from "fusioncharts/fusioncharts.charts";
// import ReactFC from "react-fusioncharts";
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// const myDataSource = {
//   chart: {
//     caption: "Engagement rate %",
//     subCaption: "sisi",
//     xAxisName: "Country",
//     yAxisName: "%",
//     numberSuffix: "%",
//     theme: "fusion"
//   },
//   data: [
//     {
//       label: "Magnetic",
//       value: "12.6"
//     },
//     {
//       label: "Facebook Ad",
//       value: "1.4"
//     },
//     {
//       label: "Classic agence",
//       value: "5.2"
//     },
//       {
//           label: "Classic agence",
//           value: "5.2"
//       },
//       {
//           label: "Classic agence",
//           value: "5.2"
//       }
//   ]
// };

// const chartConfigs = {
//     type: 'column2d',
//     width: 600,
//     height: 400,
//     dataFormat: 'json',
//     dataSource: myDataSource,
// };

import React, { Component } from 'react'
import './Chart.css';
import ReactChartkick, { BarChart } from "react-chartkick";
import Chart from "chart.js";
import {Icon} from 'semantic-ui-react';

class Chartt extends Component {
    
  render() {
    return (
      <div className="Chart">
        <h3 className="Chart__title">
          Comparative average engagement rate %
        <span className='Chart__questionMark'>
            <Icon name="question circle outline" className='Chart__icon' />
          </span>
        </h3>
            <BarChart
                data={[
                    ["magnetic", 10.6],
                    ["Facebook Ad", 1.4],
                    ["Classic agency", 5.2]
                ]}
            />
        </div>
    );
  }
}
export default Chartt;