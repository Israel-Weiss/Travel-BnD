import React from 'react'
import { useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { orderService } from '../../services/order.service'

ChartJS.register(ArcElement, Tooltip, Legend)


export function OrderChart({orders}) {
    const ordersStatus = ["Approved", "Cancelled", "Pending"]
    const statusCount = orderService.getStatus(orders)
    const data = {
        labels: ordersStatus,
        datasets: [
            {
                id: 1,
                label: 'Orders by status',
                data: statusCount,
                backgroundColor: [
                    'rgba(55, 186, 18, 0.4)',
                    'rgba(255, 33, 33, 0.2)',
                    'rgba(255, 255, 33, 0.4)',
                ],
                borderColor: [
                    'rgba(34,34,34, 0.5)',
                    'rgba(34,34,34, 0.5)',
                    'rgba(34,34,34, 0.5)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return <section className='order-chart'><div className="pieChart" style={{ width: "220px", height:"220px"}}><Doughnut data={data} options={{
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: "bottom",
            rtl: true,
            labels: {
                position: "bottom",
              usePointStyle: true,
              pointStyle: "circle",
              
            }
          }
        }
      }}
         /></div></section>
}
