import React from 'react'
import { useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { loadToys } from '../store/actions/toy.action'
import { toyService } from '../services/toy.service'

ChartJS.register(ArcElement, Tooltip, Legend)


export function BarsChart(props) {
    const { toys, isLoading } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()
    console.log(toys)

    useEffect(() => {
        dispatch(loadToys())
    }, [])
    const toysLabel = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery Powered", "Animal"]
    if (!toys) return <div>Loading...</div>
    const labelCount = toyService.calcLabelData(toys)
    const toysPrice = toyService.calcPriceData(toys)
    console.log(labelCount)
    console.log(toysPrice)

    const data = {
        labels: toysLabel,
        datasets: [
            {
                id: 1,
                label: '# of Labels',
                data: labelCount,
                backgroundColor: [
                    'rgba(255, 102, 102, 0.2)',
                    'rgba(255, 178, 102, 0.2)',
                    'rgba(255, 255, 102, 0.2)',
                    'rgba(178, 255, 102, 0.2)',
                    'rgba(102, 255, 255, 0.2)',
                    'rgba(102, 102, 255, 0.2)',
                    'rgba(178, 102, 255, 0.2)',
                    'rgba(255, 102, 255, 0.2)',
                    'rgba(192, 192, 192, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 102, 102, 0.2)',
                    'rgba(255, 178, 102, 0.2)',
                    'rgba(255, 255, 102, 0.2)',
                    'rgba(178, 255, 102, 0.2)',
                    'rgba(102, 255, 255, 0.2)',
                    'rgba(102, 102, 255, 0.2)',
                    'rgba(178, 102, 255, 0.2)',
                    'rgba(255, 102, 255, 0.2)',
                    'rgba(192, 192, 192, 0.2)',


                ],
                borderWidth: 1,
            },
            {
                id: 2,
                label: 'Price per label',
                data: toysPrice,
                backgroundColor: [
                    'rgba(255, 102, 102, 0.2)',
                    'rgba(255, 178, 102, 0.2)',
                    'rgba(255, 255, 102, 0.2)',
                    'rgba(178, 255, 102, 0.2)',
                    'rgba(102, 255, 255, 0.2)',
                    'rgba(102, 102, 255, 0.2)',
                    'rgba(178, 102, 255, 0.2)',
                    'rgba(255, 102, 255, 0.2)',
                    'rgba(192, 192, 192, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 102, 102, 0.2)',
                    'rgba(255, 178, 102, 0.2)',
                    'rgba(255, 255, 102, 0.2)',
                    'rgba(178, 255, 102, 0.2)',
                    'rgba(102, 255, 255, 0.2)',
                    'rgba(102, 102, 255, 0.2)',
                    'rgba(178, 102, 255, 0.2)',
                    'rgba(255, 102, 255, 0.2)',
                    'rgba(192, 192, 192, 0.2)',

                ],
                borderWidth: 1,
            },
        ],
    }

    return <section className='toychart'><div style={{ width: "40%", margin: "auto" }}><Doughnut data={data} /></div></section>
}
