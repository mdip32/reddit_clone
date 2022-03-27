import { useState } from "react";
import styled from "styled-components";
import Caret from "./Caret";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import DropdownItems from "./DrowdownItems";

interface Props {
    label: string,
    items?: string[]
}

// DELETE THIS!!


export default function Dropdown({ label }: Props) {
    const [displayDropdown, setDisplayDropdown] = useState(false);

    function handleDropDownDisplay() {
        setDisplayDropdown(!displayDropdown);
    }

    return (
        <DropdownWrapper>
            <DropdownButton label="Home" handleClick={handleDropDownDisplay}/>
            {displayDropdown && <DropdownContent/>}
        </DropdownWrapper>
    );
}

// Give this a min-width at some point
// Percent width might also not be the best option here
const DropdownWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    width: 15%;
    height: 90%;
    border-radius: 7px;
    display: flex;
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
        outline: 1px solid #9b9b9b;
    }
`