import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledImgH3 = styled.h3`
    text-align: center;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: .5rem;
    font-family: inherit;
    line-height: 1.2;
    color: inherit;
    font-size: 300%;
    text-shadow: rgb(0, 0, 0) 1px 1px 10px;
    padding-bottom: 1rem;
    font-weight: 700;
    opacity: 0.8;

    ${customMedia.lessThan('mobile')`
        text-align: center;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: .5rem;
        font-family: inherit;
        line-height: 1.2;
        color: inherit;
        text-shadow: rgb(0, 0, 0) 1px 1px 10px;
        padding-bottom: 1rem;
        font-weight: 700;
        opacity: 0.8;
        font-size: 140%;
    `}

`;



export default StyledImgH3;



