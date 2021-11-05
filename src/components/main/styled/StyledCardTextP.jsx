import styled from "styled-components";
import customMedia from "../../customMedia";

export const StyledCardTextP = styled.p`
    color: rgb(34, 34, 34);
    -webkit-box-direction: normal;
    word-wrap: break-word;
    box-sizing: border-box;
    margin-top: 0;
    font-size: 0.85rem;
    margin-bottom: 1.2rem;

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        margin-top: 0;
        font-size: 0.85rem;
        margin-bottom: 1.2rem;
    `}

`;
export default StyledCardTextP;









