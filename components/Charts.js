import Humidity from "./Humidity"
import Pressure from "./Pressure"
import Temperature from "./Temperature"

import { styled } from "styled-components"

const ChartContainer = styled.div`
    width: 100%;
    margin-top: 85px;
    margin-bottom: 85px;
    heighht: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;
`

const Charts = () => {
    return (
        <ChartContainer>
            <Temperature />
            <Humidity />
            <Pressure />
        </ChartContainer>
    )
}

export default Charts