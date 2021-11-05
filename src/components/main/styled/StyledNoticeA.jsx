import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeA = styled.a`

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    box-sizing: border-box;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    transform: translate(80%, 0rem);
    opacity: 0.6;

    ${customMedia.lessThan('mobile')`
        
        box-sizing: border-box;
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
        transform: translate(80%, 0rem);
        opacity: 0.6;
    `}

`;


export default StyledNoticeA;





