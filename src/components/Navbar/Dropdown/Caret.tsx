import styled from "styled-components"

export default function Caret() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <StyledCaret points="6 9 12 15 18 9"/>
        </svg>
    )
}

// Add animation to this later
const StyledCaret = styled.polygon`
    fill: white;
    stroke-width: 5;
`
