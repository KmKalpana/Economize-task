import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
export default function LineGraph() {
  return (
    <div>
      <Line
        width={0.2}
        height={200}
        data={{
          // x-axis label values
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
          datasets: [
             {
               label:'1', 
                data: [200, 300,323,231,435,231,550,342,231,200],
                fill:true,
                 borderColor: 'rgb(75, 192, 192)',
             
            },
            {
                label:'2',
                data: [250,213,245,300,342],
                fill: false,
                borderColor:'gray'
            },
          ],
        }}
         
      />
    </div>
  );
}

