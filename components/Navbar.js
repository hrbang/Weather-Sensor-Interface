import { styled } from "styled-components";


const Nav = styled.nav`
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
`

const NavInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 2px 75px 0px rgba(37, 37, 37, 0.1);
    padding: 16px;
    border-radius: 100vw;
`

const NavItem = styled.button`
    font-size: 18px;
    font-weight: 700;
    color: #252525;
    text-decoration: none;
    background-color: ${props => props.isActive ? '#25f595' : 'transparent'};
    padding: 10px 20px;
    border-radius: 100vw;
    border: none;
    outline: none;
    transition: background-color 220ms ease-in-out, color 220ms ease-in-out;
`

const Navbar = ({ isActive, onClickHandler }) => {
    return (
        <Nav>
            <NavInner>
                <NavItem isActive={isActive === "charts"} onClick={() => onClickHandler("charts")}>
                    Data charts
                </NavItem>
                <NavItem isActive={isActive === "documentation"} onClick={() => onClickHandler("documentation")}>
                    Documentation
                </NavItem>
            </NavInner>
        </Nav>
    )
}

export default Navbar