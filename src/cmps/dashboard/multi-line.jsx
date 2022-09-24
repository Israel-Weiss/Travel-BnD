import { Bar, Line, Pie } from 'react-chartjs-2'
import React, { useState } from 'react'
import Chart from 'chart.js/auto';


export function LinesChart() {

    const [barData, setBarData] = useState({
        labels: ['October', 'November', 'December','January','February', 'March', 'April','May','June', 'July', 'August','September'],
        datasets: [
            
            {
                label: 'Last year revenues in $USD',
                data: [
                    1200,
                    1500,
                    1600,
                    1800,
                    1500,
                    1450,
                    1650,
                    1800,
                    1700,
                    1750,
                    1850,
                    1900,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',

                ],
                borderWidth: 3
            },
            {
                label: 'This year revenues in $USD',
                data: [
                    2000,
                    1900,
                    2100,
                    2200,
                    1950,
                    2050,
                    2050,
                    2100,
                    1950,
                    2050,
                    2250,
                    2350,
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
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
            <Line
                data={barData}
                options={barOptions.options} />
        </div>
    )
}