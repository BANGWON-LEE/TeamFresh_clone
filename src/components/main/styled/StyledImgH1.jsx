import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledImgH1 = styled.h1`
    font-size: 200%;
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: rgb(0 0 0) 1px 1px 15px;
    line-height: 1.2;
    text-align: center;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: .5rem;
    font-family: inherit;
    color: inherit;

    ${customMedia.lessThan('mobile')`
        text-align: center;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: .5rem;
        font-family: inherit;
        color: inherit;
        line-height: 1.2;
        font-weight: 500;
        text-transform: uppercase;
        text-shadow: rgb(0, 0, 0) 1px 1px 15px;
        font-size: 110%;
    `}

`;



export default StyledImgH1;

    

