import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledConnectH2 = styled.h2`
    text-align: center!important;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
    font-size: 2rem;

    ${customMedia.lessThan('mobile')`
        
        text-align: center!important;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: .5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
        font-size: 2rem;
    `}

`;

export default StyledConnectH2;


