import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeDetailA = styled.a`
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    box-sizing: border-box;
    background-color: transparent;
    white-space: normal;
    line-height: 1.2;
    height: 1.2em;
    overflow: hidden;
    font-size: 1.0rem;
    font-weight: 500;
    color: inherit;
    text-decoration: none;

    ${customMedia.lessThan('mobile')`
        
        box-sizing: border-box;
        background-color: transparent;
        white-space: normal;
        line-height: 1.2;
        height: 1.2em;
        overflow: hidden;
        font-size: 1.0rem;
        font-weight: 500;
        color: inherit;
        text-decoration: none;
        
    `}

`;



export default StyledNoticeDetailA;




