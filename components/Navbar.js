import React from 'react'
import { styled } from "styled-components"

const Nav = styled.nav`
    margin-top: 32px;
    background-color: #252524;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    z-index: 100;
    border-radius: 12px;
`

const Title = styled.h1`
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.4px;
`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Title>Weather Interface</Title>
            </div>
        </Nav>
    )
}

export default Navbar