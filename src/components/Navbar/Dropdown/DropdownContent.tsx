import styled from "styled-components";
import DropdownItem from "./DrowdownItems";

export default function DropdownContent() {
    const testItems = ['Hot', 'New', 'Top', 'Controversial', 'Rising'];

    
    return (
        <Items>
            {testItems.map((item, index) => {
                return (
                    <DropdownItem key={index} item={item}/>
                )
            })}
        </Items>
    );
}

const Items = styled.div`
    position: absolute;
    width: 100%;
    top: 117%;
    outline: 1px solid red;
    padding: 12px;
    left: 0px;
    background-color: #1a1a1b;
    border-radius: 7px;
    outline: 1px solid #636363;

`