import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeH2 = styled.h2`
    margin-top: 0;
    font-family: inherit;
    line-height: 1.2;
    color: inherit;
    margin-bottom: 2rem;
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;

        
    ${customMedia.lessThan('mobile')`
        
        box-sizing: border-box;
        margin-top: 0;
        font-family: inherit;
        line-height: 1.2;
        color: inherit;
        margin-bottom: 2rem;
        margin-left: 0.5rem;
        font-size: 1.2rem;
        font-weight: 700;
    `}

`;



export default StyledNoticeH2;

