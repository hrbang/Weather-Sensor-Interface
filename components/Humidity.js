import { useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2';
import { styled } from "styled-components";

import {
    CategoryScale, Chart,
    Filler,
    Legend,
    LineElement, LinearScale, PointElement, Title, Tooltip
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title, Filler);

const ChartElement = styled.div`
    background-color: #fff;
    border-radius: 12px;
    padding: 32px;
    width: 100%;
    position: relative;
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

const Humidity = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/getData');
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, [setData, data]);

    const chartData = {
        labels: data.map(item => item.dateTime),
        datasets: [
            {
                label: 'Humidity',
                data: data.map(item => item.humidity),
                backgroundColor: 'rgb(224,144,223, 0.4)',
                fill: true,
                pointBackgroundColor: '#8800C7',
            },
        ],
    };

    return (
        <ChartElement>
            <ChartHeader>
                <ChartTitle>Humidity</ChartTitle>
                <ChartText>En graf over den data som vores Sensehat opfanger af fugtighed i lokalet</ChartText>
            </ChartHeader>
            <Line data={chartData} />

        </ChartElement>
    )
}

export default Humidity