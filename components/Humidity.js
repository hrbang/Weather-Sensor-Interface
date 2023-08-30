import moment from 'moment';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
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
    flex-basis: 50%;
    display: flex;
    position: relative;
    flex-direction: column;
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

        const interval = setInterval(() => {
            fetchData()
        }, 10000)

        return () => clearInterval(interval)

    }, []);

    const processData = () => {
        const highestValuesByDayAndHour = {};

        data.forEach((item) => {
            const timestamp = new Date(item.dateTime);
            const dateKey = timestamp.toISOString().split('T')[0]; // Extract date part
            const hourKey = timestamp.getUTCHours();
            const value = item.humidity;

            if (!highestValuesByDayAndHour[dateKey]) {
                highestValuesByDayAndHour[dateKey] = {};
            }

            if (
                !highestValuesByDayAndHour[dateKey][hourKey] ||
                value > highestValuesByDayAndHour[dateKey][hourKey].value
            ) {
                highestValuesByDayAndHour[dateKey][hourKey] = { value, timestamp };
            }
        });

        const processedData = [];
        for (const dateKey in highestValuesByDayAndHour) {
            for (const hourKey in highestValuesByDayAndHour[dateKey]) {
                processedData.push(highestValuesByDayAndHour[dateKey][hourKey]);
            }
        }

        return processedData;
    };

    const processedData = processData();

    const chartData = {
        labels: processedData.map((item) => moment(item.timestamp.toISOString()).format('DD/MM/YYYY HH:mm')),
        datasets: [
            {
                label: 'Fugtighed',
                data: processedData.map((item) => item.value.toFixed(2)),
                backgroundColor: 'rgb(224,144,223, 0.4)',
                fill: true,
                pointBackgroundColor: '#8800C7',
            },
        ],

    };

    const showTemperature = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                delay: 0.3,
                duration: 0.4,
                ease: [0.165, 0.84, 0.44, 1]
            },
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.4,
                ease: [0.165, 0.84, 0.44, 1]
            },
        },
    }

    return (
        <motion.div initial="hidden" animate="animate" variants={showTemperature} style={{ width: "100%" }}>
            <ChartElement>
                <ChartHeader>
                    <ChartTitle>Humidity</ChartTitle>
                    <ChartText>En graf over den data som vores Sensehat opfanger af fugtighed i lokalet</ChartText>
                </ChartHeader>
                <Line data={chartData} />
            </ChartElement>
        </motion.div>
    )
}

export default Humidity