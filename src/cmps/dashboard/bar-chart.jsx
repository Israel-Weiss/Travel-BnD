import { Bar, Line, Pie } from 'react-chartjs-2'
import React, { useState } from 'react'
import Chart from 'chart.js/auto';


export function BarsChart() {

    const [barData, setBarData] = useState({
        labels: ['October', 'November', 'December'],
        datasets: [
            
            {
                label: 'Last year last quarter revenues in $USD',
                data: [
                    1200,
                    2200,
                    3100
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)'
                ],
                borderWidth: 3
            },
            {
                label: 'Planned revenues on for last quarter of this year in $USD',
                data: [
                    4800,
                    3050,
                    7300,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ],
                borderWidth: 3
            }
        ]
    })
    // set options
    const [barOptions, setBarOptions] = useState({
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            title: {
                display: true,
                text: 'Data Orgranized In Bars',
                fontSize: 25
            },
            legend: {
                display: true,
                position: 'top'
            }
        }
    })

    return (
        <div className="BarExample">
            <Bar
                data={barData}
                options={barOptions.options} />
        </div>
    )
}