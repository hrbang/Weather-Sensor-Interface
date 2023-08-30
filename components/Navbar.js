import { ChartPieIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { styled } from "styled-components";

const Nav = styled.nav`
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
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
    background-color: ${props => props.isactive ? '#25f595' : 'transparent'};
    padding: 10px 20px;
    border-radius: 100vw;
    border: none;
    outline: none;
    transition: background-color 220ms ease-in-out, color 220ms ease-in-out;
    display: flex;
    align-items: center;

    svg {
        margin-right: 8px;
        stroke-width: 2px;
    }

`

const Navbar = ({ isActive, onClickHandler }) => {
    const showNavbar = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                delay: 0.2,
                duration: 0.4,
                ease: [0.165, 0.84, 0.44, 1]
            },
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.4,
                ease: [0.165, 0.84, 0.44, 1]
            },
        },
    }

    return (
        <Nav>
            <motion.div initial="hidden" animate="animate" variants={showNavbar}>
                <NavInner>
                    <NavItem isactive={isActive === "charts"} onClick={() => onClickHandler("charts")}>
                        <ChartPieIcon height={24} width={24} />
                        Data charts
                    </NavItem>
                    <NavItem isactive={isActive === "documentation"} onClick={() => onClickHandler("documentation")}>
                        <DocumentIcon height={24} width={24} />
                        Documentation
                    </NavItem>
                </NavInner>
            </motion.div>
        </Nav>
    )
}

export default Navbar