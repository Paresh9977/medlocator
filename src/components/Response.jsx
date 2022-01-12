
// import { responseBar } from "../data";

import styled from 'styled-components'

const Container=styled.div`
    // width: 50%;
    height: 29px;
    padding-left: 12px;
    padding-top: 6px;
    font-size: 18px;
    border: 2px solid #c5f0c5;
    background-color: #c5f0c5;
    margin-top: 7px;
`;
const Desc=styled.p`
    font-weight:500;
`;

const Para=styled.span`
    font-weight:1000;
    color: rgb(5, 43, 150);
`;

const Response = (props) => {
    return (
        <Container>
                <Desc>Result for <Para>{props.desc}</Para> is here</Desc>
        </Container>
    )
}

export default Response
