import { Bar, Line, Pie } from 'react-chartjs-2'
import React, { useState } from 'react'
import Chart from 'chart.js/auto';
import { orderService } from '../../services/order.service';

export function LinesChart({orders}) {
        const ordersData = orderService.calcRevenues(orders)
        const currentYearData = ordersData[0]
        const lastYearData = ordersData[1]
        
        const [barData, setBarData] = useState({
            
            labels: ['January','February', 'March', 'April','May','June', 'July', 'August','September','October', 'November', 'December'],
            datasets: [
                
                {
                    label: 'Last year revenues in $USD',
                    data: [
                        lastYearData[0],
                        lastYearData[1],
                        lastYearData[2],
                        lastYearData[3],
                        lastYearData[4],
                        lastYearData[5],
                        lastYearData[6],
                        lastYearData[7],
                        lastYearData[8],
                        lastYearData[9],
                        lastYearData[10],
                        lastYearData[11],
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
    
                    ],
                    borderWidth: 3
                },
                {
                    label: 'This year revenues in $USD',
                    data: [
                        currentYearData[0],
                        currentYearData[1],
                        currentYearData[2],
                        currentYearData[3],
                        currentYearData[4],
                        currentYearData[5],
                        currentYearData[6],
                        currentYearData[7],
                        currentYearData[8],
                        currentYearData[9],
                        currentYearData[10],
                        currentYearData[11],
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
                    position: 'bottom',
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
                    fontSize: 25,
                    position: 'bottom'

                
                },
                plugins: {
                    legend: {
                      position: "bottom",
                      rtl: true,
                      labels: {
                          position: "bottom",
                        usePointStyle: true,
                        pointStyle: "square",
                        
                      }
                    }
                  }
                
            }
        })
    
        return (
            <div className="bar">
                <Line
                    data={barData}
                    options={barOptions.options} />
            </div>
        )
    }

    