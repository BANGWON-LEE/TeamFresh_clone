import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeDetailA2 = styled.a`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    font-family: NotoSansKR, sans-serif;
    box-sizing: border-box;
    background-color: transparent;
    position: absolute;
    right: 2.0rem;
    color: inherit;
    text-decoration: none;

    
    ${customMedia.lessThan('mobile')`
        
        box-sizing: border-box;
        background-color: transparent;
        position: absolute;
        right: 2.0rem;
        color: inherit;
        text-decoration: none;
        
    `}

`;


export default StyledNoticeDetailA2


