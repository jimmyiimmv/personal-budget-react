/*import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

function Chart(){
    return (
        <div className="chart">
            CHART
        </div>
    )
}

export default Chart;*/

import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

const budget = require("./budgetsdata.json"); 


const Chart = () => {
  const [chartData, setChartData] = useState({})

  const chartA = () => {
      setChartData({
        labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        datasets: [
            {
                label: 'test label',
                data: [21, 15, 24, 55, 21, 32, 11],
                backgroundColor: [
                    '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#fd6b19',
                    '#00C61B',
                    '#0DFFE9',
                    '#C400A4',
                ],
            }

        ]

      })
    }

    useEffect(() => {
        chartA()
    }, [])

    return(
        <div className="App">
            
            <Pie data={chartData}/>
        </div>

    )
}
export default Chart;
