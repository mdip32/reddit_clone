import { NONAME } from 'dns';
import styled from 'styled-components';

interface Props {
    item: string,

}

export default function DropdownItem({ item }: Props) {

    return(
        <Item>
         {item}
        </Item>
    )
}

const Item = styled.p`
    color: white;
    padding: 7px 16px;
    border-radius: 7px;
    font-size: 14px;

    &:hover {
        background-color: #2c2c2e;
    }
`