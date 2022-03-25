import styled from "styled-components";

interface Props {
    text: string,
    logoImage?: any
}

const Logo = ({ text }: Props) => {
    return(
        <>
            <Wrapper>
                <OrangeDot />
                {/* TODO: Make this an a tag for a link */}
                <h1>{text}</h1>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    font-family: 'Varela Round', sans-serif;;
    color: white;
    position: relative;
`;
const OrangeDot = styled.div`
    position: absolute;
    right: 10px;
    top: 7px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: #ff4500;
`;

export default Logo;