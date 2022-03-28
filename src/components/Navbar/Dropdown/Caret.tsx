import { useContext } from "react";
import styled from "styled-components"
import { DropdownContext } from "./Dropdown";

export default function Caret() {
    const dropdownContext = useContext(DropdownContext);

    return (
        <SVGWrapper open={dropdownContext} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" >
            <StyledCaret points="6 9 12 15 18 9"/>
        </SVGWrapper>
    )
}

const SVGWrapper = styled.svg<{open: boolean}>`
    transform: ${props => props.open ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 100ms linear;
`

// Add animation to this later
const StyledCaret = styled.polygon`
    fill: white;
    stroke-width: 5;

`
