import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledMainDiv2LeadP = styled.p`
    line-height: 1.5;
    font-family: NotoSansKR, sans-serif;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 1rem;
    color: rgb(255, 255, 255);
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 700;
        font-size: 1.1rem;
        color: #02204a;
    `}
`;



export default StyledMainDiv2LeadP;


