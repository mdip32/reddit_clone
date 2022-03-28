import React from "react";
import { useState } from "react";
import styled from "styled-components";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

interface Props {
    label: string,
    items?: string[]
}

// TODO: Move this somewhere else
export const DropdownContext = React.createContext<boolean>(false);

export default function Dropdown({ label }: Props) {
    const [displayDropdown, setDisplayDropdown] = useState(false);

    return (
        <DropdownWrapper>
            <DropdownContext.Provider value={displayDropdown}>
                <DropdownButton label="Home" handleClick={() => {setDisplayDropdown(!displayDropdown)}}/>
                {displayDropdown && <DropdownContent/>}
            </DropdownContext.Provider>
        </DropdownWrapper>
    );
}

// Give this a min-width at some point
// Percent width might also not be the best option here
const DropdownWrapper = styled.div`
    position: relative;
    bottom: -2px;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    width: 15%;
    height: 90%;
    border-radius: 7px;
    display: flex;
    padding: 8px 12px;
    cursor: pointer;
    outline: 1px solid #343436cc;

    &:hover {
        outline: 1px solid #636363;
    }
`