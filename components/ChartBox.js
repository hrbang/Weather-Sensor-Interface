import React, { useEffect } from 'react'

import { styled } from "styled-components"

import { Chart } from "chart.js"

const ChartElement = styled.div`
    background-color: #fff;
    border-radius: 12px;
    padding: 32px;
    width: 100%;
    position: relative;
`

const Canvas = styled.canvas`
    width: 100%;
    height: 500px;
`

const ChartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`

const ChartTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.4px;
    background-color: #e5e5e5;
    display: inline-block;
    padding: 9px 12px;
    border-radius: 12px;
`

const ChartText = styled.p`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.4px;
    margin-bottom: 16px;
    color: #4F4F4F;
    max-width: 350px;
`

const ChartBox = ({ chartId }) => {

    useEffect(() => {
        var ctx = document.getElementById(chartId).getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133],
                    label: "Applied",
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                    fill: false,
                }
                ]
            },
        });
    }, [])

    return (
        <ChartElement>
            <ChartHeader>
                <ChartTitle>Chart Title</ChartTitle>
                <ChartText>En graf over den data som vores Sensehat opfanger af Temperatur i lokalet</ChartText>
            </ChartHeader>
            <Canvas id={chartId}></Canvas>
        </ChartElement>
    )
}

export default ChartBox