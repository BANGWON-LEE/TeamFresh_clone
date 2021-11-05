import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledNoticeH5 = styled.h5`
    margin-top: 0;
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
    font-size: 1.25rem;

    ${customMedia.lessThan('mobile')`
        
        text-align: left;
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: .5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
        font-size: 1.25rem;
    `}
`;



export default StyledNoticeH5;


