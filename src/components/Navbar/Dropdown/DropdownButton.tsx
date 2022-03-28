import styled from "styled-components";
import Caret from "./Caret";

interface Props {
    label: string,
    handleClick: () => void;
}

export default function DropdownButton({ label, handleClick }: Props) {
    return (
      <>
        <StyledDropdownButton onClick={handleClick}>
                {label}
                <Caret />
        </StyledDropdownButton>
      </>

    );
}

const StyledDropdownButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    top: -2px;
`

