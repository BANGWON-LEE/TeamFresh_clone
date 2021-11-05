import styled from "styled-components";
import customMedia from "../../customMedia";

const StyledMainDiv2LeadP2 = styled.p`
    font-weight: 400;
    line-height: 1.5;
    font-family: NotoSansKR, sans-serif;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 1rem;
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 1.2rem;

    ${customMedia.lessThan('mobile')`
        box-sizing: border-box;
        margin-top: 0;
        margin-bottom: 1rem;
        text-align: center;
        font-size: 0.85rem;
        line-height: 1.5rem;
        color: #02204a;
    `}
`;



export default StyledMainDiv2LeadP2;




